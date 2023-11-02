import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from './store';
import Message from './components/greet';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/greets/message')
      .then((response) => {
        dispatch(setMessage(response.data.message));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <Message />
    </div>
  );
}

export default App;
