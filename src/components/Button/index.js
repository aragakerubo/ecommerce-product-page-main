import React from "react";

import { Wrapper } from "./Button.styles";
import shoppingCart from "../../images/icon-cart-white.svg";

export default function Button() {
	return (
		<Wrapper type="button">
			<img alt="add-to-cart" src={shoppingCart} /> Add to cart
		</Wrapper>
	);
}
