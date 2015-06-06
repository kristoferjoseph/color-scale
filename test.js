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

  it('should generate correct color scale', function() {
    var cs = colorScale({
      color: '#FF0080',
      variance: 20
    });

    expect(cs(5)).to.equal('#FFFFFF');
    expect(cs(4)).to.equal('#FFCCE6');
    expect(cs(3)).to.equal('#FF99CC');
    expect(cs(2)).to.equal('#FF66B3');
    expect(cs(1)).to.equal('#FF3399');
    expect(cs(0)).to.equal('#FF0080');
    expect(cs(-1)).to.equal('#CC0066');
    expect(cs(-2)).to.equal('#99004D');
    expect(cs(-3)).to.equal('#660033');
    expect(cs(-4)).to.equal('#330019');
    expect(cs(-5)).to.equal('#000000');
  });

  describe('incrementColor', function() {
    it('should not exceed 100', function() {
     expect(colorScale.increment(100, 1)).to.equal(100);
    });
  });

  describe('decrementColor', function() {
    it('should not go below 0', function() {
     expect(colorScale.decrement(0, 1)).to.equal(0);
    });
  });

});
