import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  if (typeof firstName !== 'string' || typeof lastName !== 'string') {
    return ('firstname and lastname must be a string');
  }
  return Promise.allSettled([uploadPhoto(fileName), signUpUser(firstName, lastName)]);
}
