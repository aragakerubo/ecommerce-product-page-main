import styled from "styled-components";

export const Wrapper = styled.nav`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 75px;
	border-bottom: 0.5px solid var(--blackLine);
`;

export const LogoMenu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	column-gap: 2.75em;
`;

export const Logo = styled.img`
	width: 100px;
	cursor: pointer;
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

	li:hover,
	li:active {
		border-bottom: 3px solid var(--orange);
		margin-bottom: -3px;
		color: var(--black);
	}
`;

export const CartProfile = styled(LogoMenu)`
	column-gap: 2rem;
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
`;
