import styled from 'styled-components';

function TodoCounter({ todos, setTodos }) {
	const Container = styled.section`
		color: rgba(255, 255, 255, 0.4);
		display: flex;
		justify-content: space-between;
		margin-top: 15px;
		font-size: 12px;
	`;

	let count;
	if (todos.length > 0) {
		count = todos.filter((todo) => todo.active).length;
	}

	const clearCompleted = () => {
		let activeTodos = todos.filter((todo) => todo.active);
		setTodos(activeTodos);
	};

	return (
		<Container>
			<p>
				{count} item{count > 1 && 's'} left
			</p>
			<p onClick={clearCompleted}>Clear Completed</p>
		</Container>
	);
}

export default TodoCounter;
