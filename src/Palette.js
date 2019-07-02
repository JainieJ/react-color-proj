import React, { Component } from "react";
import Slider from "rc-slider";
import ColorBox from "./ColorBox";
import "./Palette.css";
import "rc-slider/assets/index.css";

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
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
