import { Component } from "react";
import { connect } from 'react-redux';

//import { addTodo } from '@/actions';
import { addTodo } from '@/reducers/todoSlice';
import "@components/Form.css";

class Form extends Component {
  state = {
    todo: "",
  };

  //이벤트핸들러 함수 선언
  handleChange = (e) => {
    this.setState({
      todo: e.target.value, // input field의 다음 바뀔 값
    });
  };

  handleCreate = () => {
    const { todo } = this.state;
    const newTodo = {
      text: todo,
      checked: false,
    };

    //Action 함수 addTodo 호출
    this.props.addTodo(newTodo);

    this.setState({
      todo: "", // input 초기화
    });
  };

  handleEnter = (e) => {
    // 눌려진 키가 Enter Key 이면 handleCreate 호출
    if (e.keyCode === 13) {
      this.handleCreate();
    }
  }; //handleEnter

  render() {
    const { todo } = this.state;
    const { handleChange, handleCreate, handleEnter } = this;

    return (
      <div className="form">
        <input value={todo} onChange={handleChange} onKeyDown={handleEnter} />
        <div className="create-button" onClick={handleCreate}>
          추가
        </div>
      </div>
    );
  }
}

export default connect(null, { addTodo })(Form);
