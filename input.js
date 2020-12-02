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
  if (key === "\u0077") {
    connection.write('Move: up');    // Key 'w'
  }
  if (key === "\u0073") {
    connection.write('Move: down');  // Key 's'
  }
  if (key === "\u0061") {
    connection.write('Move: left');  // Key 'a'
  }
  if (key === "\u0064") {
    connection.write('Move: right'); // Key 'd'
  }
  if (key === "\u0003") {
    process.exit();
  }
};
module.exports = { setupInput };