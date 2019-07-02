import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";

function App() {
  function findPalette(id) {
    return seedColors.find(palette => palette.id === id);
  }
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette List</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={routeProps => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>

    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
