import React, { Component } from "react";
// import Slider from "rc-slider";
import ColorBox from "./ColorBox";
import "./Palette.css";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
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
        showLink={true}
      />
    ));
    return (
      <div className="Palette">
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showAllColors={true}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter
          paletteName={palette.paletteName}
          emoji={palette.emoji}
        />
      </div>
    );
  }
}

export default Palette;
