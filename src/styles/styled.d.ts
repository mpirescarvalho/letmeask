import 'styled-componets';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;

		colors: {
			primary: string;
			primaryUltraDark: string;
			primaryUltraLight: string;

			accent: string;

			border: string;
			borderSecundary: string;

			background: string;
			backgroundLight: string;
			backgroundDark: string;

			textPrimary: string;
			textSecondary: string;
			textPrimaryInColor: string;
			textSecondaryInColor: string;

			white: string;
			googleColor: string;
		};
	}
}
