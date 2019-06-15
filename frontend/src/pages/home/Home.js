import React from "react";
import { connect } from "react-redux";

const Todos = ({ auth: { isAuthenticated }, history }) => {
  if (isAuthenticated) history.push("/todos");

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Todos);
