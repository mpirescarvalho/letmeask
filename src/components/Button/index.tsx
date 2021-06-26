import styled from 'styled-components';

type ButtonProps = {
	isOutlined?: boolean;
};

export const Button = styled.button<ButtonProps>`
	height: 50px;
	border-radius: 8px;
	font-weight: 500;
	background: ${(props) =>
		props.isOutlined
			? props.theme.colors.textPrimaryInColor
			: props.theme.colors.primary};
	color: ${(props) =>
		props.isOutlined
			? props.theme.colors.primary
			: props.theme.colors.textPrimaryInColor};
	padding: 0 32px;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
	border: ${(props) =>
		props.isOutlined ? '1px solid ' + props.theme.colors.primary : '0'};

	transition: filter 0.2s;

	img {
		margin-right: 8px;
	}

	&:not(:disabled):hover {
		filter: brightness(0.9);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;
