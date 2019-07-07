import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import MiniPalette from "./MiniPalette";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {
  state = {
    deleteDialogOpen: false,
    deletingId: ""
  };
  goToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };
  openDialog = id => {
    this.setState({ deleteDialogOpen: true, deletingId: id });
  };
  closeDialog = () => {
    this.setState({ deleteDialogOpen: false, deletingId: "" });
  };
  handleDelete = () => {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  };
  render() {
    const { palettes, classes } = this.props;
    const { deleteDialogOpen } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map(p => (
              <CSSTransition key={p.id} classNames="fade" timeout={500}>
                <MiniPalette
                  {...p}
                  handleClick={this.goToPalette}
                  // handleDelete={deletePalette}
                  openDialog={this.openDialog}
                  key={p.id}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        {/* delete dialogue rendered on clicking */}
        <Dialog
          open={deleteDialogOpen}
          aria-labelledby="delete-dialog-title"
          onClose={this.closeDialog}
        >
          <DialogTitle id="delete-dialog-title">
            Delete This Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete?" />
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel?" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
