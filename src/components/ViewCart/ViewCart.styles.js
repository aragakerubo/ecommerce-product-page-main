import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	position: absolute;
	bottom: -15rem;
	right: 0;
	width: 70%;
	max-width: 300px;
	height: 250px;
	border-radius: 10px;
	background-color: var(--white);
	box-shadow: 0 5px 20px -8px var(--darkGrayishBlue);
	overflow: hidden;
	z-index: 1000;
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 55px;
	border-bottom: 1px solid var(--blackLine);

	p {
		padding: 0 1em;
		font-size: 1rem;
		font-weight: 700;
		color: var(--black);
	}
`;

export const Contents = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: calc(100% - 55px);
	overflow: auto;

	p {
		font-size: 1rem;
		font-weight: 600;
		color: var(--darkGrayishBlue);
		text-align: center;
	}
`;
