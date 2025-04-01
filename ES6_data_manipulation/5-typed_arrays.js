export default function createInt8TypedArray(length, position, value) {
  let buffer = new ArrayBuffer(length);
  buffer = new Int8Array(buffer);
  buffer[position] = value;
  return buffer;
}
