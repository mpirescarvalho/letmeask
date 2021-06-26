import DarkModeToggle from 'react-dark-mode-toggle';

import { useTheme } from '../../hooks/useTheme';

import { Container } from './styles';

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<Container>
			<DarkModeToggle
				onChange={toggleTheme}
				checked={theme.title === 'dark'}
				size={65}
			/>
		</Container>
	);
}
