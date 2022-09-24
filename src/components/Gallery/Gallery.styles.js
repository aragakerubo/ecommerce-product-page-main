import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	grid-template-rows: repeat(5, minmax(0, 1fr));
	gap: 25px;
	max-width: 435px;
	max-height: 550px;
`;

export const MainImg = styled.div`
	grid-area: 1 / 1 / span 4 / span 4;
	background-color: var(--white);
	border-radius: 10px;
	border-sizing: border-box;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const MiniImg = styled(MainImg)`
	grid-area: span 1;
	border-radius: 5px;
	cursor: pointer;
	outline: ${(props) =>
		props.isSelected ? "0.2rem solid var(--orange)" : "none"};
	filter: ${(props) => (props.isSelected ? "opacity(0.65)" : "none")};

	&:hover {
		filter: opacity(0.65);
	}
`;
