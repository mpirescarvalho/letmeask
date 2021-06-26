import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: stretch;
	height: 100vh;

	@media (max-width: 768px) {
		height: 200vh;
		flex-direction: column;
	}
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

	@media (max-width: 768px) {
		flex: 1;
		padding: 0 45px;
		align-items: center;
		justify-content: center;
		text-align: center;

		img {
			margin-bottom: 32px;
		}
	}

	@media (max-width: 425px) {
		strong {
			font-size: 30px;
			line-height: 36px;
		}

		p {
			font-size: 20px;
			line-height: 26px;
		}
	}

	@media (max-width: 375px) {
		img {
			max-height: 280px;
		}

		strong {
			font-size: 24px;
			line-height: 28px;
		}

		p {
			font-size: 18px;
			line-height: 22px;
		}
	}

	@media (max-width: 320px) {
		img {
			max-height: 220px;
		}
	}
`;

export const Main = styled.main`
	flex: 8;

	padding: 0 32px;

	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 768px) {
		flex: 1;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 320px;
	align-items: stretch;
	text-align: center;

	@media (max-width: 768px) {
		height: 100vh;
		justify-content: center;
	}
`;
