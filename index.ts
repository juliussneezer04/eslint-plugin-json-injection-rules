import { Rule } from "eslint";

const plugin = {
  rules: {
    "no-json-parse": {
      meta: {
        type: "suggestion",
        docs: {
          description: "Disallow the use of JSON.parse",
          category: "Best Practices",
          recommended: true,
        },
        fixable: "code",
        schema: [], // No options for this rule
      },
      create: function (context) {
        return {
          CallExpression(node) {
            if (
              node.callee.type === "MemberExpression" &&
              node.callee.object.type === "Identifier" &&
              node.callee.object.name === "JSON" &&
              node.callee.property.type === "Identifier" &&
              node.callee.property.name === "parse"
            ) {
              context.report({
                node,
                message: "Avoid using JSON.parse",
                fix: (fixer: { remove: (arg0: any) => any }) =>
                  fixer.remove(node),
              });
            }
          },
        };
      },
    } as Rule.RuleModule,
  },
};

export = plugin;
