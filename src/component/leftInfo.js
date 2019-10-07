import React, { Component } from "react";
import { FaFemale } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa";
import { FaBlenderPhone } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";

class leftInfo extends Component {
  render() {
    return (
      <div>
        <div className="Info-left">
          <div className="infoDetail">
            <img
              className="ImgLogo"
              src={require("../public/girl.jpg")}
              alt="hinh dai dien"
            />
            <span className="title ttcn text-center">Thông tin cá nhân</span>
            <div className="bd info-icon">
              <FaBirthdayCake />
              <p className="tt">12-10-1990</p>
            </div>
            <div className="gt info-icon">
              <FaFemale /> <p className="tt">Nữ</p>
            </div>
            <div className="mail info-icon">
            <FaMailchimp />
              <p className="tt">kimoanh2613@gmail.com</p>
            </div>
            <div className="dt info-icon">
            <FaBlenderPhone />
              <p className="tt">012345678</p>
            </div>
            <div className="gt info-icon">
            <FaAddressCard />
              <p className="tt">123 Điện Biên Phủ</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default leftInfo;
