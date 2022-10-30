import { useMemo, useEffect, useState } from 'react';

function SearchFilterApi() {
	const [items, setItems] = useState([]);
	const [query, setQuery] = useState('');

	const fetchItems = async () => {
		const axios = (await import('axios')).default;
		const { data } = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);

		setItems(data.slice(0, 10));
	};

	useEffect(() => {
		fetchItems();
	}, []);

	// Filtered API Items based on Search Input
	const filteredItems = useMemo(() => {
		return items.filter((item) =>
			item.title.toLowerCase().includes(query.toLowerCase())
		);
	}, [items, query]);

	return (
		<>
			Search:
			<input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				type="search"
			/>
			<br />
			<br />
			<h3>Items:</h3>
			{filteredItems.map((item, idx) => (
				<div key={idx}>{item.title}</div>
			))}
		</>
	);
}

export default SearchFilterApi;
