import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Chat.scss";
import fon from "../../assets/img/fon.jpg";
import close from "../../assets/img/close.png";
const Chat = () => {
  const [zoom, setZoom] = useState(false);
  const [zomimg, setZomImg] = useState(0);
  const [count, setCount] = useState(4);

  const [message, setMessage] = useState("");
  const [falid, setFalid] = useState(false);

  useEffect(() => {
    if (message) {
      setFalid(false);
    } else {
      setFalid(true);
    }
  }, [message]);

   // MOBILE
   const [active, setActive] = useState("nav__menu");
   const [icon, setIcon] = useState("nav__toggler");
   const navToggle = () => {
     if (active === "nav__menu") {
       setActive("nav__menu nav__active");
     } else setActive("nav__menu");
     if (icon === "nav__toggler") {
       setIcon("nav__toggler toggle");
     } else setIcon("nav__toggler");
   };

  return (
    <section className="chat_wrapper">
      <div className="back_block">
        <button className="back_button">
          <Link to="/">
            <div class="triangle-left"></div>
          </Link>
        </button>
        <button onClick={() => setCount(count + 1)} className="us_button">
          {count} <span>US</span>
        </button>
        <button className="back_button">
          <Link to="/">
            <div class="triangle-right"></div>
          </Link>
        </button>
      </div>
      <div className="chat_container">
      <div className="mobile_mav">
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
       
      </div>
      <div className={active}>
        <div className="mobile_one">
          <div onClick={navToggle} className={icon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <div><p>CHAT</p></div>
        </div>

      </div>
        <div className="chat_user">
          <div className="chat_online">
            <div className="online_header">
              <p>chat</p>
            </div>
            <div className="online_scroll">
              <div className="online_user">
                <p>Name</p>
                <div className="line"></div>
              </div>
              <div className="online_user">
                <p>Name</p>
                <div className="line"></div>
              </div>
              <div className="online_user">
                <p>Name</p>
                <div className="line"></div>
              </div>
              <div className="online_user">
                <p>Name</p>
                <div className="line"></div>
              </div>
              <div className="online_user">
                <p>Name</p>
                <div className="line"></div>
              </div>
              <div className="online_user">
                <p>Name</p>
                <div className="line"></div>
              </div>
              <div className="online_user">
                <p>Name</p>
                <div className="line"></div>
              </div>
              <div className="online_user">
                <p>Name</p>
                <div className="line"></div>
              </div>
              <div className="online_user">
                <p>Name</p>
                <div className="line"></div>
              </div>
              <div className="online_user">
                <p>Name</p>
                <div className="line"></div>
              </div>
              <div className="online_user">
                <p>Name</p>
                <div className="line"></div>
              </div>
              <div className="online_user">
                <p>Name</p>
                <div className="line"></div>
              </div>
              <div className="online_user">
                <p>Name</p>
                <div className="line"></div>
              </div>
              <div className="online_user">
                <p>Name</p>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="chat_block">
          <div className="chat_header">
            <p className="chat_text">GLOBAL CHAT</p>
          </div>
          <div className="chat_main">
            <div className="chat_line"></div>
            <div className="chat_messenger">
              <div className="messenger">
                <p className="user">User:</p>
                <p className="text">text</p>
              </div>
              <div className="messenger">
                <p className="user">User:</p>
                <img
                  src={fon}
                  alt=""
                  onClick={() => {
                    setZoom(true);
                    // setZomImg(index);
                  }}
                />
              </div>
              <div className="messenger_me">
                <p className="text">text</p>
              </div>
              <div className="messenger">
                <p className="user">User:</p>
                <p className="text">text</p>
              </div>
              <div className="messenger_me">
                <p className="text">text</p>
              </div>
            </div>
            <div className="chat_line2"></div>
          </div>
          <div className="chat_footer">
            <form className="input_block">
              <input
                type="text"
                placeholder="Enter your message"
                className="chat_input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="form_buttom">
                <button
                  disabled={falid}
                  type="submit"
                  className={falid ? "input_button" : "input__di"}
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {zoom ? (
        <div className="modal_img-zoom">
          <div onClick={() => setZoom(false)} className="close">
            <img src={close} alt="" />
          </div>
          <img src={fon} alt="" className="modal_img_img" />
        </div>
      ) : null}
    </section>
  );
};

export default Chat;
