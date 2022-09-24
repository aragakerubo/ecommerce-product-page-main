import React from "react";

import {
	Wrapper,
	LogoMenu,
	Logo,
	Menu,
	CartProfile,
	Cart,
	Profile,
} from "./Navbar.styles";
import LogoImg from "../../images/logo.svg";
import ProfileImg from "../../images/image-avatar.png";
import CartImg from "../../images/icon-cart.svg";

export default function Navbar(props) {
	let avatar = props.avatar || ProfileImg;
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
				<Cart>
					<img alt="shopping-cart" src={CartImg} />
				</Cart>
				<Profile>
					<img alt="avatar" src={avatar} />
				</Profile>
			</CartProfile>
		</Wrapper>
	);
}
