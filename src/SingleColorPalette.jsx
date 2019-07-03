import React, { Component } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
  }
  changeFormat = val => {
    this.setState({ format: val });
  };
  gatherShades = (palette, colorToFind) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      const currentColor = allColors[key].find(
        color => color.id === colorToFind
      );
      shades.push(currentColor);
    }
    return shades.slice(1);
  };
  render() {
    const { palette } = this.props;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[this.state.format]}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <NavBar handleChange={this.changeFormat} showAllColors={false} />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter
          paletteName={palette.paletteName}
          emoji={palette.emoji}
        />
      </div>
    );
  }
}

export default SingleColorPalette;
