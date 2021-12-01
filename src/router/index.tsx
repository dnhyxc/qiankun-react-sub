import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../views";
import Home from "../views/home";
import About from "../views/about";

interface IProps {
  routerBase: string;
}

const RenderRouter: React.FC<IProps> = ({ routerBase }) => {
  return (
    <Router>
      <App routerBase={routerBase}>
        <Routes>
          <Route path={`${routerBase}`} element={<Home />} />
          <Route path={`${routerBase}/about`} element={<About />} />
        </Routes>
      </App>
    </Router>
  );
};

export default RenderRouter;
