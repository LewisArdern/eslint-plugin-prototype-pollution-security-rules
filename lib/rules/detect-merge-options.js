/**
 * @fileoverview Rule to detect use of deepExtend
 * @author Lewis Ardern
*/

"use strict";

module.exports = {
  create: function (context) {
    return {
      CallExpression: function (node) {
        if (node.callee.name === 'mergeOptions') {
          context.report(node, "Use of mergeOptions() can lead to Denial-of-Service, For-loop pollution, or Property Injection");
        };
      }
    };
  }
};
