import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

//Action 과 Reducer를 합친 개념이 Slice 이다.

const apiUrl = import.meta.env.VITE_API_URL;
//CRA : process.env.REACT_APP_APIURL;

export const fetchAllTodos = createAsyncThunk(
    //action 이름
    "load/todos", 
    async () => {
        const response = await axios.get(apiUrl);
        return response.data;
    }
);

export const removeTodo = createAsyncThunk(
    "remove/todo",
    async (id) => {
        const response = await axios.delete(`${apiUrl}/${id}`);
        return response.data;
    }
);

export const toggleTodo = createAsyncThunk(
    "toggle/todo",
    async (todo) => {
        const response = await axios.patch(`${apiUrl}/${todo.id}`, todo);
        return response.data;
    }
);

export const addTodo = createAsyncThunk(
    "add/todo",
    async (todo) => {
        const response = await axios.post(apiUrl, todo);
        return response.data;
    }
);

const initialState = {
    todos: [
        {
            id: 0,
            text: '',
            checked: false,
        }
    ]
};

/*
createSlice 는 아래 내용을 반환한다.
{
    name : string,
    reducer : ReducerFunction,
    actions : Record<string, ActionCreator>,
    caseReducers: Record<string, CaseReducer>.
    getInitialState: () => State
}
*/
const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    // extraReducer에 비동기 함수의 pending, fulfilled, rejected를 처리할 내용을 넣어준다!
    extraReducers:(builder) => {
        builder
            .addCase(fetchAllTodos.fulfilled , (state, action) => {
                state.todos = action.payload;
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                state.todos = action.payload;
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                state.todos = action.payload;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.todos = action.payload;
            });
    }
});

export default todosSlice.reducer;