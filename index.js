"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
exports.plugin = {
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
                    CallExpression: function (node) {
                        if (node.callee.type === "MemberExpression" &&
                            node.callee.object.type === "Identifier" &&
                            node.callee.object.name === "JSON" &&
                            node.callee.property.type === "Identifier" &&
                            node.callee.property.name === "parse") {
                            context.report({
                                node: node,
                                message: "Avoid using JSON.parse",
                                fix: function (fixer) {
                                    return fixer.remove(node);
                                },
                            });
                        }
                    },
                };
            },
        },
    },
};
