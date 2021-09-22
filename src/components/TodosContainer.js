import { useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../shared/Container';
import Todo from './Todo';

// Styles our inner container extending our container component styling
const TodosInner = styled(Container)`
	background-color: #25273c;
	border-radius: 7px;
	margin-top: -25px;
	z-index: 1;
	padding: 15px;
`;

function TodosContainer({ todos }) {
	// Will hold our todo components
	let todosList;

	if (todos) {
		todosList = todos.map((todo) => {
			return (
				<>
					<Todo key={todo.id} todo={todo} />
				</>
			);
		});
	}

	return (
		<TodosInner>
			{todosList.length > 0 ? (
				todosList
			) : (
				<p>
					You have no items in your todo list. Create an item to begin tracking
					you list.
				</p>
			)}
		</TodosInner>
	);
}

export default TodosContainer;
