import * as types from '@/actions';

const initialState = {
    todos: [
        {
            id: 0,
            text: '',
            checked: false,
        }
    ]
}
export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TODOS:
            return Object.assign({}, state, { todos: action.payload });
        default:
            return state;
    }
}