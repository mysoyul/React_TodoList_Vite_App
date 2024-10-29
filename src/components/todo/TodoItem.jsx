import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './TodoItem.css';
//import { removeTodo, toggleTodo } from '../../actions';
import { removeTodo, toggleTodo } from '@/reducers/todosSlice';

const TodoItem = ({ text, checked, id }) => {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.checked !== nextProps.checked;
    // }
    //event handler
    // handleRemove = (id) => {
    //     //action 생성함수 호출
    //     this.props.removeTodo(id);
    // };
    // handleToggle = (todo) => {
    //     //action 생성함수 호출
    //     this.props.toggleTodo(todo);
    // }

    const dispatch = useDispatch();

    const handleRemove = useCallback((id) => {
        dispatch(removeTodo(id));
    },[dispatch]);

    const handleToggle = useCallback((todo) => {
        dispatch(toggleTodo(todo));
    },[dispatch]);

    return (
        <div className="todo-item" onClick={() => {
            const todo = { id, text, checked };
            todo.checked = !todo.checked;
            handleToggle(todo);
        }}>
            <div className="remove" onClick={(e) => {
                e.stopPropagation(); // myToggle 이 실행되지 않도록 함
                handleRemove(id)
            }
            }>&times;</div>
            <div className={`todo-text ${checked && 'checked'}`}>
                <div>{text}</div>
            </div>
            {
                checked && (<div className="check-mark">✓</div>)
            }
        </div>
    );
}
export default React.memo(TodoItem, (props, nextProps) => {
    //nextProps가 이전 props와 동일한 값을 가지면 true를 반환하고, 그렇지 않다면 false를 반환
    //true이면 don't re-render
    if (props.checked === nextProps.checked){
        return true;
    }
});