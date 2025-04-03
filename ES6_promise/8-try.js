export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error('cannot divide by 0');
    } else if (typeof numerator !== 'number' || typeof denominator !== 'number') {
      throw new TypeError('Number and denominator must be numbers');
    }
    return numerator / denominator;
  } catch (e) {
    return e;
  }
}
