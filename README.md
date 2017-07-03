# yahoo-nasdaq

`yahoo-nasdaq` is a Promise based [Yahoo Finance](http://finance.yahoo.com/) and [Nasdaq100](http://nasdaq.com/) stock quotes data downloader.

All stock quotes outputs are in json format.

Tested with node v6.9.1

## Installation

    $ npm install yahoo-nasdaq


**Get Options Quotes from Yahoo**
=================================

## Example

```js
const stocks = require('yahoo-nasdaq');

stocks.getquote(["AMZN","ADBE"])
  .then((json) => console.log(json))
  .catch((err) => console.error(err));


/*
[ { symbol: 'AMZN',
    Ask: '808.73',
    AverageDailyVolume: '4353740',
    Bid: '807.52',
    AskRealtime: null,
    BidRealtime: null,
    BookValue: '37.44',
    Change_PercentChange: '-0.71 - -0.09%',
    Change: '-0.71',
    ...
    ...
    StockExchange: 'NMS',
    DividendYield: null,
    PercentChange: '-0.09%' },
  { symbol: 'ADBE',
    Ask: '110.99',
    AverageDailyVolume: '2626450',
    Bid: '110.75',
    AskRealtime: null,
    BidRealtime: null,
    BookValue: '14.98',
    Change_PercentChange: '+0.92 - +0.84%',
    Change: '+0.92',
    ...
    ...
    StockExchange: 'NMS',
    DividendYield: '0.00',
    PercentChange: '+0.84%' } ]
*/
```

**Get Historical data from Yahoo**
==================================

## Example

```js
const stocks = require('yahoo-nasdaq');

stocks.gethistorical(
  [ {symbol :"AMZN", start:"2016-12-02", end:"2016-12-04"},
    {symbol :"ADBE", start:"2015-02-10", end:"2015-02-14"}
  ])
  .then((json) => console.log(json))
  .catch((err) => console.error(err));


/*
[ { Symbol: 'AMZN',
    Date: '2016-12-02',
    Open: '743.400024',
    High: '748.48999',
    Low: '736.700012',
    Close: '740.340027',
    Volume: '3499200',
    Adj_Close: '740.340027' },
  [ { Symbol: 'ADBE',
      Date: '2015-02-13',
      Open: '74.980003',
      High: '76.620003',
      Low: '74.769997',
      Close: '76.510002',
      Volume: '3819300',
      Adj_Close: '76.510002' },
    { Symbol: 'ADBE',
      Date: '2015-02-12',
      Open: '73.599998',
      High: '74.760002',
      Low: '73.309998',
      Close: '74.589996',
      Volume: '2243500',
      Adj_Close: '74.589996' },
    { Symbol: 'ADBE',
      Date: '2015-02-11',
      Open: '72.779999',
      High: '73.139999',
      Low: '72.349998',
      Close: '73.010002',
      Volume: '1600900',
      Adj_Close: '73.010002' },
    { Symbol: 'ADBE',
      Date: '2015-02-10',
      Open: '72.940002',
      High: '73.190002',
      Low: '72.110001',
      Close: '72.760002',
      Volume: '1696200',
      Adj_Close: '72.760002' } ] ]
*/
```

**Get nasdaq100 stock quotes from Nasdaq**
==========================================

## Example

```js
const stocks = require('yahoo-nasdaq');

stocks.getnasdaq100()
  .then((json) => console.dir(json))
  .catch((err) => console.error(err));


/*
[
	...
	...
	...
	{ Symbol: 'EXPE',
    Name: 'Expedia Inc.',
    lastsale: 119.92,
    netchange: 1.08,
    pctchange: 0.91,
    share_volume: 1485728,
    Nasdaq100_points: 0.1,
    field8: '' },
  { Symbol: 'ESRX',
    Name: 'Express Scripts Holding Company',
    lastsale: 71.75,
    netchange: -0.7,
    pctchange: -0.97,
    share_volume: 4642215,
    Nasdaq100_points: -0.4,
    field8: '' },
  { Symbol: 'FB',
    Name: 'Facebook Inc.',
    lastsale: 127.04,
    netchange: -0.51,
    pctchange: -0.4,
    share_volume: 19097223,
    Nasdaq100_points: -1,
    field8: '' },
  { Symbol: 'FAST',
    Name: 'Fastenal Company',
    lastsale: 51.24,
    netchange: 0.69,
    pctchange: 1.36,
    share_volume: 2788981,
    Nasdaq100_points: 0.2,
    field8: '' },
  ...
  ...
  ...

]
*/
```

## License

<pre>
The MIT License (MIT)

Copyright (c) 2013-2016 Ricardo Levano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
</pre>
