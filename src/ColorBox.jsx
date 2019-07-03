import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";
import "./ColorBox.css";

const styles = {
  colorBox: {
    height: props => (props.showFullPalette ? "25%" : "50%"),
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: 1
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.6 ? "rgba(0,0,0, 0.6)" : "white"
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.08
        ? "white"
        : "rgba(0,0,0, 0.6)"
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.6
        ? "rgba(0,0,0, 0.6)"
        : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    bottom: "0",
    right: "0",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase"
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.6
        ? "rgba(0,0,0, 0.6)"
        : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    transition: "0.5s",
    textDecoration: "none",
    opacity: 0
  }
};

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
            className={`copy-overlay ${copied && `show`}`}
            style={{ backgroundColor: background }}
          />
          <div className={`copy-msg ${copied && `show`}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          {/* animation end */}
          {/* general part */}
          <div className="copy-container">
            <div className="box-content">
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
