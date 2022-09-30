import React from "react";
import { useState, useContext } from "react";

import { CartContext } from "../../context";
import {
	Wrapper,
	LogoMenu,
	Logo,
	Menu,
	CartProfile,
	Cart,
	Profile,
} from "./Navbar.styles";
import ViewCart from "../ViewCart";
import LogoImg from "../../images/logo.svg";
import ProfileImg from "../../images/image-avatar.png";
import CartImg from "../../images/icon-cart.svg";

export default function Navbar(props) {
	const [viewCart, setViewCart] = useState(false);
	const [cartItems] = useContext(CartContext);

	let avatar = props.avatar || ProfileImg;

	function handleViewCart() {
		setViewCart((prevState) => !prevState);
	}

	return (
		<Wrapper>
			<LogoMenu>
				<Logo src={LogoImg} />
				<Menu>
					<li>Collections</li>
					<li>Men</li>
					<li>Women</li>
					<li>About</li>
					<li>Contact</li>
				</Menu>
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
