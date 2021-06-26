import styled from 'styled-components';

export const Container = styled.button`
	height: 40px;
	border-radius: 8px;
	overflow: hidden;

	background: ${({ theme }) => theme.colors.textPrimaryInColor};
	border: 1px solid ${({ theme }) => theme.colors.primary};
	cursor: pointer;

	display: flex;

	div {
		background: ${({ theme }) => theme.colors.primary};
		padding: 0 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		align-self: stretch;
	}

	span {
		display: block;
		align-self: center;
		flex: 1;
		padding: 0 24px 0 24px;
		font-size: 14px;
		font-weight: 500;
	}
`;
