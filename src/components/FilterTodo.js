import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: space-between;

	p {
		font-size: 12px;
		color: rgba(255, 255, 255, 0.4);
		padding: 0 15px;
		&:hover {
			cursor: pointer;
			transition: all ease 0.3s;
			color: #fff;
		}
	}

	.active {
		color: #72bef8;
	}

	@media screen and (max-width: 800px) {
		width: 90vw;
		margin: 0 auto;
		position: absolute;
		bottom: -75px;
		left: 0;
		background-color: #25273c;
		padding: 15px;
		border-radius: 7px;
	}
`;

function FilterTodo({ filter, setFilter }) {
	const updateFilter = (e) => {
		setFilter(e.target.innerText);
	};
	// This will filter the todos based on completion status
	return (
		<Container id='filter-container'>
			<p
				className={filter === 'All' && 'active'}
				onClick={(e) => updateFilter(e)}>
				All
			</p>
			<p
				className={filter === 'Active' && 'active'}
				onClick={(e) => updateFilter(e)}>
				Active
			</p>
			<p
				className={filter === 'Completed' && 'active'}
				onClick={(e) => updateFilter(e)}>
				Completed
			</p>
		</Container>
	);
}

export default FilterTodo;
