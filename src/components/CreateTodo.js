import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	margin-top: 25px;
`;

const TodoInput = styled.input`
	position: relative;
	background: #25273c;
	color: #fff;
	border-radius: 7px;
	width: 100%;
	padding: 15px 15px 15px 50px;
	border: none;
	outline: none;
	&:focus,
	:hover {
		box-shadow: 0px 0px 4px 2px rgba(255, 255, 255, 0.25);
	}
`;

const Circle = styled.div`
	width: 24px;
	height: 24px;
	border: 1px solid rgba(255, 255, 255, 0.4);
	border-radius: 50%;
	position: absolute;
	z-index: 1;
	top: 10.5px;
	left: 16px;
`;

// This function will allow users to add Todo items to their todo list
function CreateTodo() {
	return (
		<Container>
			<Circle />
			<TodoInput placeholder='Create a new item...'></TodoInput>
		</Container>
	);
}

export default CreateTodo;
