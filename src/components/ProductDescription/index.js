import React from "react";

import {
	Wrapper,
	BrandName,
	ProductName,
	Info,
	Container,
} from "./ProductDescription.styles";
import PriceTag from "../PriceTag";
import Counter from "../Counter";
import Button from "../Button";

import shoppingCart from "../../images/icon-cart-white.svg";

export default function ProductDescription(props) {
	let currentPrice = (
		(parseInt(props.productInfo.Price.OriginalPrice) *
			(100 - parseInt(props.productInfo.Price.Discount))) /
		100
	).toFixed(2);
	return (
		<Wrapper>
			<BrandName>{props.productInfo.BrandName}</BrandName>
			<ProductName>{props.productInfo.ProductName}</ProductName>
			<Info>{props.productInfo.ProductDescription}</Info>
			<PriceTag
				originalPrice={props.productInfo.Price.OriginalPrice}
				discount={props.productInfo.Price.Discount}
				currentPrice={currentPrice}
			/>
			<Container>
				<Counter />
				<Button
					handleButtonClick={() =>
						props.handleButtonClick(
							currentPrice,
							props.productInfo.ProductName,
							props.productThumbnail,
							props.productId
						)
					}
					text="Add to cart"
					imgUrl={shoppingCart}
					cursorType={props.cursorType}
				/>
			</Container>
		</Wrapper>
	);
}
