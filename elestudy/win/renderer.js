window.$ = window.jquery = window.jQuery = require('jquery');
const { remote, ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');

let root_path, app_path;

if (process.env.NODE_ENV == 'product') {
	root_path = process.cwd();
	app_path = path.resolve(root_path, './resources/app/');
} else {
	root_path = path.resolve(__dirname, './../');
	app_path = root_path;
}

$(() => {
	console.log('--------------from index.html--------');

	$('#mypic').attr('src', app_path + '/images/a.jpg');

	// json package name
	let data = fs.readFileSync(path.join(__dirname, './../package.json'));
	data = JSON.parse(data.toString())['name'];

	//path
	let cwd = process.cwd();
	let real_path = process.env.PORTABLE_EXECUTABLE_DIR;

	$('#jsonname').val(data);

	$('#home').text(process.env.NODE_ENV);

	$('#cwd').text(cwd);
	$('#port').text(real_path);
	$('#portarea').val(real_path);

	$('h1').text('这里h1111');
});
