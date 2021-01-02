const {spawn}= require('child_process');
const { stringify } = require('querystring');
let run = spawn('./dist/test.exe', ['aaa', 'bbb']);
run.stdout.on('data', (data) => {
	console.log('get data');
	// console.log(data.toString());
	console.log(data.toString())
	
	
})
run.on('close', (data) => {
	console.log('close')
  })