import { Component } from "react";
import { connect } from "react-redux";

import TodoItem from "@components/TodoItem";
import { fetchAllTodos } from "@/actions";

class TodoItemList extends Component {
  componentDidMount() {
    this.props.fetchAllTodos();
  }
  /*
     true 이면 ( 같지 않음 ) 렌더링 다시 된다.
     false 이면 ( 같으면 ) 렌더링 생략 된다.
  */
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos } = this.props;
    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        key={id}
      />
    ));
    return <div>{todoList}</div>;
  }
}
export default connect(
  (state) => ({ todos: state.todos }),
  { fetchAllTodos }
)(TodoItemList);
