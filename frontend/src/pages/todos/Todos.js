import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Row } from 'reactstrap';

import Spinner from '../../components/spinner/Spinner';
import Todo from '../../components/todo/Todo';
import AddTodo from '../../components/addTodo/AddTodo';
import './Todos.css';

import { getTodos } from '../../actions/todoActions';

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
        <div className="todo-header">
          <h1 className="">Todos</h1>
          {this.props.isAuthenticated ? <AddTodo /> : null}
        </div>
        <hr />
        <Row>{appendContent}</Row>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo,
  error: state.error,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getTodos })(Todos);
