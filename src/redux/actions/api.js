import store from '../store';
import { setRandomGreeting } from '../greetingsSlice';

const API_URL = 'http://localhost:3000/api/v1/greetings/random';

const getRandomGreeting = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    store.dispatch(setRandomGreeting(data.greeting));
  } catch (error) {
    console.log('Fetch Error: ', error);
  }
};

export default getRandomGreeting;
