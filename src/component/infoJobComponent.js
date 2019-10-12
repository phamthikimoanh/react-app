import React, { Component } from "react";

export default class infoJobComponent extends Component {
  render() {
    return (
      <div className="MTNN">
        <span className="title mtnn text-center">
          {this.props.ngenghiep ? this.props.ngenghiep : "Nghe nghiep"}
        </span>
        {this.props.chitiet ? this.props.chitiet : "Chi tiet"}
      </div>
    );
  }
}
