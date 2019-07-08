import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/MiniPaletteStyles";

class MiniPalette extends PureComponent {
  deletePalette = e => {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  };
  render() {
    const { classes, paletteName, emoji, colors, id, handleClick } = this.props;
    const miniColorBoxes = colors.map(color => (
      <div
        className={classes.miniColor}
        key={color.name}
        style={{ background: color.color }}
      />
    ));
    return (
      <div className={classes.root} onClick={() => handleClick(id)}>
        <DeleteIcon
          className={classes.deleteIcon}
          style={{ transition: "all 0.3s ease-in-out" }}
          onClick={this.deletePalette}
        />
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
