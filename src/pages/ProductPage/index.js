import React, { useState, useContext, createContext } from "react";

import { Wrapper } from "./ProductPage.styles";
import Gallery from "../../components/Gallery";
import ProductDescription from "../../components/ProductDescription";
import { data } from "../../data";
import { CartContext } from "../../context";
import { nanoid } from "nanoid";

export const CounterContext = createContext();

export default function ProductPage() {
	const [counter, setCounter] = useState(0);
	const [, setCartItems] = useContext(CartContext);

	function handleButtonClick(currentPrice, productName, thumbnail, itemId) {
		if (parseInt(counter) > 0) {
			let quantity = counter;
			const newItem = {
				itemId: itemId,
				orderId: nanoid(),
				quantity: quantity,
				price: currentPrice,
				productName: productName,
				thumbnail: thumbnail,
			};

			setCartItems((prevState) => {
				let TotalItems = prevState.TotalItems + parseInt(quantity);
				let CartItems = [...prevState.CartItems, newItem];
				const newCart = {
					TotalItems,
					CartItems,
				};

				return newCart;
			});
		}
		// console.log(cartItems);
	}

	return (
		<CounterContext.Provider value={[counter, setCounter]}>
			<Wrapper>
				<Gallery productImages={data.Products[0].Images} />
				<ProductDescription
					productInfo={data.Products[0].ProductInfo}
					productThumbnail={data.Products[0].Images[0].thumbnail}
					handleButtonClick={handleButtonClick}
				/>
			</Wrapper>
		</CounterContext.Provider>
	);
}
