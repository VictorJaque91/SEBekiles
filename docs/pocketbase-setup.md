# Uppdrag: sätt upp hemsidan och PocketBase för SE*Bekiles

Du kör på **Proxmox-värden**. Sätt upp min mammas hemsida för kattuppfödning med en backend
där hon kan ändra innehållet själv. Hemsidan är en React-app (Vite) i repot
https://github.com/VictorJaque91/SEBekiles. Den läser i dag sin data från JavaScript-filer
och ska senare hämta den från PocketBase.

Det berör tre containrar:

| | Container | Vad du gör |
|---|---|---|
| A | **Ny:** `pocketbase` | Skapa. Installera PocketBase med tabeller och backup. |
| B | **Ny:** `sebekiles-web` | Skapa. Bygg hemsidan och servera den med nginx. Skicka `/api/` och `/_/` vidare till A. |
| C | **Befintlig:** den reverse proxy som tar emot trafik utifrån (där min portfolio ligger) | Lägg bara till ett site-block för mammas domän som pekar på B. |

## Säkerhetsregler, gäller hela uppdraget

- Du kör på värden som styr alla mina virtuella maskiner och containrar.
  **Rör inga andra VM:ar eller containrar** än A, B och C ovan, och i C bara det som står i steg 9.
- Ändra inte värdens nätverk, lagring, brandvägg eller Proxmox-inställningar.
- Visa vad du tänker göra innan varje steg, och vänta på mitt ja innan du skapar,
  ändrar eller startar om något.
- Gör **en snapshot av C** innan du ändrar något där.
- Skriv aldrig lösenord eller nycklar i filer eller kommandohistorik. Fråga mig när de behövs.

## Steg 0: Kartlägg och fråga

1. Kör `pct list`, `qm list` och `pvesm status` och visa resultatet.
2. Fråga mig:
   - vilken container som är C, alltså den som tar emot trafik på port 80/443,
   - vilken lagring A och B ska ligga på,
   - vilket nätverk de ska använda: bridge (t.ex. `vmbr0`), och DHCP eller fasta IP-adresser
     (fasta rekommenderas, eftersom proxyreglerna pekar på dem),
   - mammas domän, och om DNS redan pekar på min publika IP,
   - om repot är publikt eller privat. Om privat: vi lägger in en read-only deploy key i B.
3. Ta reda på vilken webbserver C kör (nginx eller Caddy), hur den hanterar certifikat
   (t.ex. certbot eller Caddys automatiska HTTPS) och var site-konfigurationen ligger.
   Visa det, men ändra inget än.

## Steg 1: Skapa containrarna A och B

För båda:
- Nästa lediga id: `pvesh get /cluster/nextid`.
- Mall: senaste Debian 12 standard via `pveam update` och `pveam available --section system`.
- **Unprivileged**, `onboot=1`. Root-lösenord eller SSH-nyckel: fråga mig.
- Starta, kontrollera nätverk (`pct exec <id> -- ping -c1 deb.debian.org`),
  kör `apt update && apt upgrade -y` och installera `curl`, `unzip`, `ca-certificates` och `git`.

| | Hostname | Kärnor | RAM | Disk |
|---|---|---|---|---|
| A | `pocketbase` | 1 | 512 MB | 8 GB |
| B | `sebekiles-web` | 2 | 2048 MB (bygget behöver minne) | 8 GB |

All installation görs inne i respektive container via `pct exec <id> -- ...`.

## Steg 2: Installera PocketBase (A)

1. Hämta **senaste stabila versionen** för linux_amd64 från
   https://github.com/pocketbase/pocketbase/releases. Kontrollera checksumman.
2. Läs dokumentationen för just den versionen på https://pocketbase.io/docs/.
   API:t för migreringar och superusers har ändrats mellan versioner, så gissa inte.
3. Skapa en systemanvändare `pocketbase` utan inloggning.
4. Lägg programmet i `/opt/pocketbase/` och data i `/opt/pocketbase/pb_data/`,
   ägda av `pocketbase`.

## Steg 3: PocketBase som tjänst (A)

Skapa en systemd-tjänst `pocketbase.service` som:
- kör `pocketbase serve --http=0.0.0.0:8090` som användaren `pocketbase`,
- startar automatiskt vid boot och startar om vid krasch (`Restart=always`),
- har `LimitNOFILE=4096`.

Aktivera och starta den, och visa `systemctl status pocketbase`.

Skapa ett superuser-konto med `pocketbase superuser create`. Fråga mig efter e-post och
lösenord.

## Steg 4: Tabellerna som en migrering (A)

Läs `src/data/cats.js`, `news.js`, `litters.js` och `shows.js` i repot för att se fälten
som tabellerna ska motsvara.

Skriv tabellerna som en JS-migrering i `/opt/pocketbase/pb_migrations/`, så att
strukturen kan återskapas. Fältnamn i snake_case. Lägg till en svensk hjälptext per fält
om versionen stöder det, så att mamma förstår fälten.

### `cats`

| Fält | Typ | Regler |
|---|---|---|
| `slug` | text | obligatorisk, unik, mönster `^[a-z0-9-]+$` (t.ex. `bjarven`) |
| `call_name` | text | obligatorisk (tilltalsnamn) |
| `registered_name` | text | obligatorisk (stamtavlenamn utan titlar) |
| `titles` | json | lista med strängar, t.ex. `["SC","JCH"]` |
| `breed` | select | `SIB`, `MCO` |
| `sex` | select | `male`, `female` |
| `neutered` | bool | |
| `status` | select | `home`, `moved` |
| `featured` | bool | visas på startsidan |
| `born` | date | |
| `color_name` | text | t.ex. `Svarttabby` |
| `color_ems` | text | t.ex. `n 22` |
| `image` | file | en fil, jpeg/png/webp, max 10 MB, thumbs `800x600` och `400x400` |
| `image_alt` | text | bildbeskrivning |
| `pedigree_url` | url | valfri (PawPeds) |
| `sverak_url` | url | valfri (SVERAKs stambok) |
| `sort_order` | number | valfri |

### `health_tests`

| Fält | Typ | Regler |
|---|---|---|
| `cat` | relation → `cats` | obligatorisk, en post, radera kaskad |
| `name` | text | obligatorisk, t.ex. `PK-def` |
| `result` | text | obligatorisk |
| `source` | text | t.ex. `MyCat DNA` |
| `date` | text | valfri, mönster `^\d{4}(-\d{2}(-\d{2})?)?$` (år, år-månad eller fullt datum) |

### `news`

| Fält | Typ | Regler |
|---|---|---|
| `title` | text | obligatorisk |
| `date` | date | obligatorisk |
| `text` | text | obligatorisk |
| `published` | bool | standard `true` |

### `litters`

| Fält | Typ | Regler |
|---|---|---|
| `name` | text | valfri, kullens namn, t.ex. `Yellowstonekullen` |
| `mother` | relation → `cats` | valfri, en post |
| `mother_name` | text | valfri, används när honan inte finns i `cats` |
| `father` | text | valfri (hanen är oftast extern) |
| `status` | select | `planned`, `mated`, `born`, `ready`, `archived` |
| `planned_date`, `mated_date`, `born_date`, `ready_date` | date | alla valfria |
| `note` | text | valfri |
| `kitten_count` | number | valfri, för tidigare kullar |
| `kitten_names` | json | valfri, lista med namn för tidigare kullar |
| `blog_url` | url | valfri |
| `images` | file | valfri, flera filer, jpeg/png/webp, max 10 MB per fil, thumbs `1000x750` |
| `images_alt` | json | valfri, bildbeskrivningar i samma ordning som `images` |

### `kittens`

| Fält | Typ | Regler |
|---|---|---|
| `litter` | relation → `litters` | obligatorisk, en post, radera kaskad |
| `name` | text | obligatorisk |
| `sex` | select | `male`, `female` |
| `color_name` | text | |
| `color_ems` | text | |
| `status` | select | `available`, `reserved`, `sold`, `staying` |
| `image` | file | valfri, en fil, jpeg/png/webp, max 10 MB, thumbs `400x400` |
| `image_alt` | text | |

### `shows` och `show_results`

`shows`:

| Fält | Typ | Regler |
|---|---|---|
| `name` | text | obligatorisk, t.ex. `Hälsingekatten` |
| `ring` | select | valfri, `A`, `B` |
| `date` | date | obligatorisk |

`show_results`:

| Fält | Typ | Regler |
|---|---|---|
| `show` | relation → `shows` | obligatorisk, en post, radera kaskad |
| `cat` | relation → `cats` | valfri, en post |
| `cat_name` | text | valfri, används för katter som inte finns i `cats` längre |
| `result` | text | obligatorisk, t.ex. `CAC, NOM` |
| `judge` | text | |

### Behörigheter (API rules)

Skapa också en auth-samling `editors`. Den ska användas av ett eget admin-gränssnitt senare.

För alla tabellerna ovan:
- **List och View:** öppet för alla (tom regel `""`).
  - Undantag för `news`: `published = true || @request.auth.collectionName = "editors"`.
- **Create, Update och Delete:** `@request.auth.collectionName = "editors"`.

Superusers går förbi reglerna ändå, så mamma kan arbeta i admin-gränssnittet från början.

Kör migreringen och visa att alla tabeller finns.

## Steg 5: PocketBase-inställningar och backup (A)

- **Applikationsnamn:** `SE*Bekiles`. **App URL:** `https://<mammas domän>`.
- **PocketBase-backup:** slå på automatisk backup varje natt och behåll de 7 senaste.
- **Proxmox-backup:** visa befintliga backupjobb (`cat /etc/pve/jobs.cfg`) och föreslå hur
  A och B ska läggas till. Ändra inte ett befintligt jobb utan mitt ja.

## Steg 6: Bygg hemsidan (B)

1. Installera **Node.js 22 LTS** från NodeSource. Debians egen Node är för gammal för Vite.
   Kontrollera med `node -v` och jämför med `engines` i `package.json` om det finns.
2. Installera `nginx` och `rsync`.
3. Skapa en användare `deploy` utan sudo.
4. Klona repot som `deploy` till `/opt/sebekiles/repo`. Om det är privat: skapa en
   ed25519-nyckel för `deploy`, visa den publika delen, och vänta medan jag lägger in den
   som read-only deploy key på GitHub.
5. Kör `npm ci` och `npm run build` och visa att `dist/` skapades utan fel.

## Steg 7: Servera hemsidan med nginx (B)

Skapa `/etc/nginx/sites-available/sebekiles`, länka till `sites-enabled` och ta bort
standardsidan. B behöver bara HTTP på port 80, eftersom C sköter HTTPS.

- `root /var/www/sebekiles;`
- `location / { try_files $uri /index.html; }`: React-appen använder klientrouting, så alla
  okända adresser ska ge `index.html`.
- `location /assets/`: `Cache-Control: public, max-age=31536000, immutable`
  (filnamnen innehåller en hash).
- `index.html`: `Cache-Control: no-cache`, så att nya versioner syns direkt.
- `location /api/` → `http://<A:s IP>:8090/api/`
  - `client_max_body_size 20M` för bilduppladdningar,
  - headers `Host`, `X-Forwarded-For`, `X-Forwarded-Proto` (använd värdet som kommer från C),
  - `proxy_buffering off` och HTTP/1.1 med `Upgrade`/`Connection` för `/api/realtime`.
- `location /_/` → `http://<A:s IP>:8090/_/` (PocketBase admin-gränssnitt), samma headers.
- Slå på gzip för text, css, js, json och svg.

Testa med `nginx -t` och ladda om.

## Steg 8: Deploy-skript (B)

Skapa `/opt/sebekiles/deploy.sh`, ägd av `deploy`, som:
1. kör `git pull --ff-only` i repot,
2. kör `npm ci` och `npm run build` och **avbryter** om något steg misslyckas,
3. kopierar `dist/` till `/var/www/sebekiles/` med `rsync -a --delete`,
4. skriver ut vilken commit som nu ligger ute.

`deploy` ska kunna skriva i `/var/www/sebekiles/` utan sudo.
Kör skriptet en gång och visa resultatet.

Visa hur jag kör det från värden: `pct exec <B:s id> -- su - deploy -c /opt/sebekiles/deploy.sh`.

## Steg 9: Site-block i reverse proxyn (C)

1. Snapshot: `pct snapshot <C:s id> fore-sebekiles`.
2. Skapa ett **nytt** site-block för mammas domän i en egen fil. Ändra inte befintliga
   site-block för andra domäner.
3. Allt för domänen → `http://<B:s IP>:80`, med headers `Host`, `X-Forwarded-For`,
   `X-Forwarded-Proto`, `Upgrade`/`Connection`, och en gräns för request body på 20 MB.
4. HTTPS för domänen på samma sätt som C redan gör för andra domäner (certbot eller Caddy),
   och omdirigering från HTTP till HTTPS.
5. Visa den nya filen och vänta på mitt ja.
6. Testa (`nginx -t` eller `caddy validate`) **innan** omladdning. Ladda om, starta inte om.
7. Om något går fel: ta bort den nya filen och ladda om. Hjälper inte det: `pct rollback`.

## Steg 10: Kontroll

När allt är klart, visa:
1. `systemctl status pocketbase` i A och `systemctl status nginx` i B, och att båda
   överlever en omstart av sina containrar.
2. `curl -I https://<domänen>/`: ska ge 200 över HTTPS.
3. `curl -I https://<domänen>/katter`: ska ge 200 (klientroutingen fungerar).
4. `curl https://<domänen>/api/health` och `.../api/collections/cats/records`: ska ge tom
   lista, inte fel.
5. Att ett POST mot `cats` **utan** inloggning nekas.
6. Att `https://<domänen>/_/` visar PocketBase inloggningssida.
7. Att min portfolio fortfarande fungerar.
8. En lista över allt du har skapat och ändrat: container-id, IP-adresser, filer,
   snapshot-namn och hur jag kör `deploy.sh`.

Importen av befintlig data (katter, bilder och resultat) görs i ett senare steg med ett
skript från repot, så den behöver du inte göra nu.
