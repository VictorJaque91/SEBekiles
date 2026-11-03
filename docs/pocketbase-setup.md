# Uppdrag: sätt upp PocketBase för SE*Bekiles

Du kör på **Proxmox-värden**. Sätt upp PocketBase som backend för min mammas hemsida
för kattuppfödning. Det berör två containrar:

1. **En ny LXC-container** som du skapar och där PocketBase körs.
2. **Den befintliga webbcontainern**, där hemsidan och reverse proxyn (nginx eller Caddy)
   redan körs. Där ska du bara lägga till proxy-regler för PocketBase.

Hemsidan är en React-app (Vite) som i dag läser sin data från JavaScript-filer. Den ska
i stället hämta datan från PocketBase, och mamma ska kunna ändra innehållet själv i
PocketBase admin-gränssnitt.

## Säkerhetsregler, gäller hela uppdraget

- Du kör på värden som styr alla mina virtuella maskiner och containrar.
  **Rör inga andra VM:ar eller containrar** än den nya PocketBase-containern och den webbcontainer jag pekar ut.
- Ändra inte värdens nätverk, lagring, brandvägg eller Proxmox-inställningar.
- Visa vad du tänker göra innan varje steg, och vänta på mitt ja innan du skapar,
  ändrar eller startar om något.
- Gör **en snapshot av webbcontainern** innan du ändrar något i den.
- Skriv aldrig lösenord i filer eller kommandohistorik. Fråga mig när de behövs.

## Steg 0: Kartlägg och fråga

1. Kör `pct list` och `qm list` och visa resultatet.
2. Fråga mig:
   - vilken container som är webbcontainern,
   - vilken lagring den nya containern ska ligga på (visa `pvesm status`),
   - vilket nätverk den ska använda: bridge (t.ex. `vmbr0`), och DHCP eller fast IP,
   - vilken domän hemsidan har.
3. Ta reda på vilken webbserver webbcontainern kör (`pct exec <id> -- ...`),
   och var dess konfiguration för hemsidan ligger. Visa den, men ändra inget än.

## Steg 1: Skapa PocketBase-containern

- Nästa lediga id: `pvesh get /cluster/nextid`.
- Mall: senaste Debian 12 standard via `pveam update` och `pveam available --section system`.
- Inställningar: **unprivileged**, hostname `pocketbase`, 1 kärna, 512 MB RAM,
  8 GB disk, `onboot=1`. Root-lösenord eller SSH-nyckel: fråga mig.
- Starta containern och kontrollera att den har nätverk (`pct exec <id> -- ping -c1 deb.debian.org`).
- Kör `apt update && apt upgrade -y` och installera `curl`, `unzip` och `ca-certificates`.

All installation i steg 2–4 görs i den nya containern via `pct exec <id> -- ...`.

## Steg 2: Installera PocketBase

1. Hämta **senaste stabila versionen** för linux_amd64 från
   https://github.com/pocketbase/pocketbase/releases. Kontrollera checksumman.
2. Läs dokumentationen för just den versionen på https://pocketbase.io/docs/.
   API:t för migreringar och superusers har ändrats mellan versioner, så gissa inte.
3. Skapa en systemanvändare `pocketbase` utan inloggning.
4. Lägg programmet i `/opt/pocketbase/` och data i `/opt/pocketbase/pb_data/`,
   ägda av `pocketbase`.

## Steg 3: Kör som tjänst

Skapa en systemd-tjänst `pocketbase.service` som:
- kör `pocketbase serve --http=0.0.0.0:8090` som användaren `pocketbase`,
- startar automatiskt vid boot och startar om vid krasch (`Restart=always`),
- har `LimitNOFILE=4096`.

Aktivera och starta den, och visa `systemctl status pocketbase`.

Skapa ett superuser-konto med `pocketbase superuser create`. Fråga mig efter e-post och
lösenord.

## Steg 4: Skapa tabellerna som en migrering

Repot med hemsidan: https://github.com/VictorJaque91/SEBekiles.
Läs `src/data/cats.js`, `news.js`, `litters.js` och `shows.js` för att se fälten
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
| `pedigree_url` | url | valfri |
| `story` | text | valfri, för katter som flyttat |
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
| `image` | file | valfri, en fil, jpeg/png/webp, max 10 MB, thumbs `900x600` |
| `image_alt` | text | |
| `published` | bool | standard `true` |

### `litters`

| Fält | Typ | Regler |
|---|---|---|
| `mother` | relation → `cats` | obligatorisk, en post |
| `father` | text | valfri (hanen är oftast extern) |
| `status` | select | `planned`, `mated`, `born`, `ready`, `archived` |
| `planned_date`, `mated_date`, `born_date`, `ready_date` | date | alla valfria |
| `note` | text | valfri |

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
| `cat` | relation → `cats` | obligatorisk, en post |
| `result` | text | obligatorisk, t.ex. `CAC, NOM` |
| `judge` | text | |

### Behörigheter (API rules)

Skapa också en auth-samling `editors`. Den ska användas av ett eget admin-gränssnitt senare.

För alla tabellerna ovan:
- **List och View:** öppet för alla (tom regel `""`).
  - Undantag för `news`: `published = true || @request.auth.collectionName = "editors"`.
  - Undantag för `litters`: `status != "archived" || @request.auth.collectionName = "editors"`.
- **Create, Update och Delete:** `@request.auth.collectionName = "editors"`.

Superusers går förbi reglerna ändå, så mamma kan arbeta i admin-gränssnittet från början.

Kör migreringen och visa att alla tabeller finns.

## Steg 5: Inställningar och backup

- **Applikationsnamn:** `SE*Bekiles`. **App URL:** `https://<domänen>`.
- **PocketBase-backup:** slå på automatisk backup varje natt och behåll de 7 senaste.
- **Proxmox-backup:** visa befintliga backupjobb (`cat /etc/pve/jobs.cfg`) och föreslå hur
  den nya containern ska läggas till i dem. Ändra inte ett befintligt jobb utan mitt ja.

## Steg 6: Reverse proxy i webbcontainern

1. Gör en snapshot av webbcontainern: `pct snapshot <id> fore-pocketbase`.
2. Kopiera den nuvarande konfigurationsfilen till `<fil>.bak` inne i containern.
3. Lägg till, på **samma domän** som hemsidan så att inga CORS-inställningar behövs:
   - `/api/` → `http://<PocketBase-containerns IP>:8090/api/`
   - `/_/` → `http://<PocketBase-containerns IP>:8090/_/` (admin-gränssnittet)
4. Ta med:
   - nginx: `client_max_body_size 20M`; Caddy: motsvarande gräns för request body,
   - headers för WebSocket/SSE (`Upgrade`, `Connection`) och `X-Forwarded-For`/`X-Forwarded-Proto`,
   - för nginx: `proxy_buffering off` på `/api/realtime`.
5. Kontrollera att hemsidans egen `location /` har `try_files $uri /index.html;`
   eftersom React-appen använder klientrouting. Saknas den, föreslå att lägga till den.
6. Visa ändringen som en diff och vänta på mitt ja.
7. Testa konfigurationen (`nginx -t` eller `caddy validate`) **innan** omladdning.
   Ladda sedan om, starta inte om (`systemctl reload ...`).
8. Om något går fel: återställ `.bak`-filen och ladda om.

## Steg 7: Kontroll

När allt är klart, visa:
1. `systemctl status pocketbase` i PocketBase-containern, och att tjänsten överlever en
   omstart av containern (`pct reboot <id>`).
2. `curl https://<domänen>/api/health` utifrån, via proxyn.
3. `curl https://<domänen>/api/collections/cats/records`: ska ge tom lista, inte fel.
4. Att ett POST mot `cats` **utan** inloggning nekas.
5. Att `https://<domänen>/_/` visar PocketBase inloggningssida.
6. Att hemsidan fortfarande fungerar: `https://<domänen>/` och `https://<domänen>/katter`.
7. En lista över allt du har skapat och ändrat, med container-id, IP, filer och snapshot-namn.

Importen av befintlig data (katter, bilder och resultat) görs i ett senare steg med ett
skript från repot, så den behöver du inte göra nu.
