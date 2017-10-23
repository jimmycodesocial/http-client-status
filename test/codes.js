/**
 * Copyright(c) 2016 JimmyCode Social <hi@jimmycode.com> (https =//jimmycode.com)
 */

'use strict';

import { expect } from 'chai';
const codes = require('../src/codes');

describe('codes()', () => {
  it ('should be a number', () => {
    Object.keys(codes).forEach((code) => {
      if (code !== 'texts') {
        expect(codes[code]).to.be.a('number');
      }
    });
  });

  it ('should have a text description', () => {
    Object.keys(codes).forEach((code) => {
      if (code !== 'texts') {
        expect(codes.texts).to.have.own.property(codes[code]);
      }
    });
  });
});
