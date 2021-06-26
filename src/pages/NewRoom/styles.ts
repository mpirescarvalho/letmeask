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
		background: #fff;
		border: 1px solid #a8a8b3;
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
	color: #737380;
	margin-top: 16px;

	a {
		color: #e559f9;
	}
`;
