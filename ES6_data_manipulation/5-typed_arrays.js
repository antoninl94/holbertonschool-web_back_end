export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  let buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  buffer = new Int8Array(buffer);
  buffer[position] = value;
  return view;
}
