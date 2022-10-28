import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	position: absolute;
	bottom: -15rem;
	right: 0;
	width: 90%;
	max-width: 300px;
	height: 250px;
	border-radius: 10px;
	background-color: var(--white);
	box-shadow: 0 5px 20px -8px var(--darkGrayishBlue);
	overflow: hidden;
	z-index: 1000;

	@media (max-width: 1300px) {
		right: 1rem;
	}

	@media (max-width: 400px) {
		bottom: -16.25em;
		right: 0;
		left: 0;
		margin-right: auto;
		margin-left: auto;
	}
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

export const CartArea = styled.div`
	position: relative;
	padding: 1rem;
	display: flex;
	${(props) => props.emptyCart && "justify-content: center;"}
	align-items: center;
	flex-direction: column;
	height: calc(100% - 55px);
	width: 100%;
`;

export const Contents = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	max-height: 100px;
	overflow: auto;

	p {
		font-size: 1rem;
		font-weight: 600;
		color: var(--darkGrayishBlue);
		text-align: center;
	}
`;

export const CartItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 0.3em;
	width: 100%;
	max-height: 60px;

	img {
		width: 50px;
		height: 50px;
		border-radius: 5px;
	}
`;

export const OrderDetails = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	row-gap: 0.3em;
	padding: 0.1rem 0.5em;
	height: 100%;

	p {
		font-size: 13px;
		font-weight: 500;
		text-align: left;
	}

	div {
		display: flex;
		align-items: center;
		column-gap: 0.5em;

		span {
			font-weight: 700;
			font-size: 13px;
		}
	}
`;

export const DeleteButton = styled.button`
	width: 30px;
	height: 30px;
	background-color: var(--white);
	border: none;
	cursor: pointer;

	img {
		width: 100%;
		height: auto;
		object-fit: contain;
	}

	&:hover {
		img {
			filter: brightness(40%);
		}
	}
`;

export const CheckoutButton = styled.button`
	position: absolute;
	bottom: 0;
	margin: 1rem;
	height: 50px;
	width: calc(100% - 2rem);
	font-size: 13px;
	font-weight: 600;
	text-align: center;
	background-color: var(--orange);
	color: var(--white);
	border: none;
	border-radius: 5px;
	cursor: pointer;
`;
