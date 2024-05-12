/*
 * code.ts
 * A simple function to wrap text in code tags.
 */
export function code(code: string) {
	return `<code class="bg-gray-100 p-1 rounded">${code}</code>`;
}
