import styled from 'styled-components';
import { Container } from '../shared/Container';

// Styles our inner container extending our container component styling
const TodosInner = styled(Container)`
	background-color: #25273c;
	border-radius: 7px;
	margin-top: -25px;
	z-index: 1;
	padding: 15px;
`;

function TodosContainer() {
	return (
		<TodosInner>
			<h2>TODOS</h2>
		</TodosInner>
	);
}

export default TodosContainer;
