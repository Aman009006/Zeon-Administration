import React from "react";
import "./User.scss";
import {ReactComponent as Sos} from '../../assets/img/1.svg'
import pp from '../../assets/img/girl.jpg'

const User = () => {
  return (
    <main>
        <div class="item">
		<a class="item-hover" href="{URL}" target="_blank">
		<div class="item-info">
			<div class="headline">
				Caption Put Here
				<div class="line"></div>
				<div class="date">February 29, 2014</div>			
			</div>
		</div>
		<div class="mask"></div>
	</a>
	<div class="item-img"><img src={pp}/></div>
</div>	
      <div className="main">
          <div className="button-back">
              <button className="back">
                <Sos className="svg"/>
              </button>
          </div>
          <div className="container">
        <div className="columns">
          <div className="user-tall">
                <img src={pp} className="photo"/>
          </div>
          <div className="user-short"></div>
        </div>
        <div className="columns">
          <div className="user-short"></div>
          <div className="user-tall"></div>
        </div>
        <div className="columns">
          <div className="user-tall"></div>
          <div className="user-short"></div>
        </div>
        <div className="columns">
          <div className="user-short"></div>
          <div className="user-tall"></div>
        </div>
        </div>
      </div>
    </main>
  );
};
export default User;
