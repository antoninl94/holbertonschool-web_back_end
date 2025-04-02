export default function getResponseFromAPI() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Successful');
    }, 100);
  });
  return promise;
}
