# ESLint Plug-in for Secure Web Applications

[![npm version](https://badge.fury.io/js/eslint-plugin-secure-webapp.svg)](https://badge.fury.io/js/eslint-plugin-secure-webapp)

- This is a plug-in for ESLint that provides custom rules used by me to safeguard against basic web application vulnerabilities.

## Setup

1. Setup the plug-in by running the setup command.

   ```bash
   yarn setup;
   ```

2. Update the following in your `.eslintrc.json` file.

   ```json
   "plugins": ["secure-webapp"],
   "rules": {
    "secure-webapp/no-json-parse": 1,
   },
   ```
