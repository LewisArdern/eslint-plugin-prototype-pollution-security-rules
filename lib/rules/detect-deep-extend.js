/**
 * @fileoverview Rule to detect use of deepExtend
 * @author Lewis Ardern
*/

"use strict";

module.exports = {
  create: function (context) {
    return {
      CallExpression: function (node) {
        let args = node.arguments[1];
        if ((!args))
            return;
        if (node.callee.name === 'deepExtend') {
          context.report(node, "Use of deepExtend() can lead to Denial-of-Service, For-loop pollution, or Property Injection");
        };
      }
    };
  }
};
