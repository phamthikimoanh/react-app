import React, { Component } from "react";
import Mock from "../../mook/Mook";
import InfoJobComponent from "../infoJobComponent";

class rightInfo extends Component {
  renderItem = () => {
    const Data = Mock;
    // console.log(Data);
    return Data.map(e => {
      if (e.title === this.props.title && e.child) {
        return e.child.detail.map((item, i) => {
          return (
            <InfoJobComponent
              key={i}
              nghenghiep={item.mtnn}
              chitiet={item.desc}
            ></InfoJobComponent>
          );
        });
      }
    });
  };

  render() {
    return (
      <div>
        <div className="Info-right">
          <h2 className="name text-center">Phạm Thị Kim Oanh</h2>
          <span className="job text-center">Nhân viên kinh doanh</span>
          <hr />
          <div className="content">{this.renderItem()}</div>
        </div>
      </div>
    );
  }
}

export { rightInfo };
