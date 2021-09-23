import styled from 'styled-components';
import { ReactComponent as Close } from '../assets/images/icon__close.svg';

const ErrorContainer = styled.section`
	position: fixed;
	display: inline-block;
	bottom: 5px;
	padding: 50px;
	left: 50%;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
	background: #b33a3a;
	animation: fadeIn 2s;

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

const CloseError = styled.button`
	right: 10px;
	top: 10px;
	position: absolute;
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

function Error({ error, setError }) {
	const closeError = () => {
		setError({ msg: '', valid: true });
	};
	return (
		<ErrorContainer>
			<CloseError onClick={closeError}>
				<Close />
			</CloseError>
			<p>{error.msg}</p>
		</ErrorContainer>
	);
}

export default Error;
