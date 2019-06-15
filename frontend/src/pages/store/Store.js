import React, { useEffect } from "react";
import { connect } from "react-redux";

const Store = ({ auth: { user } }) => {

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div>
      <h1>Store</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Store);
