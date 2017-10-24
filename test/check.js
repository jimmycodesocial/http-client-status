/**
 * Copyright(c) 2016 JimmyCode Social <hi@jimmycode.com> (https://jimmycode.com)
 */

'use strict';

import { expect } from 'chai';
import {
  is_one_of,
  is_informational,
  is_success,
  is_redirect,
  is_client_error,
  is_server_error
} from '../src/check';
const constants = require('../src/constants');

describe('check', () => {
  describe('is_one_of()', () => {
    it ('should return true', () => {
      expect(is_one_of(0, [0, 1])).to.be.true;
      expect(is_one_of(404, [400, 401, 403, 404])).to.be.true;
      expect(is_one_of('404', [400, 401, 403, 404])).to.be.true;
    });

    it ('should return false', () => {
      expect(is_one_of(2, [0, 1])).to.be.false;
      expect(is_one_of(500, [400, 401, 403, 404])).to.be.false;
      expect(is_one_of('500', [400, 401, 403, 404])).to.be.false;
    });

    it('should check only valid codes', () => {
      expect(() => is_one_of('a', [200, 201, 202])).to.throw(Error);
      expect(() => is_one_of('a1', [200, 201, 202])).to.throw(Error);
      expect(() => is_one_of('HTTP_404', [200, 201, 202])).to.throw(Error);
    });
  });

  describe('is_informational()', () => {
    it ('should recognize codes', () => {
      expect(is_informational(101)).to.be.true;
      expect(is_informational(200)).to.be.false;
      expect(is_informational(301)).to.be.false;
      expect(is_informational(404)).to.be.false;
      expect(is_informational(500)).to.be.false;
    });

    it ('should recognize constants', () => {
      expect(is_informational(constants.SWITCHING_PROTOCOLS)).to.be.true;
      expect(is_informational(constants.NOT_FOUND)).to.be.false;
      expect(is_informational(constants.MOVED_PERMANENTLY)).to.be.false;
      expect(is_informational(constants.OK)).to.be.false;
      expect(is_informational(constants.INTERNAL_SERVER_ERROR)).to.be.false;
    });
  });

  describe('is_success()', () => {
    it ('should recognize codes', () => {
      expect(is_success(200)).to.be.true;
      expect(is_success(101)).to.be.false;
      expect(is_success(301)).to.be.false;
      expect(is_success(404)).to.be.false;
      expect(is_success(500)).to.be.false;
    });

    it ('should recognize constants', () => {
      expect(is_success(constants.OK)).to.be.true;
      expect(is_success(constants.INTERNAL_SERVER_ERROR)).to.be.false;
      expect(is_success(constants.NOT_FOUND)).to.be.false;
      expect(is_success(constants.MOVED_PERMANENTLY)).to.be.false;
      expect(is_success(constants.SWITCHING_PROTOCOLS)).to.be.false;
    });
  });

  describe('is_redirect()', () => {
    it ('should recognize codes', () => {
      expect(is_redirect(301)).to.be.true;
      expect(is_redirect(200)).to.be.false;
      expect(is_redirect(101)).to.be.false;
      expect(is_redirect(404)).to.be.false;
      expect(is_redirect(500)).to.be.false;
    });

    it ('should recognize constants', () => {
      expect(is_redirect(constants.MOVED_PERMANENTLY)).to.be.true;
      expect(is_redirect(constants.INTERNAL_SERVER_ERROR)).to.be.false;
      expect(is_redirect(constants.NOT_FOUND)).to.be.false;
      expect(is_redirect(constants.OK)).to.be.false;
      expect(is_redirect(constants.SWITCHING_PROTOCOLS)).to.be.false;
    });
  });

  describe('is_client_error()', () => {
    it ('should recognize codes', () => {
      expect(is_client_error(404)).to.be.true;
      expect(is_client_error(301)).to.be.false;
      expect(is_client_error(200)).to.be.false;
      expect(is_client_error(101)).to.be.false;
      expect(is_client_error(500)).to.be.false;
    });

    it ('should recognize constants', () => {
      expect(is_client_error(constants.NOT_FOUND)).to.be.true;
      expect(is_client_error(constants.INTERNAL_SERVER_ERROR)).to.be.false;
      expect(is_client_error(constants.MOVED_PERMANENTLY)).to.be.false;
      expect(is_client_error(constants.OK)).to.be.false;
      expect(is_client_error(constants.SWITCHING_PROTOCOLS)).to.be.false;
    });
  });

  describe('is_server_error()', () => {
    it ('should recognize codes', () => {
      expect(is_server_error(500)).to.be.true;
      expect(is_server_error(404)).to.be.false;
      expect(is_server_error(301)).to.be.false;
      expect(is_server_error(200)).to.be.false;
      expect(is_server_error(101)).to.be.false;
    });

    it ('should recognize constants', () => {
      expect(is_server_error(constants.INTERNAL_SERVER_ERROR)).to.be.true;
      expect(is_server_error(constants.NOT_FOUND)).to.be.false;
      expect(is_server_error(constants.MOVED_PERMANENTLY)).to.be.false;
      expect(is_server_error(constants.OK)).to.be.false;
      expect(is_server_error(constants.SWITCHING_PROTOCOLS)).to.be.false;
    });
  });
});
