# ESLint Plug-in for Safe Web Applications

- This is a plug-in for ESLint that provides custom rules used by me to safeguard against basic web application vulnerabilities.

## Setup

1. Setup the plug-in by running the setup command.

   ```bash
   yarn setup;
   ```

2. Update the following in your `.eslintrc.json` file.

   ```json
   "plugins": ["safe-webapp"],
   "rules": {
    "safe-webapp/no-json-parse": 1,
   },
   ```
