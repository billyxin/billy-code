const fs = require('fs');
const path = require('path');
const { get_files_rec, write_obf } = require('./util/files_handler.js');

// 获得所有JS清单
const rewrite_root = path.resolve('./dist/win-unpacked/resources/app');
const rewrite_dirs = [
	path.join(rewrite_root, 'win'),
	path.join(rewrite_root, 'lib'),
	path.join(rewrite_root, 'util'),
	path.join(rewrite_root, 'run'),
];
const copyrights_files = [
	path.resolve('./dist/win-unpacked/LICENSES.chromium.html'),
	path.resolve('./dist/win-unpacked/LICENSE.electron.txt'),
	path.resolve('./dist/builder-effective-config.yaml'),
];

function rewrite_files() {
	return new Promise((res, rej) => {
		let tasks = [];
		console.log('------------ all starts.--------------');
		console.log('start: rewrite js files.');
		// 覆盖写入obf
		rewrite_dirs.forEach((dir) => {
			console.log('searching dir: ' + dir);
			let files = get_files_rec(dir, '.js');
			if (files.length > 0) {
				console.log('files in dir: ' + dir);
				console.dir(files);
				files.forEach((item) => {
					tasks.push(write_obf(item));
				});
			}
		});

		//删除版权
		copyrights_files.forEach((item) => {
			tasks.push(
				new Promise((r, j) => {
					fs.unlink(item, (err) => {
						if (err) console.log(err);
						else console.log('file deleted: ' + item);
						r();
					});
				})
			);
		});

		Promise.all(tasks).then(
			(arr) => {
				console.log('finished: all obf files.');
				res();
			},
			(err) => {
				rej(err);
			}
		);
	});
}

function rename_wrap_dir() {
	return new Promise((res, rej) => {
		console.log('start: rename wrap dir.');
		// 文件夹重命名
		let package = fs.readFileSync('./package.json').toString();
		package = JSON.parse(package);
		const currPath = path.resolve('./dist/win-unpacked');
		const newPath = path.resolve('./dist/' + package.name + '_' + package.version);
		fs.rename(currPath, newPath, (err) => {
			if (err) console.log(err);
			else {
				console.log('dir name: ' + currPath);
				console.log('dir renamed: ' + newPath);
				console.log('finished: renamed wrap dir.');
				console.log('------------ all finised.--------------');
				res();
			}
		});
	});
}

exports.default = async function () {
	await rewrite_files();
	await rename_wrap_dir();
};
