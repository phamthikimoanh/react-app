import React, { Component } from "react";

class topInfo extends Component {
  render() {
    return (
      <div>
        <div className="Info-right">
          <h2 className="name text-center">
            Phạm Thị Kim Oanh
          </h2>
          <span className="job text-center">Nhân viên kinh doanh</span>
            <hr/>
          <div className="content">
            <div className="MTNN">
              <span className="title mtnn text-center">
                Mục tiêu nghề nghiệp
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="HV">
              <span className="title hv text-center">Học vấn</span>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default topInfo;
