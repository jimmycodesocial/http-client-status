/**
 * Copyright(c) 2016 JimmyCode Social <hi@jimmycode.com> (https://jimmycode.com)
 */

'use strict';

import { expect } from 'chai';
const constants = require('../src/constants');

describe('constants', () => {
  it ('should be an integer', () => {
    Object.keys(constants).forEach((code) => {
      expect(constants[code]).to.be.a('number');
    });
  });
});
