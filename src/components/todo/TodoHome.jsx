import Form from './Form';
import TodoItemList from './TodoItemList';
import TodoListTemplate from './TodoListTemplate';

const TodoHome = () => {
    return (
      <div>
        <TodoListTemplate form={<Form />}>
          <TodoItemList />
        </TodoListTemplate>
      </div>
    );
}

export default TodoHome;