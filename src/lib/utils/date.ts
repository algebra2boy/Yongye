export function convertDateToString(date: Date) {
	return date.getMonth() <= 9
		? "0" + date.getMonth() + '/' + date.getFullYear()
		: date.getMonth() + '/' + date.getFullYear()
}
