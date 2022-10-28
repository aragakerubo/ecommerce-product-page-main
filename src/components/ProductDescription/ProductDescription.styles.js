import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	row-gap: 1.5em;
	max-width: 400px;

	@media (max-width: 550px) {
		padding: 0 2em;
	}
`;

export const BrandName = styled.p`
	color: var(--orange);
	font-weight: 600;
	text-transform: uppercase;

	@media (max-width: 550px) {
		font-size: 0.8em;
	}
`;

export const ProductName = styled.p`
	color: var(--black);
	font-size: 2.5em;
	font-weight: 900;

	@media (max-width: 550px) {
		font-size: 1.6em;
	}
`;

export const Info = styled.p`
	color: var(--darkGrayishBlue);
	font-size: 1em;

	@media (max-width: 550px) {
		font-size: 0.85em;
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 2.5em;
	height: 45px;

	@media (max-width: 550px) {
		flex-direction: column;
		height: auto;
		gap: 1em;
	}
`;
