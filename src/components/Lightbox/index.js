import React, { useState } from "react";
import { nanoid } from "nanoid";

import {
	Wrapper,
	Container,
	CloseButton,
	Section,
	MainImg,
	MiniImg,
	MiniImgSection,
	PreviousButton,
	NextButton,
} from "./Lightbox.styles";
import closeIcon from "../../images/icon-close.svg";
import previousIcon from "../../images/icon-previous.svg";
import nextIcon from "../../images/icon-next.svg";

export default function Lightbox(props) {
	const selectedImageId = props.mainImageLightbox;
	const [mainImage, setMainImage] = useState(
		props.productImages[selectedImageId].image
	);
	const [selectedImage, setSelectedImage] = useState(
		props.productImages[selectedImageId].id
	);

	function handleSetMainImage(event) {
		let id = event.currentTarget.id;
		let Img = props.productImages[id].image;
		setMainImage(Img);
		setSelectedImage(id);
	}

	function handleLightbox() {
		props.setDisplayLightbox(false);
	}

	function handlePrevious() {
		let startingPoint = parseInt(selectedImage);

		if (startingPoint > 0) {
			setSelectedImage((prevState) => {
				let newId = parseInt(prevState) - 1;
				let Img = props.productImages[newId].image;
				setMainImage(Img);

				return newId;
			});
		}
	}

	function handleNext() {
		let gridLength = parseInt(props.productImages.length);
		let startingPoint = parseInt(selectedImage) + 1;

		if (startingPoint < gridLength) {
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
			<Container>
				<CloseButton src={closeIcon} onClick={handleLightbox} />
			</Container>
			<Section>
				<PreviousButton onClick={handlePrevious}>
					<img alt="Prevoius" src={previousIcon} />
				</PreviousButton>
				<MainImg>
					<img alt="product" src={mainImage} />
				</MainImg>
				<NextButton onClick={handleNext}>
					<img alt="Next" src={nextIcon} />
				</NextButton>
			</Section>
			<MiniImgSection>{ImageGrid}</MiniImgSection>
		</Wrapper>
	);
}
