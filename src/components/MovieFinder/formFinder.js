import { useState } from 'react';
import {
	FormWrap,
	ButtonSearch,
	InputSearch,
	LabelSearch,
} from './formFinder.styled';

export function MovieFinder({ onSubmit, queryItem }) {
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
		<FormWrap>
			<form onSubmit={onSubmitForm}>
				<LabelSearch>
					<InputSearch
						type="text"
						placeholder={queryItem}
						onInput={handleInput}
						value={query}
					/>
					<ButtonSearch type="submit">Submit</ButtonSearch>
				</LabelSearch>
			</form>
		</FormWrap>
	);
}
