import React, { Component } from "react";

export default class point extends Component {
  render() {
    return (
      <div>
        Trình độ:{this.props.trinhdo ? this.props.trinhdo : null}
      </div>
    );
  }
}
