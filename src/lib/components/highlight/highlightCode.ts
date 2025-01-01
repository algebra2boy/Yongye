// https://highlightjs.org/examples
import {
	typescript,
	python,
	c,
	cpp,
	java,
	javascript,
	r,
	sql,
	swift,
	graphql,
	go,
	json,
	bash,
	dockerfile
} from 'svelte-highlight/languages';

import {
	github,
	githubDarkDimmed,
	githubDark,
	tokyoNightDark,
	xcode
} from 'svelte-highlight/styles';

export type Language =
	| 'typescript'
	| 'python'
	| 'c'
	| 'cpp'
	| 'java'
	| 'javascript'
	| 'r'
	| 'sql'
	| 'swift'
	| 'graphql'
	| 'go'
	| 'json'
	| 'bash'
	| 'dockerfile';

const languages = {
	typescript,
	python,
	c,
	cpp,
	java,
	javascript,
	r,
	sql,
	swift,
	graphql,
	go,
	json,
	bash,
	dockerfile
};

export type Theme = 'github' | 'githubDarkDimmed' | 'tokyoNightDark' | 'xcode' | 'githubDark';

const themes = {
	github,
	githubDarkDimmed,
	tokyoNightDark,
	xcode,
	githubDark
};

export const loadLanguage = (language: Language) => languages[language];

export const loadTheme = (theme: Theme) => themes[theme];
