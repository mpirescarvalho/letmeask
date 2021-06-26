import styled from 'styled-components';

export const Logo = styled.img`
	align-self: center;
`;

export const Form = styled.form`
	input {
		height: 50px;
		border-radius: 8px;
		padding: 0 16px;
		background: ${({ theme }) => theme.colors.white};
		border: 1px solid ${({ theme }) => theme.colors.border};
	}

	button {
		margin-top: 16px;
	}

	button,
	input {
		width: 100%;
	}
`;

export const CreateRoomButton = styled.button`
	margin-top: 64px;
	height: 50px;
	border-radius: 8px;
	font-weight: 500;
	background: ${({ theme }) => theme.colors.googleColor};
	color: ${({ theme }) => theme.colors.textPrimaryInColor};

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
	border: 0;

	transition: filter 0.2s;

	img {
		margin-right: 8px;
	}

	&:hover {
		filter: brightness(0.9);
	}
`;

export const Separator = styled.div`
	font-size: 14px;
	color: ${({ theme }) => theme.colors.border};

	margin: 32px 0;
	display: flex;
	align-items: center;

	&::before {
		content: '';
		flex: 1;
		height: 1px;
		background: ${({ theme }) => theme.colors.border};
		margin-right: 16px;
	}

	&::after {
		content: '';
		flex: 1;
		height: 1px;
		background: ${({ theme }) => theme.colors.border};
		margin-left: 16px;
	}
`;
