import styled from "styled-components";

export const Wrapper = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 1em;
	padding: 0;
	height: 100%;
	width: 60%;
	min-width: 150px;
	font-size: 13px;
	font-weight: 600;
	text-align: center;
	background-color: var(--orange);
	color: var(--white);
	border: none;
	border-radius: 5px;
	box-shadow: 0 8px 28px -8px var(--orange);
	cursor: ${(props) => props.cursorType};
	filter: ${(props) =>
		props.cursorType === "not-allowed" ? "opacity(0.65)" : "none"};

	&:hover {
		filter: opacity(0.65);
	}

	img {
		width: 15px;
	}

	@media (max-width: 550px) {
		width: 100%;
		height: 45px;
	}
`;
