import React from "react";
import { useState, useContext } from "react";

import { CartContext } from "../../context";
import {
	Wrapper,
	LogoMenu,
	Logo,
	BarIcon,
	Menu,
	CloseIcon,
	CartProfile,
	Container,
	Cart,
	Profile,
} from "./Navbar.styles";
import ViewCart from "../ViewCart";
import LogoImg from "../../images/logo.svg";
import ProfileImg from "../../images/image-avatar.png";
import CartImg from "../../images/icon-cart.svg";
import BarImg from "../../images/icon-menu.svg";
import CloseImg from "../../images/icon-close.svg";

export default function Navbar(props) {
	const [viewCart, setViewCart] = useState(false);
	const [cartItems] = useContext(CartContext);
	const [menuDisplay, setMenuDisplay] = useState(false);

	let avatar = props.avatar || ProfileImg;

	function handleViewCart() {
		setViewCart((prevState) => !prevState);
	}

	function handleOpenMenuDisplay() {
		setMenuDisplay(true);
	}

	function handleCloseMenuDisplay() {
		setMenuDisplay(false);
	}

	return (
		<Wrapper>
			<LogoMenu>
				<BarIcon src={BarImg} onClick={handleOpenMenuDisplay} />
				<Logo src={LogoImg} />
				<Container active={menuDisplay}>
					<Menu active={menuDisplay}>
						<li>
							<CloseIcon
								src={CloseImg}
								onClick={handleCloseMenuDisplay}
							/>
						</li>
						<li>Collections</li>
						<li>Men</li>
						<li>Women</li>
						<li>About</li>
						<li>Contact</li>
					</Menu>
				</Container>
			</LogoMenu>
			<CartProfile>
				<Cart active={viewCart} onClick={handleViewCart}>
					{cartItems.TotalItems > 0 && <p>{cartItems.TotalItems}</p>}
					<img alt="shopping-cart" src={CartImg} />
				</Cart>
				<Profile active={viewCart} onClick={handleViewCart}>
					<img alt="avatar" src={avatar} />
				</Profile>
			</CartProfile>
			{viewCart && <ViewCart />}
		</Wrapper>
	);
}
