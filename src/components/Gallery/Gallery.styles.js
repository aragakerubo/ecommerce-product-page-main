import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 90px));
	grid-template-rows: repeat(5, minmax(0, 90px));
	gap: 25px;
	min-width: 435px;
	min-height: 550px;

	@media (max-width: 550px) {
		width: 100%;
		min-width: auto;
		min-height: auto;
		grid-template-columns: repeat(4, auto);
		grid-template-rows: repeat(5, auto);
		gap: 0;
	}
`;

export const MainImg = styled.div`
	position: relative;
	grid-area: 1 / 1 / span 4 / span 4;
	background-color: var(--white);
	border-radius: 10px;
	box-sizing: border-box;
	overflow: hidden;
	cursor: pointer;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 550px) {
		border-radius: 0;
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

	@media (max-width: 550px) {
		display: none;
	}
`;

export const PreviousButton = styled.button`
	position: absolute;
	display: none;
	left: 5%;
	top: 45%;
	width: 40px;
	height: 40px;
	background-color: var(--white);
	border-radius: 50%;
	border: none;
	text-align: center;
	visibility: ${(props) => (props.displayPrevButton ? "visible" : "hidden")};

	img {
		vertical-align: middle;
		width: 40%;
		height: 40%;
		object-fit: cover;
	}

	&:hover {
		img {
			filter: brightness(0) saturate(100%) invert(71%) sepia(65%)
				saturate(4757%) hue-rotate(347deg) brightness(100%)
				contrast(102%);
		}
	}

	@media (max-width: 550px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const NextButton = styled(PreviousButton)`
	left: auto;
	right: 5%;

	visibility: ${(props) => (props.displayNextButton ? "visible" : "hidden")};
`;
