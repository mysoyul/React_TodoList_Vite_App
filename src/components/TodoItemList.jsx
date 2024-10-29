import { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  /*
     true 이면 ( 같지 않음 ) 렌더링 다시 된다.
     false 이면 ( 같으면 ) 렌더링 생략 된다.
  */  
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.mytodos !== nextProps.mytodos;
  }

  render() {
    const { mytodos, myToggle, myRemove } = this.props;
    const todoList = mytodos.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={myToggle}
        onRemove={myRemove}
        key={id}
      />
    ));
    return <div>{todoList}</div>;
  }
}
export default TodoItemList;
