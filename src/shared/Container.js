import styled from 'styled-components';

const Container = styled.div`
	padding-top: calc(232px * 0.2);
	width: 90vw;
	margin: 0 auto;
	@media screen and (min-width: 768px) {
		width: 70vw;
	}

	@media screen and (min-width: 1000px) {
		width: 800px;
	}
`;

export { Container };
