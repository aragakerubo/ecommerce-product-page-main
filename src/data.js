import Img1 from "./images/image-product-1.jpg";
import Img2 from "./images/image-product-2.jpg";
import Img3 from "./images/image-product-3.jpg";
import Img4 from "./images/image-product-4.jpg";
import Img1Thumb from "./images/image-product-1-thumbnail.jpg";
import Img2Thumb from "./images/image-product-2-thumbnail.jpg";
import Img3Thumb from "./images/image-product-3-thumbnail.jpg";
import Img4Thumb from "./images/image-product-4-thumbnail.jpg";
import { nanoid } from "nanoid";

export const data = {
	Products: [
		{
			ItemId: nanoid(),
			ProductInfo: {
				BrandName: "Sneaker Company",
				ProductName: "Fall Limited Edition Sneakers",
				ProductDescription:
					"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
				Price: { OriginalPrice: "250", Discount: "50" },
			},
			Images: [
				{
					id: 0,
					image: Img1,
					thumbnail: Img1Thumb,
				},
				{
					id: 1,
					image: Img2,
					thumbnail: Img2Thumb,
				},
				{
					id: 2,
					image: Img3,
					thumbnail: Img3Thumb,
				},
				{
					id: 3,
					image: Img4,
					thumbnail: Img4Thumb,
				},
			],
		},
	],
};
