import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class PaletteFormNav extends Component {
  state = { newPaletteName: "" };
  componentDidMount() {
    // custom validation rules to verify that palette name is unique
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      return this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { classes, open, handleSubmit, handleDrawerOpen } = this.props;
    const { newPaletteName } = this.state;
    return (
      <div>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          {/* navigation */}
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Persistent drawer
            </Typography>
            {/* palette name validation on saving */}
            <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
              <TextValidator
                value={newPaletteName}
                label="Palette Name"
                name="newPaletteName"
                onChange={this.handleChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["enter palette name", "name already taken"]}
              />
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
              <Link to="/">
                <Button variant="contained" color="secondary">
                  Go Back
                </Button>
              </Link>
            </ValidatorForm>
            {/* end of palette name validation on saving */}
          </Toolbar>
          {/* end of navigation */}
        </AppBar>
      </div>
    );
  }
}

export default PaletteFormNav;
