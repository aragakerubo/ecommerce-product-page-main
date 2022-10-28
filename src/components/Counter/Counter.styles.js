import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	grid-template-rows: 1fr;
	width: 30%;
	min-width: 90px;
	height: 45px;
	border-radius: 5px;
	overflow: hidden;
	background-color: var(--white);

	@media (max-width: 550px) {
		width: 100%;
	}
`;

export const Button = styled.button`
	background-color: var(--lightGrayishBlue);
	grid-area: span 1;
	font-size: 16px;
	font-weight: 600;
	color: var(--orange);
	height: 100%;
	border: none;
	transition: 0.1s;
	cursor: pointer;
	text-align: center;

	&:hover {
		filter: opacity(0.65);
	}

	img {
		width: 12px;
		vertical-align: middle;
	}
`;

export const Input = styled.input`
	grid-area: span 1;
	font-size: 16px;
	font-weight: 600;
	background-color: var(--lightGrayishBlue);
	color: var(--black);
	height: 100%;
	text-align: center;
	border: none;

	&:active,
	&:focus {
		outline: none;
	}
`;
