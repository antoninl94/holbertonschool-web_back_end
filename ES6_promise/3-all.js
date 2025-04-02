import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const newPromise = Promise.all([uploadPhoto(), createUser()]);
  return newPromise
    .then(([photoBody, userFullName]) => {
      console.log(`${photoBody.body} ${userFullName.firstName} ${userFullName.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
