import React from "react";
import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
import HomeDark from "../views/all-home-version/HomeDark";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const MyRoutes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Routes>
          <Route exact path="/" element={<HomeDark />}></Route>
          <Route path="/home-light" element={<HomeLight />} />
          <Route path="/home-dark" element={<HomeDark />} />
          <Route component={NotFound} />
        </Routes>
      </Router>
    </>
  );
};

export default MyRoutes;
