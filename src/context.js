import React, { createContext, useState } from "react";

export const CartContext = createContext();
const cart = {
	TotalItems: 0,
	CartItems: [],
};

export default function UserInfoProvider(props) {
	const [state, setState] = useState(cart);

	return (
		<CartContext.Provider value={[state, setState]}>
			{props.children}
		</CartContext.Provider>
	);
}
