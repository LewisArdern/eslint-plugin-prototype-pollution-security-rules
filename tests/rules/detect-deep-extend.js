/**
 * @fileoverview Test for detect-deep-extend
 * @author Lewis Ardern
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../lib/rules/detect-deep-extend");
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new RuleTester();

eslintTester.run("detect-deep-extend", rule, {
  valid: [
    { code: "deepExtend(obj1);" } 
  ],    
  invalid: [
    {
      code: "deepExtend(obj1, obj2);",
      errors: [
        { message: "Use of deepExtend() can lead to Denial-of-Service, For-loop pollution, or Property Injection" }
      ],
    }
  ]
}); 
