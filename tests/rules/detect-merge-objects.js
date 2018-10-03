/**
 * @fileoverview Test for detect-merge-recursive
 * @author Lewis Ardern
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../lib/rules/detect-merge-objects");
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new RuleTester();

eslintTester.run("detect-merge-objects", rule, {
  valid: [
    { code: "merge(obj)" } 
  ],    
  invalid: [
    {
      code: "merge(obj1, obj2)",
      errors: [
        { message: "Use of merge can lead to Denial-of-Service, For-loop pollution, or Property Injection" }
      ],
    }
  ]
}); 
