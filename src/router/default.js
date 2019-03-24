import React from "react";
import { Route } from "react-router-dom";
import Footer from "../components/footer";
const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <div>
          <Component {...props} />
          <Footer />
        </div>
      );
    }}
  />
);

export default DefaultLayout;
