const { promises } = require('dns');
const fs = require('fs');
const path = require('path');
const { get_obf_code } = require('./obf.js');

function get_files_rec(root, ext) {
	let results = [];
	if (fs.existsSync(root)) {
		let list = fs.readdirSync(root);
		list.forEach((file) => {
			file = path.resolve(root, file);
			let stat = fs.statSync(file);
			if (stat && stat.isDirectory()) {
				results = results.concat(get_files_rec(file, ext));
			} else {
				if (path.extname(file) === ext) {
					results.push(file);
				}
			}
		});
	}
	return results;
}
module.exports.get_files_rec = get_files_rec;

function write_obf(file_path) {
	return new Promise((res, rej) => {
		let str_ori = fs.readFileSync(file_path).toString();
		let len = str_ori.length;
		if (len > 10) {
			console.log(`tobe obf file ready: (length: ${len}) ${file_path}`);
			let str_obf = get_obf_code(str_ori);
			fs.writeFile(file_path, str_obf, (err) => {
				if (err) console.log(err);
				else {
					console.log('obf finished -> ' + file_path);
					res();
				}
			});
		} else {
			res();
		}
	});
}
module.exports.write_obf = write_obf;
