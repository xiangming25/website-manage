module.exports = {
	extends: [require.resolve('@umijs/fabric/dist/eslint')],
	globals: {
		page: true,
		REACT_APP_ENV: true,
	},
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'no-restricted-globals': 'off',
		'no-console': 'warn',
		'no-param-reassign': 'error',
		'max-lines': [1, 500],
		'no-trailing-spaces': 'error', // 不允许有多余的空格
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
		indent: ['error', 'tab'],
		semi: ['error', 'never'], // 末尾有分号
	},
}
