"use strict";
var plugin = {
    rules: {
        "no-anchor-tag": {
            meta: {
                type: "problem",
                docs: {
                    description: "Disallow the use of anchor tags",
                    category: "Best Practices",
                    recommended: true,
                },
                fixable: "code",
                schema: [], // No options for this rule
            },
            create: function (context) {
                return {
                    JSXOpeningElement: function (_codePath, node) {
                        if (node.name.type === "JSXIdentifier" && node.name === "a") {
                            context.report({
                                node: node,
                                message: "Avoid using anchor tags",
                                fix: function (fixer) {
                                    return fixer.remove(node);
                                },
                            });
                        }
                    },
                };
            },
        },
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
module.exports = plugin;
