import styled from 'styled-components';
import FilterTodo from './FilterTodo';
function TodoCounter({ todos, setTodos, setFilter, filter }) {
	const Container = styled.section`
		color: rgba(255, 255, 255, 0.4);
		display: flex;
		justify-content: space-between;
		margin-top: 15px;
		font-size: 12px;
		.clear {
			transition: all ease 0.3s;
			&:hover {
				cursor: pointer;
				color: #fff;
			}
		}
	`;

	// Variable to track count of active todos
	let count;

	// Filter out completed todos
	if (todos.length > 0) {
		count = todos.filter((todo) => todo.active).length;
	}

	// Clear todos that are completed from our todos state array
	const clearCompleted = () => {
		let activeTodos = todos.filter((todo) => todo.active);
		setTodos(activeTodos);
	};

	return (
		<Container>
			<p>
				{count} item{count > 1 && 's'} left
			</p>
			<FilterTodo setFilter={setFilter} filter={filter} />
			<p className='clear' onClick={clearCompleted}>
				Clear Completed
			</p>
		</Container>
	);
}

export default TodoCounter;
