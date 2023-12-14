import { setRandomGreeting } from '../greetingsSlice';

const API_URL = 'http://localhost:3000/api/v1/greetings/random';

const getRandomGreeting = () => async (dispatch) => {
  try {
    const response = await fetch(API_URL);
    const message = await response.json();
    dispatch(setRandomGreeting(message.greeting, message.id));
  } catch (error) {
    console.log('Fetch Error: ', error);
  }
};

export default getRandomGreeting;
