const expect = require('chai').expect;
const yn = require('./yahoo-nasdaq');

it('should return quotes from AMZN and ADBE', function() {
  const result = yn.getquote(["AMZN","ADBE"]);
  return result.then(function(data) {
    expect((data[0].Ask != null) && (data[1].Ask != null)).to.be.true;
  });
})

it('should return historicals from ORCL and CSCO', function() {
  const result = yn.gethistorical([ {symbol :"ORCL", start:"2016-12-05", end:"2016-12-18"},
                                        {symbol :"CSCO", start:"2015-02-15", end:"2015-02-20"}]);
  return result.then(function(data) {
    expect(data).to.be.not.null;
  });
})

it('should return quotes from nasdaq100', function() {
  const result = yn.getnasdaq100();
  return result.then(function(data) {
    expect(data).to.be.not.null;
  });
})
