import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
//import { fetchAllTodos } from '../../actions';
import { fetchAllTodos } from '@/reducers/todosSlice';

const TodoItemList = () => {
    /*
        React-Redux의 connect() 함수의 첫번째 아규먼트 mapStateToProps 함수와 같은 역할
        useSelector()는 store에 저장된 상태변수를 props 변수로 매핑 해준다
    */
    const todos = useSelector((state) => state.todos);

    /*
      React-Redux의 connect() 함수의 두번째 아규먼트 mapDispatchToProps 함수와 같은 역할 
      useDispatch는 Action 생성함수를 dispatch 해주는 역할
    */
    const dispatch = useDispatch();

    /*
      lifecycle method
      render() 호출 후에 호출되어짐
      서버와 http 통신을 하는 action 함수 호출하기
    */
    useEffect(() => {
        console.log('useEffect');
        dispatch(fetchAllTodos());
    },[dispatch]);

    // componentDidMount() {
    //     this.props.fetchAllTodos();
    // }

    const todo_list = todos.map(({ id, text, checked }) =>
    (<TodoItem
        id={id} text={text} checked={checked} key={id}
    />));
    return (
        <div>
            {todo_list}
        </div>
    );
}

//shouldComponentUpdate() 라이프사이클 메서드를 대체하는 React.memo() 함수
export default React.memo(TodoItemList, (props, nextProps) => {
    //nextProps가 이전 props와 동일한 값을 가지면 true를 반환하고, 그렇지 않다면 false를 반환
    //true이면 don't re-render
    if (props.todos === nextProps.todos){
        return true;
    }
});