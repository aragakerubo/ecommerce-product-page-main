import styled from "styled-components";

export const Wrapper = styled.nav`
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
		transition: 0.1s;
	}

	li:hover,
	li:active {
		border-bottom: 3px solid var(--orange);
		color: var(--black);
	}
`;

export const CartProfile = styled(LogoMenu)`
	column-gap: 2rem;
`;

export const Cart = styled.div`
	width: 20px;
	height: 20px;
	cursor: pointer;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const Profile = styled(Cart)`
	width: 40px;
	height: 40px;
	border-radius: 50%;

	&:active {
		outline: 0.1rem solid var(--orange);
	}
`;
