import { useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../shared/Container';
import Todo from './Todo';
import TodoCounter from './TodoCounter';

// Styles our inner container extending our container component styling
const TodosInner = styled(Container)`
	background-color: #25273c;
	border-radius: 7px;
	margin-top: -25px;
	z-index: 1;
	padding: 15px;
`;

function TodosContainer({ todos, setTodos }) {
	// Will hold our todo components
	let todosList;

	// Finds todo with index passed to function, updates todo active boolean, saves copy of array as new state
	const completeTodo = (index, todo) => {
		const newTodos = [...todos];
		newTodos[index] = { ...todo, active: !todo.active };
		setTodos(newTodos);
	};

	// Creates new array without the removed todo item, and updates todo state
	const removeTodo = (todo) => {
		const newTodos = todos.filter((t) => t !== todo);
		setTodos(newTodos);
	};

	// Creates an array of Todo components. This function maps each todo to a todo component. Only called if out todos array contains items
	if (todos) {
		todosList = todos.map((todo, index) => {
			return (
				<>
					<Todo
						key={todo.id}
						todo={todo}
						i={index}
						completeTodo={completeTodo}
						removeTodo={removeTodo}
					/>
				</>
			);
		});
	}

	return (
		<TodosInner>
			{/* Returns todoList array if the todoList array is not empty, otherwise display a paragraph with info on why no todos are displayed */}
			{todosList.length > 0 ? (
				todosList
			) : (
				<p>
					You have no items in your todo list. Create an item to begin tracking
					you list.
				</p>
			)}
			{/* Display counter of active elements and button to clear completed todos if todos exist*/}
			{todosList.length > 0 && (
				<TodoCounter todos={todos} setTodos={setTodos} />
			)}
		</TodosInner>
	);
}

export default TodosContainer;
