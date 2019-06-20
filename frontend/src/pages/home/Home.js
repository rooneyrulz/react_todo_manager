import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Jumbotron } from "reactstrap";

const Home = ({ auth: { isAuthenticated }, history }) => {
  if (isAuthenticated) history.push("/dashboard");

  return (
    <Jumbotron className="p-5 text-center">
      <h1 className="display-4">Home</h1>
      <span className="lead text-center">Welcome to Todo Manager</span>
    </Jumbotron>
  );
};

Home.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
