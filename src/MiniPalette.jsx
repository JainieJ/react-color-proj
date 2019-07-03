import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";

const MiniPalette = props => {
  const { classes, paletteName, emoji, colors, id, handleClick } = props;
  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.miniColor}
      key={color.name}
      style={{ background: color.color }}
    />
  ));
  return (
    <div className={classes.root} onClick={() => handleClick(id)}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
