import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import "./ColorBox.css";

class ColorBox extends Component {
  state = { copied: false };
  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  };
  render() {
    const { background, name, id, paletteId, showLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.6;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ backgroundColor: background }}>
          {/* animation */}
          <div
            className={`copy-overlay ${copied && `show`}`}
            style={{ backgroundColor: background }}
          />
          <div className={`copy-msg ${copied && `show`}`}>
            <h1>copied!</h1>
            <p className={isLightColor ? "dark-text" : undefined}>
              {background}
            </p>
          </div>
          {/* animation end */}
          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor ? "light-text" : undefined}>
                {name}
              </span>
            </div>
            <button className={`copy-btn ${isLightColor && "dark-text"}`}>
              Copy
            </button>
          </div>
          {/* not to render More button on SingleColorPalette */}
          {showLink && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={e => e.stopPropagation()}
            >
              <span className={`see-more ${isLightColor && "dark-text"}`}>
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
