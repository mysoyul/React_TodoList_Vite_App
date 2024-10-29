import { Component } from "react";
import { connect } from "react-redux";

//import { removeTodo, toggleTodo } from "@/actions";
import { removeTodo, toggleTodo } from '@/reducers/todoSlice';
import "@components/TodoItem.css";

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  handleRemove = (id) => {
    this.props.removeTodo(id);
  };

  handleToggle = (todo) => {
    todo.checked = !todo.checked;
    this.props.toggleTodo(todo);
  };

  render() {
    const { text, checked, id } = this.props;
    const { handleRemove, handleToggle } = this;

    return (
      <div className="todo-item" onClick={() => handleToggle({id, text, checked})}>
        <div
          className="remove"
          onClick={(e) => {
            e.stopPropagation(); // onToggle 이 실행되지 않도록 함
            handleRemove(id);
          }}
        >
          &times;
        </div>
        <div className={`todo-text ${checked && "checked"}`}>
          <div>{text}</div>
        </div>
        {checked && <div className="check-mark">✓</div>}
      </div>
    );
  }
}
export default connect(null, { removeTodo,toggleTodo })(TodoItem);
