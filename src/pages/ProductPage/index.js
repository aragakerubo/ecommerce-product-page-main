import React from "react";

import { Wrapper } from "./ProductPage.styles";
import Gallery from "../../components/Gallery";
import ProductDescription from "../../components/ProductDescription";

export default function ProductPage() {
	return (
		<Wrapper>
			<Gallery />
			<ProductDescription />
		</Wrapper>
	);
}
