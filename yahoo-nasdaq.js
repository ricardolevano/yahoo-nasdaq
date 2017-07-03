/******************************
  To my beloved dog 'Bear'
******************************/
const http = require('http');
const Converter = require("csvtojson").Converter;

/**********************************************
    Get a stock quote from Yahoo Finance
    in json format.
***********************************************/
const getSinglequote = function(symbol) {
  return new Promise((resolve, reject) => {
    http.get(urlquote(symbol), (res) => {
      const status = res.statusCode;
      let error;
      if (status !== 200) {
        error = new Error('Request Failed.\n' + 'Status Code: ${status}');
      } 
      if (error) {
        console.log(error.message);
        res.resume();
        return;
      }

      let buffer = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => buffer += chunk);
      res.on('end', () => {
        try {
          let quote = JSON.parse(buffer).query.results.quote;
          resolve(quote)
        } catch (e) {
          console.log(e.message);
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  })
}

/**********************************************
    Get historical prices for a stock
    from Yahoo Finance as a json array.
***********************************************/
const getSinglehistorical = function(obj) {
  return new Promise((resolve, reject) => {
    http.get(urlhisto(obj.symbol, obj.start, obj.end), (res) => {
      const status = res.statusCode;
      let error;
      if (status !== 200) {
        error = new Error('Request Failed.\n' + 'Status Code: ${status}');
      } 
      if (error) {
        console.log(error.message);
        res.resume();
        return;
      }

      let buffer = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => buffer += chunk);
      res.on('end', () => {
        try {
          let quote = JSON.parse(buffer).query.results.quote;
          resolve(quote)
        } catch (e) {
          console.log(e.message);
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  })
}

/**********************************************
  Get Nasdaq100 stock quotes as a json array
  from nasdaq.com.
***********************************************/
const getnasdaq100 = function(symbol, start, end) {
  return new Promise((resolve, reject) => {
    http.get(urlnasdaq100(), (res) => {
      const status = res.statusCode;
      let error;
      if (status !== 200) {
        error = new Error('Request Failed.\n' + 'Status Code: ${status}');
      } 
      if (error) {
        console.log(error.message);
        res.resume();
        return;
      }

      let buffer = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => buffer += chunk);
      res.on('end', () => {
        try {
          const csv2json = new Converter({});
          csv2json.fromString(buffer, (err,result) => {
            if(err)
            {
              console.log('Error parsing csv.');
            }
            else
            {
              resolve(result) 
            }   
          });
        } catch (e) {
          console.log(e.message);
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  })
}

/**********************************************
    Return an json array of stock quotes
    from Yahoo Finance
***********************************************/
const getquote = function(symbols_array) {
  let promise_array = [];
  symbols_array.forEach(function(symbol) {
    promise_array.push(getSinglequote(symbol));
  });
  return Promise.all(promise_array)
}

/**********************************************
    Return an json array of historical quotes
    from Yahoo Finance
***********************************************/
const gethistorical = function(histo_array) {
  let promise_array = [];
  histo_array.forEach(function(histo) {
    promise_array.push(getSinglehistorical(histo));
  });
  return Promise.all(promise_array)
}

const urlquote = (symbol) => {
  var url = `http://query.yahooapis.com/v1/public/yql?q= select * from yahoo.finance.quotes where symbol = "${symbol}" &format=json &diagnostics=true &env=store://datatables.org/alltableswithkeys &callback=`;
  return url;
}

const urlnasdaq100 = () => { 
  var url = `http://www.nasdaq.com/quotes/nasdaq-100-stocks.aspx?render=download`;
  return url;
}

const urlhisto = (symbol, start, end) => {
  var url = `http://query.yahooapis.com/v1/public/yql?q= select * from yahoo.finance.historicaldata where symbol = "${symbol}" and startDate = "${start}" and endDate   = "${end}"&format=json &diagnostics=true &env=store://datatables.org/alltableswithkeys &callback=`;
  return url;
}

exports.getquote = getquote;
exports.gethistorical = gethistorical;
exports.getnasdaq100 = getnasdaq100;