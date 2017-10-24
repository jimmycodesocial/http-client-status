/**
 * Copyright(c) 2016 JimmyCode Social <hi@jimmycode.com> (https://jimmycode.com)
 */

'use strict';

let constants = require('./constants');

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
    constants.CONTINUE,
    constants.SWITCHING_PROTOCOLS
  ];

  return is_one_of(code, http_codes);
};

/**
 * Check if a number is a success HTTP status code
 * @param code
 */
export const is_success = (code) => {
  let http_codes = [
    constants.OK,
    constants.CREATED,
    constants.ACCEPTED,
    constants.NON_AUTHORITATIVE_INFORMATION,
    constants.NO_CONTENT,
    constants.RESET_CONTENT,
    constants.PARTIAL_CONTENT,
    constants.MULTI_STATUS,
    constants.ALREADY_REPORTED,
    constants.IM_USED
  ];

  return is_one_of(code, http_codes);
};

/**
 * Check if a number is a redirect HTTP status code
 * @param code
 */
export const is_redirect = (code) => {
  let http_codes = [
    constants.MULTIPLE_CHOICES,
    constants.MOVED_PERMANENTLY,
    constants.FOUND,
    constants.SEE_OTHER,
    constants.NOT_MODIFIED,
    constants.USE_PROXY,
    constants.SWITCH_PROXY,
    constants.TEMPORARY_REDIRECT,
    constants.PERMANENT_REDIRECT
  ];

  return is_one_of(code, http_codes);
};

/**
 * Check if a number is a HTTP Client Error code
 * @param code
 */
export const is_client_error = (code) => {
  let http_codes = [
    constants.BAD_REQUEST,
    constants.UNAUTHORIZED,
    constants.PAYMENT_REQUIRED,
    constants.FORBIDDEN,
    constants.NOT_FOUND,
    constants.METHOD_NOT_ALLOWED,
    constants.NOT_ACCEPTABLE,
    constants.PROXY_AUTHENTICATION_REQUIRED,
    constants.REQUEST_TIMEOUT,
    constants.CONFLICT,
    constants.GONE,
    constants.LENGTH_REQUIRED,
    constants.PRECONDITION_FAILED,
    constants.REQUEST_ENTITY_TOO_LARGE,
    constants.REQUEST_URI_TOO_LONG,
    constants.UNSUPPORTED_MEDIA_TYPE,
    constants.REQUESTED_RANGE_NOT_SATISFIABLE,
    constants.EXPECTATION_FAILED,
    constants.IM_A_TEAPOT,
    constants.MISDIRECTED_REQUEST,
    constants.UNPROCESSABLE_ENTITY,
    constants.LOCKED,
    constants.FAILED_DEPENDENCY,
    constants.UPGRADE_REQUIRED,
    constants.PRECONDITION_REQUIRED,
    constants.TOO_MANY_REQUESTS,
    constants.REQUEST_HEADER_FIELDS_TOO_LARGE,
    constants.UNAVAILABLE_FOR_LEGAL_REASONS
  ];

  return is_one_of(code, http_codes);
};

/**
 * Check if a number is a HTTP server error code
 * @param code
 */
export const is_server_error = (code) => {
  let http_codes = [
    constants.INTERNAL_SERVER_ERROR,
    constants.NOT_IMPLEMENTED,
    constants.BAD_GATEWAY,
    constants.SERVICE_UNAVAILABLE,
    constants.GATEWAY_TIMEOUT,
    constants.HTTP_VERSION_NOT_SUPPORTED,
    constants.VARIANT_ALSO_NEGOTIATES,
    constants.INSUFFICIENT_STORAGE,
    constants.LOOP_DETECTED,
    constants.NOT_EXTENDED,
    constants.NETWORK_AUTHENTICATION_REQUIRED
  ];

  return is_one_of(code, http_codes);
};
