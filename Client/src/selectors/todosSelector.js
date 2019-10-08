const sortByFirstLetter = (data, pivotTerm) => {
	if(data.length <= 1) return data;
	const left = [];
	const right = [];
	const pivot = data[data.length-1];
	const pivotComparison = pivot[pivotTerm].toLowerCase().charCodeAt(0);
	for (let i = 0; i < data.length-1; i++) {
		const currValue = data[i][pivotTerm].toLowerCase().charCodeAt(0);
		if (currValue <= pivotComparison) {
			left.push(data[i]);
		} else {
			right.push(data[i]);
		}
	}
	const sortedLeft = sortByFirstLetter(left, pivotTerm);
	const sortedRight = sortByFirstLetter(right, pivotTerm);
	return [...sortedLeft, pivot, ...sortedRight];
};

export const sortByTitle = state => sortByFirstLetter(state, "title");
export const sortByDescription = state => sortByFirstLetter(state, "description");
