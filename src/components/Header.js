import styled from 'styled-components';
import bg from '../assets/images/bg__trees.png';

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

// Adds padding to our container to fit mockup specs
const Container = styled.div`
	padding-top: calc(232px * 0.2);
`;

// This component will hold our form to create a new Todo
function Header() {
	return (
		<Background>
			<Container className='inner-container'>
				<h1>TODO</h1>
			</Container>
		</Background>
	);
}

export default Header;
