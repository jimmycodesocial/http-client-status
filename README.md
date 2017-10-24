# http-client-status [![Build Status](https://travis-ci.org/jimmycodesocial/http-client-status.svg?branch=master)](https://travis-ci.org/jimmycodesocial/http-client-status)
Inspect/Check HTTP status code.

## Install
```
$ npm install --save http-client-status
```

## Usage
*Get text description of code.*

```js
// ES6
import { constants, codes, getStatusText } from 'http-client-status';

// or
var httpClientStatus = require('http-client-status');
var constants = httpClientStatus.constants,
    codes = httpClientStatus.codes,
    getStatusText = httpClientStatus.getStatusText;

console.log(codes[404]); 
//=> Not Found

console.log(codes[constants.NOT_FOUND]);
//=> Not Found

console.log(getStatusText(404)); 
//=> Not Found

console.log(getStatusText(constants.NOT_FOUND));
//=> Not Found
```

*Check group.*
```js
// ES6
import {
  constants,
  is_informational,
  is_success,
  is_redirect,
  is_client_error,
  is_server_error
} from 'http-client-status';

// or
var httpClientStatus = require('http-client-status');
var constants = httpClientStatus.constants,
  is_informational = httpClientStatus.is_informational,
  is_success = httpClientStatus.is_success,
  is_redirect = httpClientStatus.is_redirect,
  is_client_error = httpClientStatus.is_client_error,
  is_server_error = httpClientStatus.is_server_error;

console.log(is_informational(101)); 
//=> true

console.log(is_informational(constants.SWITCHING_PROTOCOLS)); 
//=> true

console.log(is_success(200)); 
//=> true

console.log(is_success(constants.OK)); 
//=> true

console.log(is_redirect(301)); 
//=> true

console.log(is_redirect(constants.MOVED_PERMANENTLY)); 
//=> true

console.log(is_client_error(404)); 
//=> true

console.log(is_client_error(constants.NOT_FOUND)); 
//=> true

console.log(is_server_error(500)); 
//=> true

console.log(is_server_error(constants.INTERNAL_SERVER_ERROR)); 
//=> true
```

## Credits
This package is strongly inspired by:
* https://github.com/encode/django-rest-framework/blob/master/rest_framework/status.py
* https://github.com/bendrucker/builtin-status-codes
* https://github.com/arthurvr/is-success
* https://github.com/sindresorhus/is-redirect
* https://github.com/arthurvr/is-client-error
* https://github.com/arthurvr/is-server-error
