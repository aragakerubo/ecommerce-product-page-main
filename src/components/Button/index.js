import React from "react";

import { Wrapper } from "./Button.styles";

export default function Button(props) {
  return (
    <Wrapper
      type="button"
      onClick={props.handleButtonClick}
      cursorType={props.cursorType}
    >
      {props.imgUrl && <img alt="add-to-cart" src={props.imgUrl} />}
      {props.text}
    </Wrapper>
  );
}
