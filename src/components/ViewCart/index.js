import React, { useContext } from "react";

import { CartContext } from "../../context";
import {
	Wrapper,
	Title,
	CartArea,
	Contents,
	CartItem,
	OrderDetails,
	DeleteButton,
	CheckoutButton,
} from "./ViewCart.styles";
import rubbishbin from "../../images/icon-delete.svg";

export default function ViewCart() {
	const [cartItems, setCartItems] = useContext(CartContext);

	function handleDelete(event, itemId) {
		event.stopPropagation();
		setCartItems((prevState) => {
			let deletedItem = prevState.CartItems.find(
				(item) => item.itemId === itemId
			);
			let newCartItems = prevState.CartItems.filter(
				(item) => item.itemId !== itemId
			);
			let newTotalItems =
				prevState.TotalItems - parseInt(deletedItem.quantity);

			const newCart = {
				TotalItems: newTotalItems,
				CartItems: newCartItems,
			};

			return newCart;
		});
	}

	const CartItems = cartItems.CartItems.map((item) => (
		<CartItem key={item.itemId} id={item.itemId}>
			<img src={item.thumbnail} alt="product" />
			<OrderDetails>
				<p>{item.productName}</p>
				<div>
					<p>{`$${item.price}x${item.quantity}`}</p>
					<span>
						{`$${parseFloat(item.quantity * item.price).toFixed(
							2
						)}`}
					</span>
				</div>
			</OrderDetails>
			<DeleteButton
				onClick={(event) => handleDelete(event, item.itemId)}
			>
				<img src={rubbishbin} alt="delete" />
			</DeleteButton>
		</CartItem>
	));

	return (
		<Wrapper>
			<Title>
				<p>Cart</p>
			</Title>
			<CartArea emptyCart={cartItems.CartItems.length === 0}>
				<Contents>
					{cartItems.CartItems.length > 0 ? (
						CartItems
					) : (
						<p>Your cart is empty.</p>
					)}
				</Contents>
				{cartItems.CartItems.length > 0 && (
					<CheckoutButton>Checkout</CheckoutButton>
				)}
			</CartArea>
		</Wrapper>
	);
}
