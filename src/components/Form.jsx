import { Component } from 'react';
import './Form.css';

class Form extends Component {
    render() {
        const { todo, myEnter, myChange, myCreate } = this.props;
        return (
            <div className="form">
                <input value={todo} onChange={myChange}
                    onKeyDown={myEnter} />
                <div className="create-button" onClick={myCreate}>
                    추가
                </div>
            </div>
        );
    }
}

export default Form;