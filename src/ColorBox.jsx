import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/ColorBoxStyles";

class ColorBox extends Component {
  state = { copied: false };
  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  };
  render() {
    const {
      background,
      name,
      id,
      paletteId,
      showFullPalette,
      classes
    } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div
          className={classes.colorBox}
          style={{ backgroundColor: background }}
        >
          {/* animation */}
          <div
            className={`${classes.copyOverlay} ${copied &&
              classes.showOverlay}`}
            style={{ backgroundColor: background }}
          />
          <div
            className={`${classes.copyMessage} ${copied &&
              classes.showCopyMessage}`}
          >
            <h1>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          {/* animation end */}
          {/* general part */}
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {/* not to render More button on SingleColorPalette */}
          {showFullPalette && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={e => e.stopPropagation()}
            >
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
