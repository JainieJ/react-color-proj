import React, { Component } from "react";
// import Slider from "rc-slider";
import ColorBox from "./ColorBox";
import "./Palette.css";
import NavBar from "./NavBar";
// import "rc-slider/assets/index.css";

class Palette extends Component {
  state = {
    level: 500,
    format: "hex"
  };
  changeLevel = level => {
    this.setState({ level });
  };
  changeFormat = val => {
    this.setState({ format: val });
  };
  render() {
    const { palette } = this.props;
    const { level, format } = this.state;
    const colorBoxes = palette.colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={palette.id}
      />
    ));
    return (
      <div className="Palette">
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">
          {palette.paletteName}
          <span className="Palette-emoji">{palette.emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
