import React, { Component } from "react";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  state = {};
  render() {
    const { palettes } = this.props;
    return (
      <div>
        {palettes.map(p => (
          <div>
            <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default PaletteList;
