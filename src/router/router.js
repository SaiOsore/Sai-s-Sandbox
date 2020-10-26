import React from 'react';
import Home from "../containers/Home/Home";
import Drawing from "../containers/Drawing/Drawing";
import Weather from "../containers/Weather/Weather";
import Birthdays from "../containers/Birthdays/Birthdays";
import Canvas from "../containers/Canvas/Canvas";
import HarryPotter from "../containers/HarryPotter/HarryPotter";

const Routes = {
  "/": () => <Home />,
  "/drawing": () => <Drawing />,
  "/weather": () => <Weather />,
  "/birthdays": () => <Birthdays />,
  "/canvas": () => <Canvas />,
  "/harrypotter": () => <HarryPotter />,
};

export default Routes;