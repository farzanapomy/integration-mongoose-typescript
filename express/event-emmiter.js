const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('Birthday', () => {
  console.log('Happy Birthday!');
});

myEmitter.on('Birthday', (gift) => {
  console.log(`I will send you a birthday ${gift}!`);
});

myEmitter.emit('Birthday', 'Take a gift');
