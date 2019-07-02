import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette List</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={() => <h1>Individual Palette </h1>}
      />
    </Switch>

    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
