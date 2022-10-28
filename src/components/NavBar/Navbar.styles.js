import styled from "styled-components";

export const Wrapper = styled.nav`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 75px;
	border-bottom: 0.5px solid var(--blackLine);

	@media (max-width: 1300px) {
		padding: 0 3rem;
	}

	@media (max-width: 850px) {
		height: 50px;
		padding: 0 1rem;
	}
`;

export const LogoMenu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	column-gap: 2.75em;

	@media (max-width: 850px) {
		column-gap: 1em;
	}
`;

export const Logo = styled.img`
	width: 100px;
	cursor: pointer;
`;

export const BarIcon = styled(Logo)`
	display: none;

	@media (max-width: 850px) {
		display: block;
		width: 0.8rem;

		&:hover {
			filter: brightness(40%);
		}
	}
`;

export const Menu = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 20px;
	height: 100%;
	padding: 0;
	margin: 0;
	list-style: none;

	li {
		display: flex;
		justify-content: centre;
		align-items: center;
		height: 100%;
		font-size: 16px;
		cursor: pointer;
		color: var(--darkGrayishBlue);
	}

	li:first-child {
		display: none;
	}

	li:hover,
	li:active {
		border-bottom: 3px solid var(--orange);
		margin-bottom: -3px;
		color: var(--black);
	}

	@media (max-width: 850px) {
		display: ${(props) => (props.active ? "flex" : "none")};
		justify-content: initial;
		align-items: flex-start;
		flex-direction: column;
		gap: 1em;
		padding: 2em;
		
		width: 70%;
		max-width: 370px;
		background-color: var(--white);

		li {
			height: 30px;
			font-weight: 600;
			color: var(--black);
		}

		li:first-child {
			display: flex;
			margin-bottom: 2em;

		}

		li:first-child:hover {
			margin-bottom: 2em;
		}

		li:hover,
		li:active {
			border: none;
			margin: 0;
		}
`;

export const Container = styled.div`
	height: 100%;

	@media (max-width: 850px) {
		display: ${(props) => (props.active ? "block" : "none")};
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: var(--blackBackground);
		z-index: 100000;
	}
`;

export const CloseIcon = styled(BarIcon)`
	width: 15px;
`;

export const CartProfile = styled(LogoMenu)`
	column-gap: 2rem;

	@media (max-width: 850px) {
		column-gap: 1em;
	}
`;

export const Cart = styled.div`
	position: relative;
	width: 20px;
	height: 20px;
	cursor: pointer;

	p {
		width: 20px;
		height: 11px;
		font-size: 9px;
		font-weight: 600;
		text-align: center;
		position: absolute;
		top: -0.2rem;
		right: -0.5rem;
		background-color: var(--orange);
		color: var(--white);
		border-radius: 10px;
		z-index: 10;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: ${(props) => (props.active ? "brightness(40%)" : "none")};
	}

	img:hover,
	img:active {
		filter: brightness(40%);
	}
`;

export const Profile = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	cursor: pointer;
	overflow: hidden;
	outline: ${(props) =>
		props.active ? "0.1rem solid var(--orange)" : "none"};

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&:active,
	&:hover {
		outline: 0.1rem solid var(--orange);
	}

	@media (max-width: 850px) {
		width: 25px;
		height: 25px;
	}
`;
