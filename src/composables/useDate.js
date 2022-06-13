export function useDate() {
	const formatTime = (date) => {
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var ampm = hours >= 12 ? 'p. m.' : 'a. m.';

		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0' + minutes : minutes;

		return hours + ':' + minutes + ' ' + ampm;
	}

	return {
		formatTime,
	}
}