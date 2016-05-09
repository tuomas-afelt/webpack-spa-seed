var chai = require('chai');
var assert = chai.assert;
var should = chai.should();

var component = require('./component');

describe('Something abstract', function() {
  it('Something', function() {
    assert.typeOf(component, 'function');
  });
});
