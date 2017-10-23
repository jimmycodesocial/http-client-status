/**
 * Copyright(c) 2016 JimmyCode Social <hi@jimmycode.com> (https =//jimmycode.com)
 */

'use strict';

import { expect } from 'chai';
const codes = require('../src/codes');

describe('codes()', () => {
  it ('should have a text description', () => {
    Object.keys(codes).forEach((code) => {
      let http_code = codes[code];
      if (typeof http_code === 'number') {
        expect(codes.statusTexts).to.have.own.property(http_code);
      }
    });
  });

  it ('should get text for valida codes', () => {
    expect(codes.getStatusText(400)).to.be.equal('Bad Request');
    expect(codes.getStatusText(404)).to.be.equal('Not Found');
    expect(codes.getStatusText(500)).to.be.equal('Internal Server Error');

    Object.keys(codes).forEach((code) => {
      let http_code = codes[code];
      if (typeof http_code === 'number') {
        expect(codes.getStatusText(http_code)).to.be.equal(codes.statusTexts[http_code]);
      }
    });
  });

  it ('should throw error for invalid codes', () => {
    [0, 50, 99, 227, 103, 309, 452, 512].forEach((code) => {
      expect(() => codes.getStatusText(code)).to.throw(Error);
    });
  });
});
