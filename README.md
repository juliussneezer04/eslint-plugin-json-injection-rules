# ESLint Plug-in for Custom Rules

- This is a plug-in for ESLint that provides custom rules used by me to safeguard against JSON attacks.

## Setup

1. Setup the plug-in by running the setup command.

   ```bash
   yarn setup;
   ```

2. Add the following to your `.eslintrc.json` file.

   ```json
   ...
   "plugins": [..., "custom-rules"],
   "rules": {
    "custom-rules/no-json-parse": 1,
   },
   ...
   ```
