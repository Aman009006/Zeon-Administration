import React from "react";
import { Link } from "react-router-dom";
import './Home.scss'
const Home = () => {
  return (
    <div>
      <div><Link to="/">НОВОСТИ</Link></div>
      <div><Link to="/chat">ЧАТ</Link></div>
      <div><Link to="/">USERv</Link></div>
      <div>СКОРО...</div>
    </div>
  );
};

export default Home;
