/**
 * @fileoverview Rule to detect use of merge
 * @author Lewis Ardern
*/

"use strict";

module.exports = {
  create: function (context) {
    return {
      CallExpression: function (node) {
        // maybe not the best way as a call expression with the name merge could be anything, addiitonal step would be to look for require('merge-objects') but also hacky..
        let args = node.arguments[1];
        if ((!args))
            return;
        if (node.callee.name === 'merge') {
          context.report(node, "Use of merge can lead to Denial-of-Service, For-loop pollution, or Property Injection");
        };
      }
    };
  }
};
