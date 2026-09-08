import * as React from 'react';

import { Button } from './ui/button';

export function ThemeToggle() {
	const [mounted, setMounted] = React.useState(false);
	const [theme, setTheme] = React.useState<'light' | 'dark'>('dark');

	React.useEffect(() => {
		setMounted(true);
		const isDark = document.documentElement.classList.contains('dark');
		setTheme(isDark ? 'dark' : 'light');
	}, []);

	const toggleTheme = () => {
		const root = document.documentElement;
		const next = root.classList.contains('dark') ? 'light' : 'dark';
		root.classList.toggle('dark', next === 'dark');
		localStorage.setItem('theme', next);
		setTheme(next);
	};

	if (!mounted) {
		return (
			<Button variant="outline" size="sm" aria-label="Toggle color theme">
				Theme
			</Button>
		);
	}

	return (
		<Button
			variant="outline"
			size="sm"
			onClick={toggleTheme}
			aria-pressed={theme === 'dark'}
		>
			{theme === 'dark' ? 'Light mode' : 'Dark mode'}
		</Button>
	);
}
