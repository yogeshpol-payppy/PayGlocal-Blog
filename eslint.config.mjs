import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect", // Automatically detects the React version
      },
    },
    rules:{
      "react/react-in-jsx-scope": "off", // no need to import react at the top of file after v17 react so disabled this rule
      'react/prop-types': 'off',  
      '@next/next/no-img-element': 'off', // this is for single blog pages

      //below errors occurs in generated . next file which we cant modify so need to off
      'no-redeclare': 'off',
      'no-undef': 'off', // Turn off undefined variable checks for generated files
      'no-empty': 'off', // Suppress empty block warnings
      'no-unused-vars': 'off', // Suppress unused variable warnings,
      'no-fallthrough': 'off',
      'no-prototype-builtins': 'off',
      'no-cond-assign': 'off',
      'no-control-regex': 'off',
    },
   
  }
];