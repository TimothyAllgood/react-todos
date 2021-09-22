// Import Required modules
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';

// Main container styling
const Main = styled.main`
	width: 100vw;
	height: 100vh;
	background: #181824;
`;

function App() {
	// This component will be the container for all other components
	return (
		<Main>
			<Header></Header>
		</Main>
	);
}

export default App;
