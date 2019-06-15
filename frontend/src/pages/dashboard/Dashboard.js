import React from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ auth: { user } }) => {
  return (
    <div>
      <h1 className="display-4">Welcome { user.name }</h1>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
