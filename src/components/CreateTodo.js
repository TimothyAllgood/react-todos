import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckMark } from '../assets/images/icon__check.svg';

const Container = styled.div`
	position: relative;
	margin-top: 25px;
`;

const TodoInput = styled.input`
	position: relative;
	background: #25273c;
	color: #fff;
	border-radius: 7px;
	width: 100%;
	padding: 15px 15px 15px 50px;
	border: none;
	outline: none;
	&:focus,
	:hover {
		background: #25273c;
		box-shadow: 0px 0px 4px 2px rgba(255, 255, 255, 0.25);
	}
`;

const Circle = styled.button`
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
	svg {
		path {
			fill: transparent;
			transition: 0.3s ease all;
		}
	}
`;

// This function will allow users to add Todo items to their todo list
function CreateTodo({ todos, setTodos }) {
	// Save our current todo in state, will be used to save one todo to our todos array
	const [todo, setTodo] = useState('');

	// Our todo input, used to clear input
	const todoInput = document.getElementById('todo-input');

	// When the input is changed update the todo value
	const handleChange = (e) => {
		setTodo(e.target.value);
	};

	// When the circular button in the input is clicked update our global todos state
	const handleClick = () => {
		// Check if todo exist
		// TODO: add error alert
		if (todo.length > 0) {
			setTodos([
				...todos,
				{
					item: todo,
					progress: 'Active',
					id: Math.floor(Math.random() * 10000),
				},
			]);
			// Reset todo
			setTodo('');
			todoInput.value = '';
		} else {
			console.log('Todo Input empty');
		}
	};

	// Allow todo to be saved on enter and checks if the input is empty
	// TODO: add error alert
	const handleKeyPress = (e) => {
		if (e.key === 'Enter' && todo.length > 0) {
			setTodos([...todos, { item: todo, progress: 'Active' }]);

			//Reset todo
			setTodo('');
			todoInput.value = '';
		} else {
			console.log('Todo Input empty');
		}
	};

	return (
		<Container>
			<Circle onClick={handleClick}>
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
