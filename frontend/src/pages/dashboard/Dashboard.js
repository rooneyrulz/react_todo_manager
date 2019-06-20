import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Jumbotron } from 'reactstrap';

const Dashboard = ({ auth: { user } }) => {
  return (
    <Jumbotron className="p-5 text-center">
      <h1 className="display-4">Dashboard</h1>
      <span className="lead">Welcome {user.name}</span>
    </Jumbotron>
  )
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
