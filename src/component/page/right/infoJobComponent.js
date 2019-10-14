import React, { Component } from "react";
export default class infoJobComponent extends Component {
  render() {
    return (
      <div className="MTNN">
        <span className="title mtnn text-center">
          {this.props.nghenghiep ? this.props.nghenghiep : "Nghe nghiep"}
        </span>
        {this.props.chitiet ? this.props.chitiet : "Chi tiet"}
        <p>Trình độ: {this.props.trinhdo ? this.props.trinhdo : null}</p> 
      </div>
    );
  }
}
