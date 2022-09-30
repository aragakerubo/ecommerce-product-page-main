import React, { useContext } from "react";

import { Wrapper, Button, Input } from "./Counter.styles";
import { CounterContext } from "../../pages/ProductPage";
import plusSign from "../../images/icon-plus.svg";
import minusSign from "../../images/icon-minus.svg";

export default function Counter() {
	const [counter, setCounter] = useContext(CounterContext);

	function handleSubtraction() {
		setCounter((prevState) =>
			parseInt(prevState) === 0 ? prevState : prevState - 1
		);
	}

	function handleAddition() {
		setCounter((prevState) => prevState + 1);
	}

	function handleChange(event) {
		setCounter(event.target.value);
	}

	return (
		<Wrapper>
			<Button type="submit" onClick={handleSubtraction}>
				<img alt="add-item" src={minusSign} />
			</Button>

			<Input
				placeholder={counter}
				value={counter}
				onChange={(event) => handleChange(event)}
				readOnly
			/>
			<Button type="submit" onClick={handleAddition}>
				<img alt="remove-item" src={plusSign} />
			</Button>
		</Wrapper>
	);
}
