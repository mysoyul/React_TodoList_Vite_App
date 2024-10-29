import axios from 'axios';

//Action type 정의
export const FETCH_TODOS = "FETCH_TODOS";
export const ADD_TODO = "ADD_TODO";

const apiUrl = 'http://localhost:4500/api/todos';

//Todo 등록 Action 함수
export const addTodo = (todo) => {
    return (dispatch) => {
        axios.post(apiUrl, todo)
            .then(res => dispatch({
                type: ADD_TODO,
                payload: res.data
            }))
            .catch(error => {
                console.log(error);
                throw (error);
            })
    }
}; //addTodo

//Todo 목록조회 Action 함수
export const fetchAllTodos = () => {
    return (dispatch) => {
        axios.get(apiUrl) //Promise
            .then(res => dispatch({
                type: FETCH_TODOS,
                payload: res.data
            }))
            .catch(error => {
                console.log(error);
                throw error;
            });
    }
}; //fetchAllTodos
