process.nextTick(() => console.log('Hello'));
setImmediate(() => console.log('Now'));
setImmediate(() => console.log('Now'));
setImmediate(() => console.log('Now'));
setImmediate(() => console.log('Now'));
setImmediate(() => console.log('Now'));
console.log('world');
console.log('world 2');