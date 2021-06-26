import styled, { css } from 'styled-components';

type ContainerProps = {
	answered: boolean;
	highlighted: boolean;
};

export const Container = styled.div<ContainerProps>`
	background: ${({ theme }) => theme.colors.backgroundLight};
	border-radius: 8px;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
	padding: 24px;

	& + & {
		margin-top: 8px;
	}

	${({ highlighted }) =>
		highlighted &&
		css`
			background: ${({ theme }) =>
				theme.title === 'light'
					? theme.colors.primaryUltraLight
					: theme.colors.primaryUltraDark};
			border: 1px solid ${({ theme }) => theme.colors.primary};

			footer .user-info span {
				color: ${({ theme }) => theme.colors.textPrimary};
			}
		`}

	${({ answered }) =>
		answered &&
		css`
			background: ${({ theme }) =>
				theme.title === 'light'
					? theme.colors.backgroundDark
					: theme.colors.border};
		`}

	p {
		color: ${({ theme }) => theme.colors.textPrimary};
	}

	@media (max-width: 375px) {
		font-size: 16px;
	}
`;

export const Footer = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 24px;

	@media (max-width: 375px) {
		justify-content: flex-end;
	}

	> div {
		display: flex;
		gap: 16px;
	}

	button {
		border: 0;
		background: transparent;
		cursor: pointer;
		transition: filter 0.2s;

		&.like-button {
			display: flex;
			align-items: flex-end;
			color: ${({ theme }) => theme.colors.textSecondary};
			gap: 8px;

			&.liked {
				color: ${({ theme }) =>
					theme.title === 'light'
						? theme.colors.primary
						: theme.colors.primaryUltraLight};

				svg path {
					stroke: ${({ theme }) =>
						theme.title === 'light'
							? theme.colors.primary
							: theme.colors.primaryUltraLight};
				}
			}
		}

		&:hover {
			filter: brightness(0.7);
		}
	}
`;

type UserInfoProps = {
	medium?: boolean;
	small?: boolean;
};

export const UserInfo = styled.div<UserInfoProps>`
	display: flex;
	align-items: center;

	${(props) =>
		props.medium &&
		css`
			@media (max-width: 375px) {
				display: none !important;
			}
		`}

	${(props) =>
		props.small &&
		css`
			@media (min-width: 375px) {
				display: none !important;
			}

			margin-bottom: 20px;
		`}


	img {
		width: 32px;
		height: 32px;
		border-radius: 50%;
	}

	span {
		margin-left: 8px;
		color: ${({ theme }) => theme.colors.textSecondary};
		font-size: 14px;
	}
`;
