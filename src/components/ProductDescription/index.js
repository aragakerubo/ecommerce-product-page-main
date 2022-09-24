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

const dummyProduct = {
	originalPrice: "250.00",
	discount: "50",
};

export default function ProductDescription() {
	return (
		<Wrapper>
			<BrandName>Sneaker Company</BrandName>
			<ProductName>Fall Limited Edition Sneakers</ProductName>
			<Info>
				These low-profile sneakers are your perfect casual wear
				companion. Featuring a durable rubber outer sole, they'll
				withstand everything the weather can offer.
			</Info>
			<PriceTag
				originalPrice={dummyProduct.originalPrice}
				discount={dummyProduct.discount}
			/>
			<Container>
				<Counter />
				<Button />
			</Container>
		</Wrapper>
	);
}
