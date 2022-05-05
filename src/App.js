import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './Page/Chat/Chat';
import Home from './Page/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
