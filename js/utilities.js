const shuffleArray = function (arr) {
	return arr.sort((a,b) => Math.random() - 0.5);
};

export {shuffleArray};