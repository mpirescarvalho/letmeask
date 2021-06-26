import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: stretch;
	height: 100vh;
`;

export const Aside = styled.aside`
	flex: 6;

	background: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.textPrimaryInColor};

	display: flex;
	flex-direction: column;
	justify-content: center;

	padding: 120px 80px;

	img {
		max-width: 320px;
	}

	strong {
		font: 700 36px 'Poppins', sans-serif;
		line-height: 42px;
		margin-top: 16px;
	}

	p {
		font-size: 24px;
		line-height: 32px;
		margin-top: 16px;
		color: ${({ theme }) => theme.colors.textSecondaryInColor};
	}
`;

export const Main = styled.main`
	flex: 8;

	padding: 0 32px;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 320px;
	align-items: stretch;
	text-align: center;
`;
