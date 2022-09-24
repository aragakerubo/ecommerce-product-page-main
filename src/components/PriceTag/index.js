import React from "react";

import {
	Wrapper,
	Container,
	Price,
	Discount,
	OriginalPrice,
} from "./PriceTag.styles";

export default function PriceTag(props) {
	let discount = (
		(parseInt(props.originalPrice) * parseInt(props.discount)) /
		100
	).toFixed(2);
	return (
		<Wrapper>
			<Container>
				<Price>{`$${discount || props.originalPrice}`}</Price>
				{props.discount && <Discount>{`${props.discount}%`}</Discount>}
			</Container>
			{props.discount && (
				<OriginalPrice>{`$${props.originalPrice}`}</OriginalPrice>
			)}
		</Wrapper>
	);
}
