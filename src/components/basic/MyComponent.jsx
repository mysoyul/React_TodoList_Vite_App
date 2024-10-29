import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MyComponent.css';

class MyComponent extends Component {
    constructor(props){
        super(props);
        //Event Handler가 일반함수인 경우에는 bind(this)를 반드시 해주어야 한다
        this.handleDecrease2 = this.handleDecrease2.bind(this);
        // this.state = {
        //     value2: 0
        // }
    }

    //state 객체 선언 : 상태변수
    state = {
        value: 0,
        message: '',
        messages: ['Angular','React','Vue','Ember'],
        username: '',
        isValid: false
    };

    //Event Handler Method (arrow function)
    handleDecrease = () => {
        const { value } = this.state;
        this.setState({
            value: value - 1
        });
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleEnter = (e) => {
        const { messages, message } = this.state;
        //if(e.key === 'Enter') {
        if(e.keyCode === 13) {
            this.setState({
                isValid: true,
                messages: messages.concat(message),
                message: ''
            });
            this.myUsername.focus();
        }
    };
    handleDoubleClick = (index) => {
        this.setState({
            messages: this.state.messages.filter((val,idx) => idx !== index)
        });

    };

    //Event Handler Method (general function)
    handleDecrease2() {
        const { value } = this.state;
        this.setState({
            value: value - 1
        });
    }

    render() {
        const { name, age, children } = this.props;
        const { value, message, messages, username, isValid } = this.state;
        const { handleDecrease, handleChange, handleEnter, handleDoubleClick } = this;        
        const message_list = messages.map((msg,idx) => 
                                    (<li key={idx} onDoubleClick={() => handleDoubleClick(idx)}>{msg}</li>));

        return (
            <React.Fragment>
                <h2>클래스형 컴포넌트, {name} / {age} </h2>
                {children}
                <h3>Value = {value} </h3>
                <button onClick={() => this.setState({value: value+1})}>증가</button>
                <button onClick={handleDecrease}>감소</button> <br/>
                <h3>Message = {message}</h3>
                <input type="text" name="message" value={message} onChange={handleChange} 
                    //onKeyPress={handleEnter} 
                    onKeyDown={handleEnter}
                /> <br/>
                <ul>
                    {message_list}
                </ul>
                <h3>Username = {username}</h3>
                <input type="text" name="username" value={username} onChange={handleChange} 
                    className={isValid ? 'success':'failure'}
                    ref={(ref) => this.myUsername = ref}
                    />
            </React.Fragment>
        );
    }
}
MyComponent.defaultProps = {
    name:'리액트JS'
};
MyComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
};
export default MyComponent;