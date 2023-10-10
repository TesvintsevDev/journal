/* eslint-env node */

module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended'
	],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true }
		],
		'semi': ['error', 'always', { 'omitLastInOneLineBlock': false}],
		'comma-dangle': ['error', 'never'],
		quotes: ['error', 'single'],
		'react/prop-types': [0],
		'indent': ['error', 'tab']
	}
};


// - /* eslint-env node */: указывает, что код будет выполняться в среде Node.js. 

// - module.exports = { ... }: экспортирует объект, который содержит настройки ESLint.

// - env: { browser: true, es2020: true }: определяет окружение, в котором запускается код - в данном случае браузер поддерживающий ES2020.

// - extends: [...]: определяет список настроек (конфигураций), которые следует использовать. В данном случае используются следующие конфигурации:
//   - 'eslint:recommended': рекомендуемые настройки ESLint.
//   - 'plugin:react/recommended': настройки для работы с React.
//   - 'plugin:react/jsx-runtime': настройки для поддержки JSX.
//   - 'plugin:react-hooks/recommended': настройки для поддержки хуков React.

// - parserOptions: { ecmaVersion: 'latest', sourceType: 'module' }: определяет параметры парсера, используемого для анализа кода. В данном случае указана последняя версия ECMAScript и тип модуля.

// - settings: { react: { version: '18.2' } }: содержит настройки для плагина "react". В данном случае указана версия использованного React.

// - plugins: ['react-refresh']: определяет список плагинов, которые должны быть использованы ESLint. В данном случае указан только плагин "react-refresh".

// - rules: { ... }: определяет правила проверки и форматирования кода. Каждое правило указывает тип ошибки или предупреждения, а также дополнительные параметры. В данном случае указаны следующие правила:
//   - 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]: предупреждение будет выдано, если экспортируются элементы, отличные от компонентов React; однако разрешается экспортировать константы.
//   - 'semi': ['error', 'always', { 'omitLastInOneLineBlock': false}]: требуется использование точки с запятой везде, кроме однострочных блоков, где необходима.
//   - 'comma-dangle': ['error', 'never']: запятые в конце списка элементов запрещены.
//   - quotes: ['error', 'single']: требуется использование одиночных кавычек для строк.
//   - 'react/prop-types': [0]: отключается проверка на наличие проп тайпов в компонентах React.
//   - 'indent': ['error', 'tab']: требуется использование табуляции для отступов.
