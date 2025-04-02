export default function handleResponseFromAPI(promise) {
  const promise = new Promise((resolve, reject) => {
    try {
      resolve({ status: 200, body: 'Success' });
    } catch (e) {
      reject(new Error(''));
    } finally {
      console.log('Got a response from the API');
    }
  });
  return promise;
}
