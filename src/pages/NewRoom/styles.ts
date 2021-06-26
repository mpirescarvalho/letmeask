import styled from 'styled-components';

export const Logo = styled.img`
	align-self: center;
`;

export const Title = styled.h2`
	font-size: 24px;
	margin: 64px 0 24px;
	font-family: 'Poppins', sans-serif;
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

export const NewRoomText = styled.p`
	font-size: 14px;
	color: ${({ theme }) => theme.colors.textSecondary};
	margin-top: 16px;

	a {
		color: ${({ theme }) => theme.colors.accent};
	}
`;
