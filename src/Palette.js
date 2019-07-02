import React, { Component } from "react";
// import Slider from "rc-slider";
import ColorBox from "./ColorBox";
import "./Palette.css";
import NavBar from "./NavBar";
// import "rc-slider/assets/index.css";

class Palette extends Component {
  state = {
    level: 500
  };
  changeLevel = level => {
    this.setState({ level });
  };
  render() {
    const { palette } = this.props;
    const { level } = this.state;
    const colorBoxes = palette.colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* navbar */}
        <NavBar level={level} changeLevel={this.changeLevel} />
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
