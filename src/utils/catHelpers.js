export const breedNames = {
  SIB: 'Sibirisk katt',
  MCO: 'Maine Coon',
}

export function sexLabel(cat) {
  const sex = cat.sex === 'male' ? 'hane' : 'hona'
  return cat.neutered ? `Kastrerad ${sex}` : `Fertil ${sex}`
}

export function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function getAge(born, today = new Date()) {
  const birth = new Date(born)
  let years = today.getFullYear() - birth.getFullYear()
  let months = today.getMonth() - birth.getMonth()

  if (today.getDate() < birth.getDate()) months--
  if (months < 0) {
    years--
    months += 12
  }

  return years === 0 ? `${months} mån` : `${years} år`
}

export function formatTestDate(value) {
  const options = value.length === 7
  ? {year: 'numeric', month: 'long' }
  : {year: 'numeric', month: 'long', day: 'numeric'}

  return new Date(value).toLocaleDateString('sv-SE', options)
}