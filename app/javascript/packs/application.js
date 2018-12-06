import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Application from "../containers/Application";
import routes from "../routes";
import "../css/application.css";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: '/graphql'
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Router>
        <Application>{routes}</Application>
      </Router>
    </ApolloProvider>,
    document.getElementById("root")
  );
});
