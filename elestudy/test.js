async function one() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('11111111');
			resolve('1 finished');
		}, 300);
	});
}
async function two() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('22222');
			resolve('2 finished');
		}, 300);
	});
}

async function go() {
	let oner = await one();
	console.log(typeof oner);

	console.log(oner);

	let twor = await two();
	console.log(twor);
}
// one().then(two())
go();
