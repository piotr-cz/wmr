import useCounter from './useCounter.js';

function Home() {
	const [count, increment] = useCounter();
	return (
		<div>
			<p class="home">Home</p>
			<p class="count">{count}</p>
			<p class="increment" onClick={increment}>
				Increment
			</p>
		</div>
	);
}

export default Home;
