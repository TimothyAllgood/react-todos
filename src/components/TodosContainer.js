import { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../shared/Container';
import Todo from './Todo';
import TodoCounter from './TodoCounter';

// Styles our inner container extending our container component styling
const TodosInner = styled(Container)`
	position: relative;
	background-color: #25273c;
	border-radius: 7px;
	margin-top: -25px;
	z-index: 1;
	padding: 15px;
	.paragraph {
		text-align: center;
	}
	@media screen and (min-width: 800px) {
		 {
			margin-top: -40px;
			.paragraph {
				min-height: 150px;
				p {
					width: 500px;
				}
				display: inline-block;
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
1`;

function TodosContainer({ todos, setTodos }) {
	// State to track which todos are being filtered
	const [filter, setFilter] = useState('All');

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

	// Handles dropping a dragged todo
	const handleDrop = (e) => {
		// Prevents default dropping behavior
		e.preventDefault();

		// Finds the todo and index of the todo that we are trying to replace
		const todoToMove = todos.find(
			(t) => t.item.toLowerCase() === e.target.innerText.toLowerCase()
		);
		const j = todos.indexOf(todoToMove);

		// Finds the todo and index of the todo that we are trying to drag and drop
		const originalTodo = todos.find(
			(t) =>
				t.item.toLowerCase() === e.dataTransfer.getData('text').toLowerCase()
		);

		const i = todos.indexOf(originalTodo);

		// If the index is zero places the dragged item at the front of the array, fixing a bug that was causing the app to crash
		if (i === 0) {
			[todos[0], todos[j]] = [todos[j], todos[0]];
		} else if (i === todos.length - 1) {
			[todos[todos.length - 1], todos[j]] = [todos[j], todos[todos.length - 1]];
		} else {
			// Otherwise replace the dragged elements index with the index of the element being shifted
			[todos[i], todos[j]] = [todos[j], todos[i]];
		}
		// Sets state to the new order of todos
		setTodos([...todos]);
	};

	// Creates an array of Todo components. This function maps each todo to a todo component. Only called if out todos array contains items
	if (todos) {
		let filtered;

		if (filter === 'All') {
			filtered = todos;
		} else if (filter === 'Active') {
			filtered = todos.filter((todo) => todo.active);
		} else if (filter === 'Completed') {
			filtered = todos.filter((todo) => !todo.active);
		}

		todosList = filtered.map((todo, index) => {
			return (
				<>
					<Todo
						key={todo.id}
						todo={todo}
						i={index}
						completeTodo={completeTodo}
						removeTodo={removeTodo}
						handleDrop={handleDrop}
					/>
				</>
			);
		});
	}
	return (
		<TodosInner>
			{/* Returns todoList array if the todoList array is not empty, otherwise display a paragraph with info on why no todos are displayed */}
			{todos.length > 0 ? (
				todosList
			) : (
				<div className='paragraph'>
					<p>
						You have no items in your todo list. Create an item to begin
						tracking you list.
					</p>
				</div>
			)}
			{/* Display counter of active elements and button to clear completed todos if todos exist*/}
			{todos.length > 0 && (
				<TodoCounter
					todos={todos}
					setTodos={setTodos}
					setFilter={setFilter}
					filter={filter}
				/>
			)}
		</TodosInner>
	);
}

export default TodosContainer;
