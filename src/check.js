/**
 * Copyright(c) 2016 JimmyCode Social <hi@jimmycode.com> (https://jimmycode.com)
 */

'use strict';

export const is_one_of = (code, codes) => {
  let http_code = parseInt(code);

  if (isNaN(http_code)) {
    throw new TypeError('Expected a number');
  }

  return codes.indexOf(http_code) !== -1;
};

export const is_informational = (code) => {
  let codes = [
    100, 101
  ];

  return is_one_of(code, codes);
};

export const is_success = (code) => {
  let codes = [
    200, 201, 202, 203, 204, 205, 206, 207, 208,
    226
  ];

  return is_one_of(code, codes);
};

export const is_redirect = (code) => {
  let codes = [
    300, 301, 302, 303, 304, 305, 306, 307, 308
  ];

  return is_one_of(code, codes);
};

export const is_client_error = (code) => {
  let codes = [
    400, 401, 402, 403, 404, 405, 406, 407, 408, 409,
    410, 411, 412, 413, 414, 415, 416, 417, 418,
    421, 422, 423, 424, 426, 428, 429,
    431,
    451
  ];

  return is_one_of(code, codes);
};

export const is_server_error = (code) => {
  let codes = [
    500, 501, 502, 503, 504, 505, 506, 507, 508, 509,
    510, 511
  ];

  return is_one_of(code, codes);
};
