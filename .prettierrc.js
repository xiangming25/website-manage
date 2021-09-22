const fabric = require('@umijs/fabric')

module.exports = {
	...fabric.prettier,
	printWidth: 120, //单行长度
	tabWidth: 2, //缩进长度
	useTabs: true,
	semi: false, //句末使用分号
	singleQuote: true, //使用单引号
	quoteProps: 'as-needed', //仅在必需时为对象的key添加引号
	jsxSingleQuote: true, // jsx中使用单引号
	bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
	endOfLine: 'lf', //结束行形式
}
