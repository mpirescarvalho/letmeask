import { createContext, ReactNode, useCallback, useMemo } from 'react';
import {
	ThemeProvider as StyledThemeProvider,
	DefaultTheme,
} from 'styled-components';

import usePersistedState from '../hooks/usePersistedState';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

type ThemeContextType = {
	theme: DefaultTheme;
	toggleTheme: () => void;
};

type ThemeProviderProps = {
	children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = usePersistedState('theme', 'light');

	const toggleTheme = useCallback(() => {
		setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
	}, [setTheme]);

	const themeObj = useMemo<DefaultTheme>(
		() => (theme === 'light' ? light : dark),
		[theme]
	);

	return (
		<ThemeContext.Provider value={{ theme: themeObj, toggleTheme }}>
			<StyledThemeProvider theme={themeObj}>{children}</StyledThemeProvider>
		</ThemeContext.Provider>
	);
}
