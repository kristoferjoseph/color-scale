var mocha = require('mocha');
var expect = require('chai').expect;
var colorScale = require('./');


describe('color-scale', function() {

  it('should exist', function() {
    expect(colorScale).to.exist;
  });

  it('should return a function', function() {
    var cs = colorScale({});
    expect(cs()).to.be.ok;
  });

  it('should return expected result', function() {
    var cs = colorScale({
      color: '#00F',
      variance: 20
    });
    expect(cs(-1)).to.equal('#0000CC');
  });

  describe('incrementColor', function() {
    it('should not exceed 100', function() {
     expect(colorScale.increment(100, 1)).to.equal(100);
    });
  });

  describe('decrementColor', function() {
    it('should not exceed 100', function() {
     expect(colorScale.decrement(0, 1)).to.equal(0);
    });
  });

});
