/**
 * @fileoverview Test for detect-merge
 * @author Lewis Ardern
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../lib/rules/detect-merge");
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new RuleTester();

eslintTester.run("detect-merge", rule, {
  valid: [
    { code: "foo()" }  // just need to capture invalid
  ],    
  invalid: [
    {
      code: "merge.recursive({}, req.body)",
      errors: [
        { message: "Use of merge.recursive() can lead to Denial-of-Service, For-loop pollution, or Property Injection" }
      ],
    }
  ]
}); 
