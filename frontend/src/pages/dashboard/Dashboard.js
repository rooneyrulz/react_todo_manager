import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Dashboard = ({ auth: { user } }) => {
  return (
    <div>
      <h1 className="display-4">Welcome { user.name }</h1>
    </div>
  )
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
