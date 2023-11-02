import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from './store';
import Message from './components/greet';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Message />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
