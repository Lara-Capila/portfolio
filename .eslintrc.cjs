module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:import/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:@typescript-eslint/recommended',
      'eslint-config-prettier',
    ],
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "amd": true
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      "react/function-component-definition": ["warn", {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }],
      "react/jsx-props-no-spreading": "off",
      "import/no-extraneous-dependencies": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-use-before-define": "off",
      "linebreak-style": 0,
      "jsx-a11y/label-has-associated-control": [
        2,
        {
          "assert": "htmlFor"
        }
      ],
      "import/prefer-default-export": "off",
      "import/no-anonymous-default-export": "off",
      "react-hooks/exhaustive-deps": "off",
      "no-plusplus": "off",
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "max-len": "warn",
      "react/jsx-no-useless-fragment": "off",
      "react/require-default-props": "off",
      "no-underscore-dangle": "off"
    },
};
  