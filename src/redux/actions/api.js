import store from '../store';
import { setRandomGreeting } from '../greetingsSlice';

const getRandomGreeting = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/greetings/random');
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    store.dispatch(setRandomGreeting(data.greeting));
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error (e.g., display a message to the user)
  }
};

export default getRandomGreeting;
