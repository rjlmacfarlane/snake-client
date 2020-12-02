const net = require('net');

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',     // Use 135.23.222.131 for LHL server
    port: 50541            // Use port 50542 for LHL server
  });

  // Notify user connection is established & set a player name
  conn.on('connect', () => {
    console.log('Connected to game server.');
    conn.write('Name: RJM');
  });
  
  // Interpret incoming data as text
  conn.setEncoding('utf8');
 
  // Print messages from server to the console:
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = { connect };