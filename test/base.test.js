/* eslint-disable no-unused-vars */
const shoud = require('should');
const console = require('console');

let someVariable = null;
let testVariable = null;

global.eventEmitter.on('SET VARIABLE', (data) => {
  someVariable = data;
});
global.eventEmitter.on('SET TEST VARIABLE', (data) => {
  testVariable = data;
});

describe('Base Tests', function () {
  require('./it.js')(
    'Test object is { test: 1 }',
    {
      validate: { test: 1 }
    }
  );
  require('./it.js')(
    'Test object make error',
    {
      validate: { test: 2 }
    }
  );
  it('testVariable should be test', function () {
    console.log('global.Cookie', global.Cookie);
    console.log('someVariable', someVariable);
    console.log('testVariable', testVariable);

    testVariable.should.be.eql('test');
  });
});
