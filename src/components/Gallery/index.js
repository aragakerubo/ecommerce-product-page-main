import { useState } from "react";
import { nanoid } from "nanoid";

import { Wrapper, MainImg, MiniImg } from "./Gallery.styles";

export default function Gallery(props) {
	const [mainImage, setMainImage] = useState(props.productImages[0].image);
	const [selectedImage, setSelectedImage] = useState(
		props.productImages[0].id
	);

	function handleSetMainImage(event) {
		let id = event.currentTarget.id;
		let Img = props.productImages[id].image;
		setMainImage(Img);
		setSelectedImage(id);
	}

	let ImageGrid = props.productImages.map((image) => {
		let isSelected = parseInt(image.id) === parseInt(selectedImage);
		return (
			<MiniImg
				key={nanoid()}
				id={image.id}
				isSelected={isSelected}
				onClick={(event) => handleSetMainImage(event)}
			>
				<img alt="product" src={image.thumbnail} />
			</MiniImg>
		);
	});

	return (
		<Wrapper>
			<MainImg>
				<img alt="product" src={mainImage} />
			</MainImg>

			{ImageGrid}
		</Wrapper>
	);
}
