/**
 * Copyright(c) 2016 JimmyCode Social <hi@jimmycode.com> (https://jimmycode.com)
 */

'use strict';

import { expect } from 'chai';
import { statusTexts, getStatusText } from '../src/codes';
const constants = require('../src/constants');

describe('codes', () => {
  it ('should have a text description', () => {
    Object.keys(constants).forEach((code) => {
      expect(statusTexts).to.have.own.property(constants[code]);
    });
  });

  it ('should have text for valid codes', () => {
    expect(getStatusText(400)).to.be.equal('Bad Request');
    expect(getStatusText(400)).to.be.equal(getStatusText(constants.BAD_REQUEST));

    expect(getStatusText(404)).to.be.equal('Not Found');
    expect(getStatusText(404)).to.be.equal(getStatusText(constants.NOT_FOUND));

    expect(getStatusText(500)).to.be.equal('Internal Server Error');
    expect(getStatusText(500)).to.be.equal(getStatusText(constants.INTERNAL_SERVER_ERROR));

    Object.keys(constants).forEach((code) => {
      let http_code = constants[code];
      expect(getStatusText(http_code)).to.be.equal(statusTexts[http_code]);
    });
  });

  it ('should throw error for invalid codes', () => {
    [0, 50, 99, 227, 103, 309, 452, 512].forEach((code) => {
      expect(() => getStatusText(code)).to.throw(Error);
    });
  });
});
