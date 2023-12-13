import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getRandomGreeting from '../redux/actions/api';

const Greeting = () => {
  const randomGreeting = useSelector((state) => state.greetings.randomGreeting);
  const dispatch = useDispatch();

  useEffect(() => {
    getRandomGreeting();
  }, [dispatch]);

  return (
    <div>
      <h1>Welcome to Frond-End App</h1>
      <p>This app is desgined to fetch greetings from locallay created api</p>
      <h2>{randomGreeting}</h2>
    </div>
  );
};

export default Greeting;
