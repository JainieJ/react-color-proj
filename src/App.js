import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes || seedColors
    };
  }
  findPalette = id => {
    return this.state.palettes.find(palette => palette.id === id);
  };
  deletePalette = id => {
    this.setState(st => {
      return { palettes: st.palettes.filter(palette => palette.id !== id) };
    }, this.syncLocalStorage);
  };
  savePalette = newPalette => {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  };
  syncLocalStorage = () => {
    localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  };
  render() {
    return (
      <Route
        render={({ location }) => {
          return (
            <TransitionGroup>
              <CSSTransition
                classNames="fades"
                timeout={500}
                key={location.key}
              >
                <Switch location={location}>
                  <Route
                    exact
                    path="/palette/new"
                    render={routeProps => (
                      <NewPaletteForm
                        savePalette={this.savePalette}
                        {...routeProps}
                        palettes={this.state.palettes}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/"
                    render={routeProps => (
                      <div class="page">
                        <PaletteList
                          palettes={this.state.palettes}
                          deletePalette={this.deletePalette}
                          {...routeProps}
                        />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:id"
                    render={routeProps => (
                      <div class="page">
                        <Palette
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.id)
                          )}
                        />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:paletteId/:colorId"
                    render={routeProps => (
                      <div class="page">
                        <SingleColorPalette
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.paletteId)
                          )}
                          colorId={routeProps.match.params.colorId}
                        />
                      </div>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      />
    );
  }
}

export default App;
