## Redux Toolkit Setup (Todo Example from rtk-demo)

### 1. Install Redux Toolkit and React-Redux

```bash
npm install @reduxjs/toolkit react-redux
```

### 2. Create a Redux Slice (Todo Example)

Referencing `rtk-demo/src/slicing/TodoSlicing.ts`:

```js
createSlice({
	name: "todosSlice",
	initialState: [],
	reducers: {
		addTodo,
		updateTodo,
		deleteTodo,
		deleteAllTodo,
	},
});
```

### 3. Configure the Store

```js
configureStore({
	reducer: {
		todos: ToDoReducer,
	},
});
```

### 4. Provide the Store to React

```js
<Provider store={store}>
	<App />
</Provider>
```

### 5. Use Redux State and Actions in Components

```js
useSelector((state) => state.todos);
useDispatch();
dispatch(addTodo("New Todo"));
dispatch(deleteTodo(todo.id));
```

### Reference

See [rtk-demo](https://github.com/reduxjs/redux-toolkit/tree/master/examples/rtk-demo) and `src/slicing/TodoSlicing.ts` for full implementation.

### 4. Provide the Store to React

Wrap your app in `Provider` in `index.js`:

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
```

### 5. Use Redux State and Actions in Components

Example usage in a Todo component:

```js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./slicing/TodoSlicing";

function TodoList() {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	return (
		<div>
			<button onClick={() => dispatch(addTodo("New Todo"))}>
				Add Todo
			</button>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						{todo.text}
						<button onClick={() => dispatch(deleteTodo(todo.id))}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
```

### Reference

See [rtk-demo] for a complete Todo slice example.
