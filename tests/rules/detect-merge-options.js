/**
 * @fileoverview Test for detect-merge-options
 * @author Lewis Ardern
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../lib/rules/detect-merge-options");
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new RuleTester();

eslintTester.run("detect-merge-options", rule, {
  valid: [
    { code: "foo();" } // dont need a valid, just looking for detection
  ],    
  invalid: [
    {
      code: "mergeOptions({foo: 0}, {bar: 1}, {baz: 2}, {bar: 3})",
      errors: [
        { message: "Use of mergeOptions() can lead to Denial-of-Service, For-loop pollution, or Property Injection" }
      ],
    }
  ]
}); 
