import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Home = ({ auth: { isAuthenticated }, history }) => {
  if (isAuthenticated) history.push("/todos");

  return (
    <div>
      <h1 className="display-4">Home</h1>
    </div>
  );
};

Home.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
