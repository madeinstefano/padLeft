const should = require('chai').should();
const expect = require('chai').expect;

require('../padleft');

describe('.padLeft testing', function () {
  
  it('Should add chars until the right size', function () {
    '.2'.padLeft(4, 0).should.eql('00.2');
    '.2'.padLeft(4, '0').should.eql('00.2');
    'is slow'.padLeft(14, 'my car ').should.eql('my car is slow');
  });
});
