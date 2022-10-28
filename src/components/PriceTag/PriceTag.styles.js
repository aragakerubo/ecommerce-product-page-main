import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.5em;

	@media (max-width: 550px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	column-gap: 1em;
`;

export const Price = styled.p`
	font-size: 2em;
	font-weight: bold;

	@media (max-width: 550px) {
		font-size: 1.5em;
	}
`;

export const Discount = styled.p`
	background-color: var(--paleOrange);
	color: var(--orange);
	font-size: 1em;
	font-weight: 600;
	padding: 0.2em;
	border-radius: 5px;

	@media (max-width: 550px) {
		font-size: 0.8em;
	}
`;

export const OriginalPrice = styled.p`
	color: var(--grayishBlue);
	text-decoration: line-through;
	font-size: 0.8em;
	font-weight: bold;
`;
