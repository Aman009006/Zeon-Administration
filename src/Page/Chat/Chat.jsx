import React from "react";
import { Link } from "react-router-dom";
import "./Chat.scss";
import sa from "../../assets/img/sa.JPG";
const Chat = () => {
  return (
    <section className="chat_wrapper">
      <div className="back_block">
        <button className="back_button">
          <Link to="/" className="chat_link">
            BACK
          </Link>
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
            <div></div>
            <div className="chat_line">
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
                placeholder="NARUTO....."
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
            <div className="online_user">
                <p>User</p>
                <div className="line"></div>
            </div>
          </div>
          <div className="chat_offline">
            <div className="online_header">
              <p>OFFLINE</p>
            </div>
            <div className="online_user">
                <p>CHATY</p>
                <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
