export function device(navigator) {
	if (/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
		return 1;
	}
	return 0;
}
