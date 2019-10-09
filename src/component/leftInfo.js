import React, { Component } from "react";
import { FaFemale } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa";
import { FaBlenderPhone } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import Mock from '../mook/Mook';

class leftInfo extends Component {
  render() {    
    const datas = Mock; 
    //console.log(Mock);
    const dt = datas.sumary_infos.info_detail;
    console.log(datas.sumary_infos.info_detail);
    return ( 
      <div>
        <div className="Info-left">
          <div className="infoDetail">
            <img
              className="ImgLogo"
              src={dt.image}
              alt="hinh dai dien"
            />
            <span className="title ttcn text-center">{dt.title}</span>
            <div className="bd info-icon">
              <FaBirthdayCake />
              <p className="tt">{dt.bd}</p>
            </div>
            <div className="gt info-icon">
              <FaFemale /> <p className="tt">{dt.gt}</p>
            </div>
            <div className="mail info-icon">
            <FaMailchimp />
              <p className="tt">{dt.mail}</p>
            </div>
            <div className="dt info-icon">
            <FaBlenderPhone />
              <p className="tt">{dt.dt}</p>
            </div>
            <div className="dc info-icon">
            <FaAddressCard />
              <p className="tt">{dt.dc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {leftInfo};
