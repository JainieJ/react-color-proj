import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

class PaletteCreationForm extends Component {
  state = {
    stage: "form",
    newPaletteName: ""
  };
  componentDidMount() {
    // custom validation rules to verify that palette name is unique
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      return this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }
  handleClose = () => {
    this.props.hideForm();
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  changeStage = () => {
    this.setState({ stage: "emoji" });
  };
  savePalette = emoji => {
    this.props.handleSubmit({
      paletteName: this.state.newPaletteName,
      emoji: emoji.native
    });
  };
  render() {
    const { newPaletteName, stage } = this.state;
    return (
      <div>
        <Dialog open={stage === "emoji"} onClose={this.handleClose}>
          <DialogTitle id="form-dialog-title">
            Pick Emoji for Your Palette
          </DialogTitle>
          <Picker onSelect={this.savePalette} title="Choose Emoji" />
        </Dialog>
        <Dialog
          open={stage === "form"}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Choose a Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.changeStage}>
            {/* onSubmit={() => handleSubmit(newPaletteName)} */}
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new palette. Make sure the name is
                unique!
              </DialogContentText>
              <TextValidator
                value={newPaletteName}
                label="Palette Name"
                name="newPaletteName"
                fullWidth
                margin="normal"
                onChange={this.handleChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["enter palette name", "name already taken"]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteCreationForm;
