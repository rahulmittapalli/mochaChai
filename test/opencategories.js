var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');
var fun = require('./main');
var subPath = "/open/categories";

describe("Dermalogica Categories", function() {
  this.timeout(25000);
  it("Open Categories", function(done) {
    var key = "0000-00000-00000-0000";
    var inputvalues = fun.input(key, subPath);
    fun.category_requester(inputvalues, done);
  })
});
