import React from "react";
import { useState } from "react";

import { Wrapper, Button, Input } from "./Counter.styles";
import plusSign from "../../images/icon-plus.svg";
import minusSign from "../../images/icon-minus.svg";

export default function Counter() {
	const [counter, setCounter] = useState(0);

	function handleSubtraction() {
		setCounter((prevState) =>
			parseInt(prevState) === 0 ? prevState : prevState - 1
		);
	}

	function handleAddition() {
		setCounter((prevState) => prevState + 1);
	}

	return (
		<Wrapper>
			<Button type="submit" onClick={handleSubtraction}>
				<img alt="add-item" src={minusSign} />
			</Button>

			<Input
				placeholder={counter}
				value={counter}
				onChange={(e) => setCounter(e.target.value)}
				readOnly
			/>
			<Button type="submit" onClick={handleAddition}>
				<img alt="remove-item" src={plusSign} />
			</Button>
		</Wrapper>
	);
}
