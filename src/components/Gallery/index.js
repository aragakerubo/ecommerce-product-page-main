import React, { useState } from "react";
import { nanoid } from "nanoid";

import {
	Wrapper,
	MainImg,
	MiniImg,
	PreviousButton,
	NextButton,
} from "./Gallery.styles";
import previousIcon from "../../images/icon-previous.svg";
import nextIcon from "../../images/icon-next.svg";

export default function Gallery(props) {
	const [mainImage, setMainImage] = useState(props.productImages[0].image);
	const [selectedImage, setSelectedImage] = useState(
		props.productImages[0].id
	);

	let displayNextButton = selectedImage < props.productImages.length - 1;
	let displayPrevButton = parseInt(selectedImage) > 0;

	function handleSetMainImage(event) {
		let id = event.currentTarget.id;
		let Img = props.productImages[id].image;
		setMainImage(Img);
		setSelectedImage(id);
	}

	function handleLightbox() {
		props.setDisplayLightbox(true);
		props.setMainImageLightbox(selectedImage);
	}

	function handlePrevious() {
		if (displayPrevButton) {
			setSelectedImage((prevState) => {
				let newId = parseInt(prevState) - 1;
				let Img = props.productImages[newId].image;
				setMainImage(Img);

				return newId;
			});
		}
	}

	function handleNext() {
		if (displayNextButton) {
			setSelectedImage((prevState) => {
				let newId = parseInt(prevState) + 1;
				let Img = props.productImages[newId].image;
				setMainImage(Img);

				return newId;
			});
		}
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
				<PreviousButton
					onClick={handlePrevious}
					displayPrevButton={displayPrevButton}
				>
					<img alt="Previous" src={previousIcon} />
				</PreviousButton>
				<img alt="product" src={mainImage} onClick={handleLightbox} />
				<NextButton
					onClick={handleNext}
					displayNextButton={displayNextButton}
				>
					<img alt="Next" src={nextIcon} />
				</NextButton>
			</MainImg>

			{ImageGrid}
		</Wrapper>
	);
}
