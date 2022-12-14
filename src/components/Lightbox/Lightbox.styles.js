import styled from "styled-components";

export const Wrapper = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	background-color: var(--blackBackground);
	z-index: 10000;

	::-webkit-scrollbar {
		display: none;
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: end;
	padding: 1rem 0;
	width: 75%;
	max-width: 450px;
`;

// close icon original color: #69707D
export const CloseButton = styled.img`
	width: 1.25rem;
	filter: brightness(0) saturate(100%) invert(1);
	cursor: pointer;

	&:hover {
		filter: brightness(0) saturate(100%) invert(71%) sepia(65%)
			saturate(4757%) hue-rotate(347deg) brightness(100%) contrast(102%);
	}
`;

export const Section = styled(Container)`
	padding: 0;
	justify-content: centre;
	position: relative;
`;

export const PreviousButton = styled.button`
	position: absolute;
	left: -5%;
	top: 45%;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
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
		height: 35px;
		width: 35px;
	}
`;

export const NextButton = styled(PreviousButton)`
	left: auto;
	right: -5%;

	visibility: ${(props) => (props.displayNextButton ? "visible" : "hidden")};
`;

export const MiniImgSection = styled(Container)`
	padding: 2rem 3rem;
	justify-content: space-between;
`;

export const MainImg = styled.div`
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
	border-radius: 5px;
	width: 20%;
	max-width: 70px;
	cursor: pointer;
	outline: ${(props) =>
		props.isSelected ? "0.1rem solid var(--orange)" : "none"};

	img {
		filter: ${(props) => (props.isSelected ? "opacity(0.65)" : "none")};
	}

	img:hover {
		filter: opacity(0.65);
	}
`;
