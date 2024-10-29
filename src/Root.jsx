import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

//import { toDoReducer } from './reducers';
import todosSlice from '@/reducers/todosSlice';

//const store = createStore(toDoReducer, composeWithDevTools(applyMiddleware(thunk)));
const store = configureStore({
    // reducer: toDoReducer
    reducer: todosSlice
});

const Root = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );
}
export default Root;