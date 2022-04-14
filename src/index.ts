export default function lsEnum<E>(value: E): E[] {
  return Object.entries(value)
    .filter(entry => !parseInt(entry[0]) && parseInt(entry[0]) !== 0)
    .map(entry => entry[1]) as E[];
}
