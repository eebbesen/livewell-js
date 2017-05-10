var express = require('express')
var app = express();

var incomeLimitss = {
  1: {
    p30: 18050,
    p50: 30050,
    p60: 36060,
    p80: 46000,
    year: 2016
  },
  2: {
    p30: 20060,
    p50: 34350,
    p60: 41220,
    p80: 52600,
    year: 2016
  },
  3: {
    p30: 23200,
    p50: 38650,
    p60: 46380,
    p80: 59150,
    year: 2016
  },
  4: {
    p30: 25750,
    p50: 42900,
    p60: 51480,
    p80: 65700,
    year: 2016
  },
  5: {
    p30: 27850,
    p50: 46350,
    p60: 55620,
    p80: 71000,
    year: 2016
  },
  6: {
    p30: 29900,
    p50: 49800,
    p60: 59760,
    p80: 76250,
    year: 2016
  },
  7: {
    p30: 31950,
    p50: 53200,
    p60: 63840,
    p80: 81500,
    year: 2016
  },
  8: {
    p30: 34000,
    p50: 56650,
    p60: 67980,
    p80: 86750,
    year: 2016
  }
}

app.listen(3000, function(){
  console.log('listening at port 3000');
  console.log(incomeLimitss);
});
