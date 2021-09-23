// Import Required modules
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Error from './components/Error';
import TodosContainer from './components/TodosContainer';
import { useState } from 'react';

// Main container styling
const Main = styled.main`
	width: 100vw;
	height: 100vh;
	background: #181824;
`;

const Grid = styled.div`
	width: 100vw;
	margin: 0 auto;
	display: grid;
	grid-template-rows: 232px 1fr 1fr;
`;

function App() {
	// This component will be the container for all other components

	const [todos, setTodos] = useState([]);
	const [error, setError] = useState({ msg: '', valid: false });
	return (
		<Main>
			<Grid>
				<Header todos={todos} setTodos={setTodos} setError={setError}></Header>
				<TodosContainer todos={todos} setTodos={setTodos}></TodosContainer>
			</Grid>
			{error.msg && <Error error={error} setError={setError} />}
		</Main>
	);
}

export default App;
