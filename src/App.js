import './App.css';
import SearchFilter from './component/SearchFilter';
import SearchFilterApi from './component/SearchFilterApi';

function App() {
	return (
		<div className="App">
			<h1>React Search & Input</h1>
			<br />
			<SearchFilter />
			<br />
			<SearchFilterApi />
		</div>
	);
}

export default App;
