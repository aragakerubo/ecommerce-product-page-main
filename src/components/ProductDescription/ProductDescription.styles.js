import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	row-gap: 1.5em;
	max-width: 400px;
`;

export const BrandName = styled.p`
	color: var(--orange);
	font-weight: 600;
	text-transform: uppercase;
`;

export const ProductName = styled.p`
	color: var(--black);
	font-size: 2.5em;
	font-weight: 900;
`;

export const Info = styled.p`
	color: var(--darkGrayishBlue);
	font-size: 1em;
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	column-gap: 2.5em;
	height: 45px;
`;
