const { moveUpKey, moveDnKey, moveLeftKey, moveRightKey, messageKey1, messageKey2 } = require('./constants');
let connection;

// Configure user input via stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', key => handleUserInput(key));
  stdin.resume();
  return stdin;
};

// Control handler
const handleUserInput = function(key) {
  if (key === moveUpKey) {
    connection.write('Move: up');
  }
  if (key === moveDnKey) {
    connection.write('Move: down');
  }
  if (key === moveLeftKey) {
    connection.write('Move: left');
  }
  if (key === moveRightKey) {
    connection.write('Move: right');
  }
  if (key === messageKey1) {
    connection.write('Say: Out of my way!');
  }
  if (key === messageKey2) {
    connection.write('Say: Yummy!');
  }
  if (key === "\u0003") {
    process.exit();
  }
};
module.exports = { setupInput };