var chai = require('chai');
var assert = chai.assert;
var should = chai.should();

var Hello = require('./Hello.jsx');

describe('Something abstract', function() {
  it('Something', function() {
    assert.typeOf(Hello, 'Object');
  });
});
