// https://github.com/javascript-obfuscator/javascript-obfuscator
const obf = require('javascript-obfuscator');

// High obfuscation, low performance
// Performance will 50-100% slower than without obfuscation
const obf_opt_high = {
	compact: true,
	controlFlowFlattening: true,
	controlFlowFlatteningThreshold: 1,
	deadCodeInjection: true,
	deadCodeInjectionThreshold: 1,
	debugProtection: true,
	debugProtectionInterval: true,
	disableConsoleOutput: true,
	identifierNamesGenerator: 'hexadecimal',
	log: false,
	numbersToExpressions: true,
	renameGlobals: false,
	rotateStringArray: true,
	selfDefending: true,
	shuffleStringArray: true,
	simplify: true,
	splitStrings: true,
	splitStringsChunkLength: 5,
	stringArray: true,
	stringArrayEncoding: ['rc4'],
	stringArrayIndexShift: true,
	stringArrayWrappersCount: 5,
	stringArrayWrappersChainedCalls: true,
	stringArrayWrappersParametersMaxCount: 5,
	stringArrayWrappersType: 'function',
	stringArrayThreshold: 1,
	transformObjectKeys: true,
	unicodeEscapeSequence: false,
};

// Medium obfuscation, optimal performance
// Performance will 30-35% slower than without obfuscation
const obf_opt_medium = {
	compact: true,
	controlFlowFlattening: true,
	controlFlowFlatteningThreshold: 0.75,
	deadCodeInjection: true,
	deadCodeInjectionThreshold: 0.4,
	debugProtection: false,
	debugProtectionInterval: false,
	disableConsoleOutput: true,
	identifierNamesGenerator: 'hexadecimal',
	log: false,
	numbersToExpressions: true,
	renameGlobals: false,
	rotateStringArray: true,
	selfDefending: true,
	shuffleStringArray: true,
	simplify: true,
	splitStrings: true,
	splitStringsChunkLength: 10,
	stringArray: true,
	stringArrayEncoding: ['base64'],
	stringArrayIndexShift: true,
	stringArrayWrappersCount: 2,
	stringArrayWrappersChainedCalls: true,
	stringArrayWrappersParametersMaxCount: 4,
	stringArrayWrappersType: 'function',
	stringArrayThreshold: 0.75,
	transformObjectKeys: true,
	unicodeEscapeSequence: false,
};

// Low obfuscation, High performance
// Performance will slightly slower than without obfuscation
const obf_opt_low = {
	compact: true,
	controlFlowFlattening: false,
	deadCodeInjection: false,
	debugProtection: false,
	debugProtectionInterval: false,
	disableConsoleOutput: true,
	identifierNamesGenerator: 'hexadecimal',
	log: false,
	numbersToExpressions: false,
	renameGlobals: false,
	rotateStringArray: true,
	selfDefending: true,
	shuffleStringArray: true,
	simplify: true,
	splitStrings: false,
	stringArray: true,
	stringArrayEncoding: [],
	stringArrayIndexShift: true,
	stringArrayWrappersCount: 1,
	stringArrayWrappersChainedCalls: true,
	stringArrayWrappersParametersMaxCount: 2,
	stringArrayWrappersType: 'variable',
	stringArrayThreshold: 0.75,
	unicodeEscapeSequence: false,
};

let obf_opt_my = obf_opt_low;
obf_opt_my.selfDefending = false;
obf_opt_my.splitStrings = true;
obf_opt_my.splitStringsChunkLength = 10;
obf_opt_my.stringArrayEncoding = ['base64'];
obf_opt_my.stringArrayWrappersCount = 2;
obf_opt_my.stringArrayWrappersParametersMaxCount = 4;
obf_opt_my.stringArrayWrappersType = 'function';
obf_opt_my.controlFlowFlattening = false;
// obf_opt_my.target = 'node';

function get_obf_code(str) {
	return obf.obfuscate(str, obf_opt_my).getObfuscatedCode();
}

module.exports.get_obf_code = get_obf_code;
