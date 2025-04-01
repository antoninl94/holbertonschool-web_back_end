export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const array = new Int8Array(buffer);
  const view = new DataView(buffer);
  array[position] = value;
  return view;
}
