import styled from "styled-components";

// export const Wrapper = styled.div`
// 	display: flex;
// 	height: 100%;
// `;

export const Wrapper = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 1em;
	padding: 0;
	height: 100%;
	width: 80%;
	min-width: 250px;
	font-size: 13px;
	font-weight: 600;
	text-align: center;
	background-color: var(--orange);
	color: var(--white);
	border: none;
	border-radius: 5px;
	box-shadow: 0 8px 28px -8px var(--orange);
	cursor: pointer;

	&:hover {
		filter: opacity(0.65);
	}

	img {
		width: 15px;
	}
`;
