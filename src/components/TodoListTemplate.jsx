import React from 'react';
import '@components/TodoListTemplate.css';

const TodoListTemplate = ({ form, children }) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘의 할 일 ({ import.meta.env.VITE_MODE })
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};
export default TodoListTemplate;
