const { spawn } = require('child_process');
const iconv = require('iconv-lite');
let run = spawn('py', ['test.py', 'aaa', 'bbb']);
run.stdout.on('data', (data) => {
	data = iconv.decode(data, 'cp936');
	console.log(data.toString());
});
run.on('close', (data) => {
	console.log('close');
});
