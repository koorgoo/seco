/* jshint strict: false */
var _ = require('lodash');
var seco = require('..');

exports['set hms props'] = function(test) {
  var o = seco(3754);
  test.equal(o.h, 1);
  test.equal(o.m, 2);
  test.equal(o.s, 34);
  test.done();
};

exports['format()'] = function(test) {
  var o = seco(3724);
  _.each([
    ['s',     '3724'   ],
    ['m',     '62'     ],
    ['h',     '1'      ],
    ['m:s',   '62:04'  ],
    ['h:m',   '1:02'   ],
    ['h:s',   '1:124'  ],
    ['h:m:s', '1:02:04']
  ], function(c) { test.equal(o.format(c[0]), c[1]); });
  test.done();
};

