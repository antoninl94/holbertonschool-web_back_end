export default function cleanSet(set, startString) {
  if (!startString || startString === '') {
    return '';
  }
  if (!set) {
    return '';
  }
  return [...set].filter((element) => element.startsWith('bon'))
    .map((element) => element.slice(startString.length))
    .join('-');
}
