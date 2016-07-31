seco
====

Seconds converter & formatter


### Install

```shell
bower install koorgoo/seco
npm install koorgoo/seco
```


### Usage

```js
var seco = require('seco');

seco(125).s === 5   // seconds
seco(120).m === 2   // minutes
seco(3600).h === 1  // hour

seco(3725).format('h:m:s') === '1:02:05'
```
