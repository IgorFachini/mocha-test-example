const console = require('console');

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

global.eventEmitter = eventEmitter;

exports.mochaGlobalSetup = async function () {
  // make some request and configs
  console.log('mochaGlobalSetup');

  global.Cookie = 'SOME Cookie';
  return Promise.resolve();
};

