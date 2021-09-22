import styled from 'styled-components';
import bg from '../assets/images/bg__trees.png';
import CreateTodo from './CreateTodo';
import { Container } from '../shared/Container';

// Styling for background of header
const Background = styled.section`
	position: relative;
	width: 100vw;
	height: 232px;
	background: linear-gradient(
			131.73deg,
			rgba(114, 190, 248, 0.8) 14.46%,
			rgba(166, 116, 242, 0.8) 87.62%
		),
		no-repeat center/cover url(${bg});
`;

const Title = styled.h1`
	font-style: normal;
	font-weight: bold;
	font-size: 2rem;
	line-height: 29px;
	letter-spacing: 0.25em;
	text-transform: uppercase;
`;

// This component will hold our form to create a new Todo
function Header({ todos, setTodos }) {
	return (
		<Background>
			<Container>
				<Title>TODO</Title>
				<CreateTodo todos={todos} setTodos={setTodos} />
			</Container>
		</Background>
	);
}

export default Header;
