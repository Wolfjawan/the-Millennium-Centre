import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <div className="">
          <NavBar {...props} />
          <div className="main">
            <Component {...props} />
          </div>
          <Footer />
        </div>
      );
    }}
  />
);

export default DefaultLayout;
