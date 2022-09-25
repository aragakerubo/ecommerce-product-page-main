import React from "react";

import { Wrapper, Title, Contents } from "./ViewCart.styles";

export default function ViewCart() {
	return (
		<Wrapper>
			<Title>
				<p>Cart</p>
			</Title>
			<Contents>
				<p>Your cart is empty.</p>
			</Contents>
		</Wrapper>
	);
}
