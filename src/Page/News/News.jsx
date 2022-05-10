import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";



function News (){
    return(
        <div className="news__c">
        <div className="back__tomenu">
        <Link to="/" className="">
            <img src="/images/69410.c770c088.50x50o.9b32442d7c26.gif"/>
            <p>BACK</p>
          </Link>
        </div>
        </div>
    )
}
export default News;