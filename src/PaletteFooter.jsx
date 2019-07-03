import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  paletteFooter: {
    backgroundColor: "white",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
    marginRight: "1rem"
  },
  emoji: {
    marginLeft: "1rem"
  }
};

const PaletteFooter = props => {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.paletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
};

export default withStyles(styles)(PaletteFooter);
