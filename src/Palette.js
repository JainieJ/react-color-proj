import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import ColorBox from "./ColorBox";
import "./Palette.css";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";

const styles = {
  palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  paletteColors: {
    height: "90%"
  }
};

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
    const { palette, classes } = this.props;
    const { level, format } = this.state;
    const colorBoxes = palette.colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={palette.id}
        showFullPalette={true}
      />
    ));
    return (
      <div className={classes.palette}>
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showAllColors={true}
        />
        <div className={classes.paletteColors}>{colorBoxes}</div>
        <PaletteFooter
          paletteName={palette.paletteName}
          emoji={palette.emoji}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
