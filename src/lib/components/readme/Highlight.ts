import { typescript, python } from 'svelte-highlight/languages';

export type Language = "typescript" | "python"

const languages = {
    typescript,
    python
};

export const loadLanguage = (language: Language) => languages[language];

