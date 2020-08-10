import React from 'react';
import Home from "../containers/Home/Home";
import Drawing from "../containers/Drawing/Drawing";

const Routes = {
  "/": () => <Home />,
  "/drawing": () => <Drawing />,
};

export default Routes;