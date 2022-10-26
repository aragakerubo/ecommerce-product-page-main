import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 90px));
	grid-template-rows: repeat(5, minmax(0, 90px));
	gap: 25px;
	min-width: 435px;
	min-height: 550px;
`;

export const MainImg = styled.div`
	grid-area: 1 / 1 / span 4 / span 4;
	background-color: var(--white);
	border-radius: 10px;
	border-sizing: border-box;
	overflow: hidden;
	cursor: pointer;

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
		props.isSelected ? "0.15rem solid var(--orange)" : "none"};
	img {
		filter: ${(props) => (props.isSelected ? "opacity(0.65)" : "none")};
	}

	img:hover {
		filter: opacity(0.65);
	}
`;
