function isFirstLetterUpperCase(str) {
	regexp = /^[A-Z]/;
	if (regexp.test(str)) {
		console.log("String's first character is uppercase");
		return true;
	} else {
		console.log("String's first character is not uppercase");
		return false;
	}
}
const testCases = ['Nguyen van Nam', 'NGUYEN VAN NAM', 'nguyen van Nam'];

function startsWithCapitalTest(arr) {
	for (let item of arr)
	isFirstLetterUpperCase(item);
}

startsWithCapitalTest(testCases);
