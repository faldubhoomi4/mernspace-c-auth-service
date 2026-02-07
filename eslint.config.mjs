<<<<<<< HEAD
import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    {
        ignores: ['dist', 'node_modules', 'eslint.config.mjs'],
    },
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
        rules: {
            'no-console': 'off',
            'dot-notation': 'error',
        },
    },
)
=======
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
     ignores: ["dist", "node_modules", "eslint.config.mjs"]
  }, 
  {
    
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
        "no-console": "off", 
        "dot-notation" : "error"
    }
  },
  
);
>>>>>>> 44f6f39a923e40cfeb13f53da5c032dc06c35206
