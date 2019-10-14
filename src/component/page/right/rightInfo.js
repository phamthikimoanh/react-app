import React, { Component } from "react";
import Mock from "../../../mook/Mook";
import InfoJobComponent from "./infoJobComponent";
import Point from "../../page/right/point";
// import titleNameComponent from "../titleNameComponent";
class rightInfo extends Component {
  constructor() {
    super();
    this.state = { Data: [] };
  }
  componentDidMount() {
    this.getData();
  }
  async getData() {
    const Data = await Mock;
    this.setState({ Data });
  }

  renderItem = () => {
    return this.state.Data.map(e => {
      if (e.title === this.props.title && e.child) {
        return e.child.detail.map((item, i) => {
          return (
            <InfoJobComponent
              key={i}
              nghenghiep={item.mtnn}
              chitiet={item.desc}
              trinhdo={item.point}
            >
              <Point />
            </InfoJobComponent>
          );
        });
      }
    });
  };

  render() {
    const showNameJob = this.state.Data.map((item, i) => {
      // if (item.title === this.props.title && item.child) {
      //   return (
      //     <div key={item.t}>
      //       <h2 className="name text-center">{item.name}</h2>
      //       <span className="job text-center">{item.job}</span>
      //     </div>
      //   );
      // }
    });
    console.log(showNameJob);

    return (
      <div>
        <div className="Info-right">
          {showNameJob}
          <h2 className="name text-center">Kim Oanh</h2>
          <span className="job text-center">Nhân viên kinh doanh</span>
          <hr />
          <div className="content">{this.renderItem()}</div>
        </div>
      </div>
    );
  }
}

export { rightInfo };
