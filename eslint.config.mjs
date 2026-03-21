import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import boundariesPlugin from "eslint-plugin-boundaries";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

const config = [
  {
    ignores: ["dist", "build", "node_modules"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: false,
        projectService: false,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
      import: importPlugin,
      boundaries: boundariesPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
      "boundaries/elements": [
        { type: "shared", pattern: "src/6-shared/*" },
        { type: "entities", pattern: "src/5-entities/*" },
        { type: "features", pattern: "src/4-features/*" },
        { type: "widgets", pattern: "src/3-widgets/*" },
        { type: "pages", pattern: "src/2-pages/*" },
        { type: "app", pattern: "src/1-app/*" },
      ],
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            { from: "features", allow: ["shared", "entities"] },
            { from: "entities", allow: ["shared"] },
            { from: "widgets", allow: ["shared", "features", "entities"] },
            {
              from: "pages",
              allow: ["widgets", "features", "entities", "shared"],
            },
          ],
        },
      ],
    },
  },
  eslintConfigPrettier,
];

export default config;

