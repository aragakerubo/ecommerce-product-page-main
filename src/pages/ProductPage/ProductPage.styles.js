import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 3rem 2rem;
	gap: 8rem;

	@media (max-width: 550px) {
		padding: 0 0 3rem 0;
		gap: 1rem;
	}
`;
