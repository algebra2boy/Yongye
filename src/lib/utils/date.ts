export function convertDateToString(date: Date) {
	return date.toLocaleString('default', { month: '2-digit' }) + '/' + date.getFullYear();
}
