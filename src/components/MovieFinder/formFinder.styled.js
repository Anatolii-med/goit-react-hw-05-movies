import styled from 'styled-components';

export const FormWrap = styled.div`
	display: inline-flex;
	margin: 0 50%;
	transform: translateX(-50%);
`;

export const ButtonSearch = styled.button`
	margin: 0 0 0 15px;
	/* display: inline-flex; */
	width: 80px;
	height: 40px;
	border-radius: 5px;

	transition: 200ms linear;

	&:hover {
		color: orange;
		background-color: #222222;
		box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.75);
		transform: translateY(-1px);
	}
`;

export const InputSearch = styled.input`
	display: inline-block;
	height: 40px;
	background: #dddddd;

	font-size: 24px;
`;

export const LabelSearch = styled.label`
	display: inline-flex;
	align-items: center;
`;
