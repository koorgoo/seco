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
  _.each([
    [5, 's', '5'],
    [185, 'm', '3'],
    [3650, 'h', '1'],
    [185, 'm:s', '3:05'],
    [200, 'm:s', '3:20'],
    [605, 'm:s', '10:05'],
    [3700, 'h:m', '1:01'],
    [4200, 'h:m', '1:10'],
    [3605, 'h:s', '1:05'],
    [3620, 'h:s', '1:20'],
    [3665, 'h:m:s', '1:01:05']
  ], function(c) {
    test.equal(seco(c[0]).format(c[1]), c[2]);
  });
  test.done();
};

