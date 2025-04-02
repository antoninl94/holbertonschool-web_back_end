export default function uploadPhoto(filename) {
  if (typeof filename !== 'string') {
    return ('filename must be a string');
  }
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
