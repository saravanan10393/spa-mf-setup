// import { Button } from "widgets/button";
import React from "react";
import { Button } from "widgets/button";
import { Carosal } from "components/carosal";

import "./App.css";

// const Button = React.lazy(() => import("widgets/button").then((m) => m.Button));

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <p>
        <Button> Button Widgets </Button>
      </p>
      <Carosal />
    </div>
  );
};

export default App;
