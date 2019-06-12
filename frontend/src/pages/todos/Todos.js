import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Row } from 'reactstrap';

import { getTodos } from '../../actions/todoActions';
import Spinner from '../../components/spinner/Spinner';
import Todo from '../../components/Todo';

class Todos extends Component {

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    const {items, loading} = this.props.todo;
    const appendContent = loading ? <Spinner /> : (
      <Fragment>
        { items.map(item => <Todo todo={item} key={item._id} />) }
      </Fragment>
    )

    return (
      <section id="todos">
        <h1>Todos</h1>
        <hr />
        <Row>{appendContent}</Row>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo,
  error: state.error
});

export default connect(mapStateToProps, { getTodos })(Todos);
