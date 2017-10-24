/**
 * Copyright(c) 2016 JimmyCode Social <hi@jimmycode.com> (https://jimmycode.com)
 */

'use strict';

import { expect } from 'chai';
const _package = require('../src');

describe('package', () => {
  it ('should expose functions', () => {
    expect(_package).to.have.own.property('codes').and.be.an('object');
    expect(_package).to.have.own.property('getStatusText').and.be.a('function');
    expect(_package).to.have.own.property('is_informational').and.be.a('function');
    expect(_package).to.have.own.property('is_success').and.be.a('function');
    expect(_package).to.have.own.property('is_redirect').and.be.a('function');
    expect(_package).to.have.own.property('is_client_error').and.be.a('function');
    expect(_package).to.have.own.property('is_server_error').and.be.a('function');
    expect(_package).to.have.own.property('constants');
  });

  it ('should inspect a code', () => {
    expect(_package.codes[401]).to.be.equal('Unauthorized');
    expect(_package.codes[401]).to.be.equal(_package.getStatusText(401));
  });

  it ('should expose all constants', () => {
    expect(_package.constants.BAD_REQUEST).to.be.equal(400);
  });
});
