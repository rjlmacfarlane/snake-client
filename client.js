const net = require('net');
const { IP, PORT } = require('./constants');

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT            // Use port 50542 for LHL server
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