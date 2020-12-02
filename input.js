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
  if (key === "\u0077") {                    // Key 'w'
    connection.write('Move: up');
  }
  if (key === "\u0073") {                    // Key 's'
    connection.write('Move: down');
  }
  if (key === "\u0061") {                    // Key 'a'
    connection.write('Move: left');
  }
  if (key === "\u0064") {                    // Key 'd'
    connection.write('Move: right');
  }
  if (key === "\u006D") {                    // Key 'm'
    connection.write('Say: Out of my way!');
  }
  if (key === "\u0079") {                    // Key 'y'
    connection.write('Say: Yummy!');
  }
  if (key === "\u0067") {                    // Key 'g'
    connection.write('Say: My pellet!');
  }
  if (key === "\u0003") {
    process.exit();
  }
};
module.exports = { setupInput };