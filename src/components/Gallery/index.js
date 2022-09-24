import { useState } from "react";
import { nanoid } from "nanoid";

import { Wrapper, MainImg, MiniImg } from "./Gallery.styles";
import Img1 from "../../images/image-product-1.jpg";
import Img2 from "../../images/image-product-2.jpg";
import Img3 from "../../images/image-product-3.jpg";
import Img4 from "../../images/image-product-4.jpg";

const Images = [
	{
		id: 0,
		image: Img1,
	},
	{
		id: 1,
		image: Img2,
	},
	{
		id: 2,
		image: Img3,
	},
	{
		id: 3,
		image: Img4,
	},
];

export default function Gallery() {
	const [mainImage, setMainImage] = useState(Images[0].image);
	const [selectedImage, setSelectedImage] = useState(Images[0].id);

	function handleSetMainImage(event) {
		let id = event.currentTarget.id;
		let Img = Images[id].image;
		setMainImage(Img);
		setSelectedImage(id);
	}

	let ImageGrid = Images.map((image) => {
		let isSelected = parseInt(image.id) === parseInt(selectedImage);
		return (
			<MiniImg
				key={nanoid()}
				id={image.id}
				isSelected={isSelected}
				onClick={(event) => handleSetMainImage(event)}
			>
				<img alt="product" src={image.image} />
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
