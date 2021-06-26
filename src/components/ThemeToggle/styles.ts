import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	z-index: 10;
	top: 16px;
	right: 16px;

	@media (max-width: 1400px) {
		position: fixed;
		top: unset;
		bottom: 0;
	}
`;
