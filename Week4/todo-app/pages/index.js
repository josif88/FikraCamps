import React, { useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const prepTodo = (t) => {
    setTodo(t);
  };

  const addTodo = () => {
    setTodos([todo, ...todos]);
    setTodo("");
  };

  const done = (t) => {
    setTodos(todos.filter((el) => el !== t));
  };

  return (
    <div className="container">
      <div className="input-box">
        <div className="top-decoration">
          <h2>TODO</h2>
          <button onClick={addTodo}>Add</button>
        </div>
        <div className="holder">
          <textarea
            type="text"
            placeholder="Your Next Todo thing"
            onChange={(e) => {
              prepTodo(e.target.value);
            }}
          />
        </div>
      </div>
      <ul className="old-todo">
        {todos.map((todo, index) => (
          <li key={index}>
            <div className="input-box added">
              <div className="top-decoration">
                <button
                  onClick={() => {
                    done(todo);
                  }}
                >
                  Done
                </button>
              </div>
              <div className="holder">{todo}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
