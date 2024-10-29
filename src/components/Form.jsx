import { Component } from "react";
import "./Form.css";

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
    const { todo, todos } = this.state;
    const newTodo = {
      id: this.id++,
      text: todo,
      checked: false,
    };

    this.setState({
      todos: [...todos, newTodo],
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
    const { todo, myEnter, myChange, myCreate } = this.props;
    return (
      <div className="form">
        <input value={todo} onChange={myChange} onKeyDown={myEnter} />
        <div className="create-button" onClick={myCreate}>
          추가
        </div>
      </div>
    );
  }
}

export default Form;
