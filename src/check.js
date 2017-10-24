/**
 * Copyright(c) 2016 JimmyCode Social <hi@jimmycode.com> (https://jimmycode.com)
 */

'use strict';

let codes = require('./constants');

export const is_one_of = (code, codes) => {
  let http_code = parseInt(code);

  if (isNaN(http_code)) {
    throw new TypeError('Expected a number');
  }

  return codes.indexOf(http_code) !== -1;
};

/**
 * Check if a number is an informational HTTP status code
 * @param code
 */
export const is_informational = (code) => {
  let http_codes = [
    codes.CONTINUE,
    codes.SWITCHING_PROTOCOLS
  ];

  return is_one_of(code, http_codes);
};

/**
 * Check if a number is a success HTTP status code
 * @param code
 */
export const is_success = (code) => {
  let http_codes = [
    codes.OK,
    codes.CREATED,
    codes.ACCEPTED,
    codes.NON_AUTHORITATIVE_INFORMATION,
    codes.NO_CONTENT,
    codes.RESET_CONTENT,
    codes.PARTIAL_CONTENT,
    codes.MULTI_STATUS,
    codes.ALREADY_REPORTED,
    codes.IM_USED
  ];

  return is_one_of(code, http_codes);
};

/**
 * Check if a number is a redirect HTTP status code
 * @param code
 */
export const is_redirect = (code) => {
  let http_codes = [
    codes.MULTIPLE_CHOICES,
    codes.MOVED_PERMANENTLY,
    codes.FOUND,
    codes.SEE_OTHER,
    codes.NOT_MODIFIED,
    codes.USE_PROXY,
    codes.SWITCH_PROXY,
    codes.TEMPORARY_REDIRECT,
    codes.PERMANENT_REDIRECT
  ];

  return is_one_of(code, http_codes);
};

/**
 * Check if a number is a HTTP Client Error code
 * @param code
 */
export const is_client_error = (code) => {
  let http_codes = [
    codes.BAD_REQUEST,
    codes.UNAUTHORIZED,
    codes.PAYMENT_REQUIRED,
    codes.FORBIDDEN,
    codes.NOT_FOUND,
    codes.METHOD_NOT_ALLOWED,
    codes.NOT_ACCEPTABLE,
    codes.PROXY_AUTHENTICATION_REQUIRED,
    codes.REQUEST_TIMEOUT,
    codes.CONFLICT,
    codes.GONE,
    codes.LENGTH_REQUIRED,
    codes.PRECONDITION_FAILED,
    codes.REQUEST_ENTITY_TOO_LARGE,
    codes.REQUEST_URI_TOO_LONG,
    codes.UNSUPPORTED_MEDIA_TYPE,
    codes.REQUESTED_RANGE_NOT_SATISFIABLE,
    codes.EXPECTATION_FAILED,
    codes.IM_A_TEAPOT,
    codes.MISDIRECTED_REQUEST,
    codes.UNPROCESSABLE_ENTITY,
    codes.LOCKED,
    codes.FAILED_DEPENDENCY,
    codes.UPGRADE_REQUIRED,
    codes.PRECONDITION_REQUIRED,
    codes.TOO_MANY_REQUESTS,
    codes.REQUEST_HEADER_FIELDS_TOO_LARGE,
    codes.UNAVAILABLE_FOR_LEGAL_REASONS
  ];

  return is_one_of(code, http_codes);
};

/**
 * Check if a number is a HTTP server error code
 * @param code
 */
export const is_server_error = (code) => {
  let http_codes = [
    codes.INTERNAL_SERVER_ERROR,
    codes.NOT_IMPLEMENTED,
    codes.BAD_GATEWAY,
    codes.SERVICE_UNAVAILABLE,
    codes.GATEWAY_TIMEOUT,
    codes.HTTP_VERSION_NOT_SUPPORTED,
    codes.VARIANT_ALSO_NEGOTIATES,
    codes.INSUFFICIENT_STORAGE,
    codes.LOOP_DETECTED,
    codes.NOT_EXTENDED,
    codes.NETWORK_AUTHENTICATION_REQUIRED
  ];

  return is_one_of(code, http_codes);
};
