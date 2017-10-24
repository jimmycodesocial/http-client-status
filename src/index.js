/**
 * Copyright(c) 2016 JimmyCode Social <hi@jimmycode.com> (https://jimmycode.com)
 */

'use strict';

export {
  statusTexts as codes,
  getStatusText
} from './codes';

export {
  is_informational,
  is_success,
  is_redirect,
  is_client_error,
  is_server_error
} from './check';

let constants = require('./constants');

export {
  constants
};
