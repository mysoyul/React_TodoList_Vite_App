import { Component } from "react";
import Form from "@components/Form";
import TodoItemList from "@components/TodoItemList";
import TodoListTemplate from "@components/TodoListTemplate";

class App extends Component {

  render() {
    return (
      <TodoListTemplate form={<Form />}>
        <TodoItemList />
      </TodoListTemplate>
    );
  } //render
}
export default App;
