import { useState } from 'react';

export function MovieFinder({ onSubmit }) {
	const [query, setQuery] = useState('');

	function handleInput(e) {
		setQuery(e.target.value);
	}

	function onSubmitForm(e) {
		e.preventDefault();
		onSubmit(query);
		setQuery('');
	}

	return (
		<form onSubmit={onSubmitForm}>
			<label>
				<input type="text" onInput={handleInput} value={query} />
				<button type="submit">Submit</button>
			</label>
		</form>
	);
}
