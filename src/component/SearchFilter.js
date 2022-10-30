import { useMemo, useRef, useState } from 'react';

function SearchFilter() {
	const [items, setItems] = useState([]);
	const [query, setQuery] = useState('');
	const inputRef = useRef();

	// Filtered Items based on Search Input
	const filteredItems = useMemo(() => {
		return items.filter((item) =>
			item.toLowerCase().includes(query.toLowerCase())
		);
	}, [items, query]);

	// Add Item
	const onSubmit = (e) => {
		e.preventDefault();

		console.log(inputRef.current.value);
		const value = inputRef.current.value;
		value !== '' && setItems([...items, value]);
		inputRef.current.value = '';
	};

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
			<form onSubmit={onSubmit}>
				New Item: <input ref={inputRef} type="text" />
				<button type="submit">Add</button>
			</form>
			<h3>Items:</h3>
			{filteredItems.map((item, idx) => (
				<div key={idx}>{item}</div>
			))}
		</>
	);
}

export default SearchFilter;
