module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin", "simple-import-sort", "react-hooks"],
  overrides: [
    {
      files: ["frontend/**"],
      parserOptions: {
        project: ["./frontend/tsconfig.json"],
      },
      rules: {
        "react-hooks/exhaustive-deps": "error",
        "react/function-component-definition": [
          "error",
          {
            "namedComponents": "arrow-function",
            "unnamedComponents": "arrow-function"
          }
        ],
      }
    },
    {
      files: ["backend/**"],
      parserOptions: {
        project: ["./backend/tsconfig.json"],
      },
    },
  ],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/no-cycle": "off",
    "import/order": "off",
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          ["^\\u0000"],
          [
            "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
            "^@?\\w+",
            "^(?!\\.)\\w+"
          ],
          ["util"],
          ["service"],
          ["module"],
          ["config"],
          ["exception"],
          ["constant"],
          ["dto", "type", "entity"],
        ]
      }
    ],
    "simple-import-sort/exports": "error",
    "import/no-default-export": "error",
    "import/no-namespace": "error",
    "no-cond-assign": "error",
    "@typescript-eslint/consistent-type-assertions": ["error", {
      "assertionStyle": "as",
      "objectLiteralTypeAssertions": "allow"
    }],
    "func-style": "off",
    "no-restricted-syntax": [
      "error",
      "FunctionDeclaration[generator=false]:not(:has(ThisExpression))"
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        "variables": false,
        "classes": false
      }
    ],
    "curly": "error",
    "no-param-reassign": ["error", { "props": false }],
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "error",
    "prefer-destructuring": "off",
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "return" },
      {
        "blankLine": "always",
        "prev": ["const", "let", "var"],
        "next": "*"
      },
      {
        "blankLine": "any",
        "prev": ["const", "let", "var"],
        "next": ["const", "let", "var"]
      },
      { "blankLine": 'always', "prev": '*', "next": 'block' },
      { "blankLine": 'always', "prev": 'block', "next": '*' },
      { "blankLine": 'always', "prev": '*', "next": 'block-like' },
      { "blankLine": 'always', "prev": 'block-like', "next": '*' },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        "prefer": "no-type-imports",
        "disallowTypeAnnotations": true
      }
    ]
  },
};
