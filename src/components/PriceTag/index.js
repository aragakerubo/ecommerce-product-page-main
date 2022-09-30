import React from "react";

import {
	Wrapper,
	Container,
	Price,
	Discount,
	OriginalPrice,
} from "./PriceTag.styles";

export default function PriceTag(props) {
	return (
		<Wrapper>
			<Container>
				<Price>{`$${props.currentPrice || props.originalPrice}`}</Price>
				{props.discount && <Discount>{`${props.discount}%`}</Discount>}
			</Container>
			{props.discount && (
				<OriginalPrice>
					{`$${parseInt(props.originalPrice).toFixed(2)}`}
				</OriginalPrice>
			)}
		</Wrapper>
	);
}
