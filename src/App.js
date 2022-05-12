import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './Page/Chat/Chat';
import Home from './Page/Home/Home';
import News from './Page/News/News';
import User from './Page/User/User';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/news" element={<News />} />
      <Route path="/user" element={<User />} />

    </Routes>
  );
}

export default App;
