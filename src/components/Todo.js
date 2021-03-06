import styled from 'styled-components';
import { ReactComponent as CheckMark } from '../assets/images/icon__check.svg';
import { ReactComponent as Close } from '../assets/images/icon__close.svg';

// Styles container for individual todo
const TodoContainer = styled.div`
	animation: fadeIn 1s;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	margin: 0 -15px;
	padding: 15px;
	display: grid;
	grid-template-columns: 30px 1fr 30px;
	&:hover {
		cursor: grab;
	}
	&:first-of-type {
		padding: 0 15px 15px;
	}
	@keyframes fadeIn {
		from {
			transform: rotateX(90deg);
			opacity: 0;
		}
		to {
			transform: rotateX(0deg);
			opacity: 1;
		}
	}
`;

// Adds padding to item to better fit mockup
const TodoItem = styled.p`
	padding-left: 15px;
`;

// Styles button to mark todo as complete, uses media query to disable hover on mobile
const Circle = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 24px;
	height: 24px;
	border: 1px solid rgba(255, 255, 255, 0.4);
	border-radius: 50%;
	background: transparent;
	transition: 0.5s ease all;
	@media (hover: hover) and (pointer: fine) {
	&:hover {
		cursor: pointer;
		border-radius:50%; 
		border:1px solid transparent; 
		background:linear-gradient( #72BEF8, #A674F2) border-box; 
		-webkit-mask: 
		   linear-gradient(#fff 0 0) padding-box, 
		   linear-gradient(#fff 0 0);
		-webkit-mask-composite: destination-out; 
		mask-composite: exclude; 
	}
}
	svg {
		path {
			fill: transparent;
			transition: 0.3s ease all;
		}
	}}
`;

const CloseBtn = styled.button`
	background: transparent;
	border: none;
	transition: 0.3s all ease;
	&:hover {
		cursor: pointer;
		svg {
			path {
				fill: #fff;
				fill-opacity: 1;
			}
		}
	}

	svg {
		path {
			transition: all ease 0.3s;
		}
	}
`;

function Todo({ todo, completeTodo, i, removeTodo, handleDrop }) {
	const dragStart = (e) => {
		e.dataTransfer.setData('text/plain', todo.item);
	};

	const dragOver = (e) => {
		e.preventDefault();
	};

	const dragEnter = (e) => {
		e.preventDefault();
		if (e.target.tagName === 'P') {
			e.target.parentElement.classList.add('replacement');
		} else {
			e.target.parentElement.classList.add('replacement');
		}
	};

	const dragLeave = (e) => {
		e.preventDefault();
		if (e.target.tagName === 'P') {
			e.target.parentElement.classList.remove('replacement');
		} else {
			e.target.parentElement.classList.remove('replacement');
		}
	};

	return (
		<TodoContainer
			className={!todo.active && 'todo-completed'}
			draggable
			onDragStart={dragStart}
			onDragOver={dragOver}
			onDragEnter={dragEnter}
			onDragLeave={dragLeave}
			onDrop={(e) => handleDrop(e)}>
			<Circle onClick={() => completeTodo(i, todo)}>
				<CheckMark />
			</Circle>
			<TodoItem>{todo.item}</TodoItem>
			<CloseBtn onClick={() => removeTodo(todo)}>
				<Close />
			</CloseBtn>
		</TodoContainer>
	);
}

export default Todo;
