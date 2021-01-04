window.$ = window.jquery = window.jQuery = require('jquery');
const { remote, ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');
$(() => {
	console.log('--------------from index.html--------');

	ipcRenderer.on('mode', (event, msg) => {
		$('#home3').text(msg);
	});

	// json package name
	let data = fs.readFileSync(path.join(__dirname, './../package.json'));
	data = JSON.parse(data.toString())['name'];

	//path
	let cwd = process.cwd();
	let real_path = process.env.PORTABLE_EXECUTABLE_DIR;

	$('#jsonname').val(data);

	$('#real').text(real_path);
	$('#realarea').val(real_path);
	$('#cwd').text(cwd);
	$('#home2').text(process.env.NODE_ENV);

	if (process.env.NODE_ENV === 'dev') {
		$('#home').text('dev');
	} else if (process.env.NODE_ENV === 'product') {
		$('#home').text('product');
	} else {
		alert('not any env');
		alert(process.env.NODE_ENV);
	}

	$('h1').text('这里h1')
});
