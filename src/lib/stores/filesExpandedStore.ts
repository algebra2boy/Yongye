import { writable } from 'svelte/store';

export const filesExpandedStore = writable<boolean>(false);