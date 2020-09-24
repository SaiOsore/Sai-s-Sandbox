import React from 'react';
import Home from "../containers/Home/Home";
import Drawing from "../containers/Drawing/Drawing";
import Weather from "../containers/Weather/Weather";

const Routes = {
  "/": () => <Home />,
  "/drawing": () => <Drawing />,
  "/weather": () => <Weather />,
};

export default Routes;