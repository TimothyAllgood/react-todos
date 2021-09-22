import styled from 'styled-components';
import { ReactComponent as CheckMark } from '../assets/images/icon__check.svg';
import { ReactComponent as Close } from '../assets/images/icon__close.svg';

const TodoContainer = styled.div`
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	margin: 0 -15px;
	padding: 15px;
	display: grid;
	grid-template-columns: 30px 1fr 30px;

	&:first-of-type {
		padding: 0 15px 15px;
	}
`;

const TodoItem = styled.p`
	padding-left: 15px;
`;

const Circle = styled.button`
	width: 24px;
	height: 24px;
	border: 1px solid rgba(255, 255, 255, 0.4);
	border-radius: 50%;
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

function Todo({ todo }) {
	return (
		<TodoContainer>
			<Circle>
				<CheckMark />
			</Circle>
			<TodoItem>{todo.item}</TodoItem>
			<Close></Close>
		</TodoContainer>
	);
}

export default Todo;
