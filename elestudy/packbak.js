{
	"name": "elestudy",
	"version": "1.0.0",
	"description": "des",
	"main": "./win/main.js",
	"keywords": [],
	"author": "",
	"license": "ISC",
	"devDependencies": {
		"electron": "^11.1.1",
		"electron-builder": "^22.9.1"
	},
	"dependencies": {
		"jquery": "^3.5.1"
	},
	"build": {
		"productName": "elestudy",
		"appId": "com.elestudy.test",
		"win": {
			"target": [
				"portable"
			]
		},
		"extraFiles": [
			{
				"from": "./dict.txt2",
				"to": "./dict.txt"
			}
		],
		"extraResources": [
			{
				"from": "./images",
				"to": "./images"
			},
			{
				"from": "./",
				"to": "./",
				"filter": ["dict.txt"]
			}
		],
		"files": [
			"**/*",
			"!**/node_modules/*/{CHANGELOG.md,README.md,README,readme.md,readme}",
			"!**/node_modules/*/{test,__tests__,tests,powered-test,example,examples}",
			"!**/node_modules/*.d.ts",
			"!**/node_modules/.bin",
			"!**/*.{iml,o,hprof,orig,pyc,pyo,rbc,swp,csproj,sln,xproj}",
			"!.editorconfig",
			"!**/._*",
			"!**/{.DS_Store,.git,.hg,.svn,CVS,RCS,SCCS,.gitignore,.gitattributes}",
			"!**/{__pycache__,thumbs.db,.flowconfig,.idea,.vs,.nyc_output}",
			"!**/{appveyor.yml,.travis.yml,circle.yml}",
			"!**/{npm-debug.log,yarn.lock,.yarn-integrity,.yarn-metadata.json}",
			"!**/*.jpg",
			"!./doc/*"
		]
	},
	"scripts": {
		"start": "set NODE_ENV=product&&electron ./win/main.js",
		"dev": "set NODE_ENV=dev&&electron ./win/main.js",
		"build": "set NODE_ENV=product&&electron-builder --win --x64"
	}
}
