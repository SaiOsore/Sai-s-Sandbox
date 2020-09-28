import React from 'react';
import Home from "../containers/Home/Home";
import Drawing from "../containers/Drawing/Drawing";
import Weather from "../containers/Weather/Weather";
import Birthdays from "../containers/Birthdays/Birthdays";

const Routes = {
  "/": () => <Home />,
  "/drawing": () => <Drawing />,
  "/weather": () => <Weather />,
  "/birthdays": () => <Birthdays />,
};

export default Routes;