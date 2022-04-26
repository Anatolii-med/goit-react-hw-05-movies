import styled from 'styled-components';

export const Wrap = styled.div`
	margin: 0 0 0 0;
`;

export const List = styled.ul`
	margin: 0 0 0 20px;
	padding: 20px 20px;
	list-style-type: none;
	background-color: lightgray;
	&:nth-child(2n) {
		background-color: teal;
	}
`;

export const Item = styled.li`
	margin: 0 0 40px 0;
	padding: 20px;
	&:nth-child(odd) {
		background-color: #aaaaaa;
	}

	&:nth-child(2n) {
		background-color: #777;
	}

	&:last-child {
		margin: 0;
	}
`;

export const NickName = styled.p`
	margin: 0 0 0 0;
	font-weight: 600;
`;

export const Rev = styled.p`
	margin: 0 0 0 0;
`;
