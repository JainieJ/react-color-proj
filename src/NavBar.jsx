import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./styles/NavBarStyles";

class NavBar extends Component {
  state = {
    format: "hex",
    open: false
  };
  handleFormatChange = e => {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  };
  closeSnackBar = () => {
    this.setState({ open: false });
  };
  render() {
    const { level, changeLevel, showAllColors, classes } = this.props;
    const { format, open } = this.state;
    return (
      <nav className={classes.NavBar}>
        <div className={classes.logo}>
          <Link to="/">reactcolorpicker</Link>
        </div>
        {showAllColors && (
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={open}
          autoHideDuration={3000}
          message={<span id="message-id">Format Changed!</span>}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={this.closeSnackBar}
          action={[
            <IconButton
              onClick={this.closeSnackBar}
              key="close"
              aria-label="Close"
              color="inherit"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </nav>
    );
  }
}

export default withStyles(styles)(NavBar);
