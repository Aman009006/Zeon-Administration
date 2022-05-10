import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const [isActive1, setIsActive1] = useState("false");
  const [isActive2, setIsActive2] = useState("false");
  const [isActive3, setIsActive3] = useState("false");
  const [isActive4, setIsActive4] = useState("false");

  return (
    // <div className="home_wrapper">
    //   <div className={`news_block ${isActive1 ? "active1" : "notActive1"}`}>
    //     <span
    //       onMouseEnter={() => setIsActive1(true)}
    //       onMouseLeave={() => setIsActive1(false)}
    //     >
    //       <Link to="/" className="news">
    //         НОВОСТИ
    //       </Link>
    //     </span>
    //   </div>
    //   <div className={`chat_block ${isActive2 ? "active2" : "notActive2"}`}>
    //     <span
    //       onMouseEnter={() => setIsActive2(true)}
    //       onMouseLeave={() => setIsActive2(false)}
    //     >
    //       <Link to="/chat" className="elegantshadow">
    //       Elegant Shadow
    //       </Link>
    //     </span>
    //   </div>
    //   <div className={`user_block ${isActive3 ? "active3" : "notActive3"}`}>
    //     <span
    //       onMouseEnter={() => setIsActive3(true)}
    //       onMouseLeave={() => setIsActive3(false)}
    //     >
    //       <Link to="/" className="user">
    //         USER
    //       </Link>
    //     </span>
    //   </div>
    //   <div className={`game_block ${isActive4 ? "active3" : "notActive3"}`}>
    //     <span
    //       onMouseEnter={() => setIsActive4(true)}
    //       onMouseLeave={() => setIsActive4(false)}
    //     >
    //       <Link to="/" className="game">
    //         СКОРО..
    //       </Link>
    //     </span>
    //   </div>
    // </div>
    <div className="home_wrapper">
      
      <div class="stage">
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
      </div>
      <div className="news_block">
        <span>
          <Link to="/" className="elegantshadow">
            NEWS
          </Link>
        </span>
      </div>
      <div className="chat_block">
        <span>
          <Link to="/chat" className=" insetshadow">
            CHAT
          </Link>
        </span>
      </div>
      <div className="user_block">
        <span>
          <Link to="/" className="deepshadow">
            USERS
          </Link>
        </span>
      </div>
      <div className="soon_block">
        <span>
          <Link to="/" className="retroshadow">
            SOON...
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Home;
