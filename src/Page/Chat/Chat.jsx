import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Chat.scss";
import fon from "../../assets/img/fon.jpg";
const Chat = () => {
  const [count, setCount] = useState(4);
  return (
    <section className="chat_wrapper">
      <div className="back_block">
        <button className="back_button">
          <Link to="/" className="chat_link">
            BACK
          </Link>
        </button>

        <button onClick={() => setCount(count + 1)} className="us_button">
          {count} <span>US</span>
        </button>
      </div>
      <div className="chat_container">
        <div className="chat_block">
          <div className="chat_header">
            <p className="chat_text">GLOBAL CHAT</p>
          </div>
          <div className="chat_main">
            <div className="chat_line">
              <p className="ss">N</p>
              <p className="ss">A</p>
              <p className="ss">R</p>
              <p className="ss">U</p>
              <p className="ss">T</p>
              <p className="ss">O</p>
            </div>
            <div className="chat_messenger">
              <div className="messenger">
                <p className="user">User:</p>
                <p className="text">text</p>
              </div>
              <div className="messenger">
                <p className="user">User:</p>
                <img src={fon} alt="" />
              </div>
              <div className="messenger_me">
                <p className="user">User:</p>
                <p className="text">text</p>
              </div>
              <div className="messenger">
                <p className="user">User:</p>
                <p className="text">text</p>
              </div>
              <div className="messenger_me">
                <p className="user">User:</p>
                <p className="text">text</p>
              </div>
            </div>
            <div className="chat_line2">
              <p>S</p>
              <p>A</p>
              <p>S</p>
              <p>K</p>
              <p>I</p>
            </div>
          </div>
          <div className="chat_footer">
            <form className="input_block">
              <input
                type="text"
                placeholder="Enter your message"
                className="chat_input"
              />
              <div className="form_buttom">
                <button type="submit" className="input_button">
                  SEND
                </button>
                {/* <button className="input_clip"><img src={bul} alt="" /></button> */}
              </div>
            </form>
          </div>
        </div>

        <div className="chat_user">
          <div className="chat_online">
            <div className="online_header">
              <p> ONLINE 3</p>
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
            </div>
          </div>
          <div className="chat_offline">
            <div className="online_header">
              <p>LAST CHAT</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
