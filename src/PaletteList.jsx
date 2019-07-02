import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

class PaletteList extends Component {
  state = {};
  render() {
    const { palettes } = this.props;
    return (
      <div>
        {palettes.map(p => (
          <MiniPalette {...p} />
        ))}
      </div>
    );
  }
}

export default PaletteList;
