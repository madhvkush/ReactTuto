import React from "react";
import "./App.css";
import { AddTodo } from "./features/ToDo/AddTodo";
import { TodoList } from "./features/ToDo/TodoList";

function App() {
	return (
		<div className="App">
			<AddTodo />
			<TodoList />
		</div>
	);
}

export default App;
