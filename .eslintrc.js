module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'react-app',
		'plugin:react/recommended',
		'prettier',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks'],
	rules: {
		'no-console': 'warn',
		'no-unused-vars': [
			'warn',
			{
				args: 'after-used',
				ignoreRestSiblings: false,
				argsIgnorePattern: '^_$',
			},
		],
		'prettier/prettier': [
			'error',
			{
				printWidth: 100,
				trailingComma: 'all',
				tabWidth: 2,
				semi: false,
				useTabs: true,
				endOfLine: 'auto',
			},
		],
		'import/order': ['warn', { 'newlines-between': 'always' }],
		'react-hooks/rules-of-hooks': 'warn',
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-sort-props': [
			'warn',
			{
				callbacksLast: true,
				shorthandFirst: true,
				noSortAlphabetically: false,
				reservedFirst: true,
			},
		],
	},
}
