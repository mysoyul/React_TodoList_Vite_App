import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import './Form.css';
//import { addTodo } from '../../actions';
import { addTodo} from '@/reducers/todosSlice';

const Form = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    // handleChange = (e) => {
    //     this.setState({
    //         input: e.target.value // input 의 다음 바뀔 값
    //     });
    // };

    // handleCreate = () => {
    //     const { input } = this.state;
    //     const todo = {
    //         text: input,
    //         checked: false
    //     }
    //     //action생성함수 호출
    //     this.props.addTodo(todo);

    //     this.setState({
    //         input: '' // input 초기화
    //     });
    // };

    // handleKeyPress = (e) => {
    //     // 눌려진 키가 Enter 이면 handleCreate 호출
    //     if (e.key === 'Enter') {
    //         this.handleCreate();
    //     }
    // };

    //Event Handler 메서드 선언
    const handleChange = useCallback((e) => {
        setInput(e.target.value);
    }, [setInput]);

    const handleCreate = useCallback(() => {
        console.log('handleCreate');
        const todo = {
            text: input,
            checked: false
        }
        dispatch(addTodo(todo));
        setInput('');
    }, [dispatch, input]);

    const handleEnter = (e) => {
        if(e.keyCode === 13) {
            handleCreate();
        }        
    }

    return (
        <div className="form">
            <input value={input} onChange={handleChange}
                onKeyDown={handleEnter} />
            <div className="create-button" onClick={handleCreate}>
                추가
            </div>
        </div>
    );
}

export default React.memo(Form);