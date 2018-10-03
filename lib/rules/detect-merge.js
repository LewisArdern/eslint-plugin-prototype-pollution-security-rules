/**
 * @fileoverview Rule to detect use of merge.recusive
 * @author Lewis Ardern
*/

"use strict";

module.exports = {
  create: function (context) {
    return {
      MemberExpression: function (node) {
        if (node.object.name === 'merge' && node.property.name === 'recursive') {
          context.report(node, "Use of merge.recursive() can lead to Denial-of-Service, For-loop pollution, or Property Injection");
        };
      }
    };
  }
};
