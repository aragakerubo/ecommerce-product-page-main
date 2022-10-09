import React, { useState, useContext, createContext } from "react";

import { Wrapper } from "./ProductPage.styles";
import Gallery from "../../components/Gallery";
import ProductDescription from "../../components/ProductDescription";
import { data } from "../../data";
import { CartContext } from "../../context";
import { nanoid } from "nanoid";

export const CounterContext = createContext();

export default function ProductPage() {
  const [counter, setCounter] = useState(0);
  const [, setCartItems] = useContext(CartContext);
  let cursorType = counter === 0 ? "not-allowed" : "pointer";

  function handleButtonClick(currentPrice, productName, thumbnail, itemId) {
    if (parseInt(counter) > 0) {
      let newQuantity = counter;

      setCartItems((prevState) => {
        let TotalItems = 0;
        let CartItems = [];
        let itemExistsIndex = prevState.CartItems.findIndex(
          (item) => item.itemId === itemId
        );

        if (itemExistsIndex >= 0) {
          CartItems = prevState.CartItems.map((item, index) => {
            const itemObj = Object.assign({}, item);
            if (index === itemExistsIndex) {
              TotalItems = prevState.TotalItems + parseInt(newQuantity) - parseInt(itemObj.quantity);
              itemObj.quantity =  newQuantity;
            }

            return itemObj;
          });
        } else {
          TotalItems = prevState.TotalItems + parseInt(newQuantity);
          const newItem = {
            itemId: itemId,
            orderId: nanoid(),
            quantity: newQuantity,
            price: currentPrice,
            productName: productName,
            thumbnail: thumbnail,
          };
          CartItems = [...prevState.CartItems, newItem];
        }
        const newCart = {
          TotalItems,
          CartItems,
        };

        return newCart;
      });
    }
    // console.log(cartItems);
  }

  return (
    <CounterContext.Provider value={[counter, setCounter]}>
      <Wrapper>
        <Gallery productImages={data.Products[0].Images} />
        <ProductDescription
          productInfo={data.Products[0].ProductInfo}
          productThumbnail={data.Products[0].Images[0].thumbnail}
          productId={data.Products[0].ItemId}
          handleButtonClick={handleButtonClick}
          cursorType={cursorType}
        />
      </Wrapper>
    </CounterContext.Provider>
  );
}
