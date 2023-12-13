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
    <div className="greeting-container">
      <header className="header">
        <h1 className="title">Welcome to Front-End App</h1>
        <p className="subtitle">This app fetches greetings from a locally created API</p>
      </header>
      <main className="main-content">
        <div className="greeting-section">
          <h2 className="random-greeting">{randomGreeting}</h2>
        </div>
      </main>
    </div>
  );
};

export default Greeting;
