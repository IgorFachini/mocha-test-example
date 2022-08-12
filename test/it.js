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

module.exports = (name, config = {}) => {
  if (!name) throw new Error('name is required');
  it(name, function (done) {
		
		if (config.validate) {
			({ test: 1 }).should.be.eql(config.validate);
		}
		global.eventEmitter.emit('SET VARIABLE', 'value');
		global.eventEmitter.emit('SET TEST VARIABLE', 'test');

		
		console.log('someVariable', someVariable);
		console.log('testVariable', testVariable);
		done();
  });
};