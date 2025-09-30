import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../../slicing/TodoSlicing";
import { RootStoreModel } from "../../store/RootStoreModel";

export const TodoList = () => {
	//The selector function is responsible for selecting a part of the Redux store's state.
	const todos = useSelector((state: RootStoreModel) => state.todos);
	// Note- you cannot directly use useDispatch without creating its instance.
	// useDispatch() must be called to get the dispatch function, which is then used to dispatch actions.
	// Example:
	// const dispatch = useDispatch();
	// dispatch(action);
	// You cannot do: useDispatch(action);
	const dispatch = useDispatch();

	const [editId, setEditId] = useState<number | null>(null);
	const [editText, setEditText] = useState("");

	const startEditing = (id: number, text: string) => {
		setEditId(id);
		setEditText(text);
	};

	const saveEdit = (id: number) => {
		if (!editText.trim()) return;
		dispatch(updateTodo({ id, newText: editText }));
		setEditId(null);
		setEditText("");
	};

	const cancelEdit = () => {
		setEditId(null);
		setEditText("");
	};

	return (
		<div className="todo-list">
			{todos.map((todo: { id: number; text: string }) => (
				<div className="todo-item" key={todo.id}>
					{editId === todo.id ? (
						<>
							<input
								type="text"
								value={editText}
								onChange={(e) => setEditText(e.target.value)}
								autoFocus
							/>
							<button onClick={() => saveEdit(todo.id)}>
								Save
							</button>
							<button onClick={cancelEdit}>Cancel</button>
						</>
					) : (
						<>
							<span>{todo.text}</span>
							<button
								onClick={() => startEditing(todo.id, todo.text)}
							>
								Edit
							</button>
						</>
					)}
					<button
						className="delete-btn"
						onClick={() => dispatch(deleteTodo(todo.id))}
					>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};
