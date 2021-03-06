import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckMark } from '../assets/images/icon__check.svg';

// Styling for the container
const Container = styled.div`
	position: relative;
	margin-top: 25px;
`;

// Styling for the input that creates the todo
const TodoInput = styled.input`
	/* Fixes bug with input color */
	&:-webkit-autofill,
	:-webkit-autofill:hover, 
	:-webkit-autofill:focus, 
	:-webkit-autofill:active
	{
		-webkit-box-shadow: 0 0 0 30px #25273c inset !important;
		-webkit-text-fill-color: white !important;
	}
	position: relative;
	background: #25273c;
	color: #fff;
	border-radius: 7px;
	width: 100%;
	padding: 15px 15px 15px 50px;
	border: none;
	outline: none;
	&:focus,
	transform: translateZ(0);
	:hover {
		background: #25273c;
		box-shadow: 0px 0px 4px 2px rgba(255, 255, 255, 0.25);
	}
`;

// Styling for Circle button that saves todo, uses media query to disable hover on mobile
const Circle = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 24px;
	height: 24px;
	border: 1px solid rgba(255, 255, 255, 0.4);
	border-radius: 50%;
	position: absolute;
	z-index: 1;
	top: 10.5px;
	left: 16px;
	background: transparent;
	transition: 0.5s ease all;
	@media (hover: hover) and (pointer: fine) {
		&:hover {
			cursor: pointer;
			background: linear-gradient(
				131.73deg,
				rgba(114, 190, 248, 0.8) 14.46%,
				rgba(166, 116, 242, 0.8) 87.62%
			);
			svg {
				path {
					fill: #fff;
				}
			}
		}
	}
	svg {
		path {
			fill: transparent;
			transition: 0.3s ease all;
		}
	}
`;

// This function will allow users to add Todo items to their todo list
function CreateTodo({ todos, setTodos, setError }) {
	// Save our current todo in state, will be used to save one todo to our todos array
	const [todo, setTodo] = useState('');

	// Our todo input, used to clear input
	const todoInput = document.getElementById('todo-input');

	// When the input is changed update the todo value
	const handleChange = (e) => {
		setTodo(e.target.value);
	};

	// Validates Todo
	const validateTodo = (todo) => {
		// Object to hold error info
		const error = {
			msg: '',
			valid: false,
		};
		// Check if todos contains same todo
		const todoExists = todos.filter((t) => t.item === todo);

		// If todo already exists throw an error
		if (todoExists.length > 0) {
			error.msg = 'You are already doing that task.';
			error.valid = false;
			setError({ msg: 'You are already doing that task.', valid: false });
		} else {
			error.msg = '';
			error.valid = true;
			setError({ msg: '', valid: true });
		}

		return error;
	};

	// When the circular button in the input is clicked update our global todos state
	const handleClick = (e) => {
		// Check if todo exist
		// TODO: add error alert
		let validation = validateTodo(todo);
		if (todo.length > 0 && validation.valid) {
			setTodos([
				...todos,
				{
					item: todo,
					active: true,
					id: Math.floor(Math.random() * 10000),
				},
			]);
			// Reset todo
			setTodo('');
			todoInput.value = '';
		}
	};

	// Allow todo to be saved on enter and checks if the input is empty
	// TODO: add error alert
	const handleKeyPress = (e) => {
		let validation = validateTodo(todo);
		if (e.key === 'Enter' && todo.length > 0 && validation.valid) {
			setTodos([
				...todos,
				{ item: todo, active: true, id: Math.floor(Math.random() * 10000) },
			]);

			//Reset todo
			setTodo('');
			todoInput.value = '';
		}
	};

	return (
		<Container>
			<Circle onClick={(e) => handleClick(e)}>
				<CheckMark />
			</Circle>
			<TodoInput
				id='todo-input'
				type='text'
				placeholder='Create a new item...'
				onChange={(e) => handleChange(e)}
				onKeyPress={(e) => handleKeyPress(e)}></TodoInput>
		</Container>
	);
}

export default CreateTodo;
