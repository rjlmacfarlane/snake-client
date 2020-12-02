const net = require('net');

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // Notify user connection is established & set a player name
  conn.on('connect', () => {
    console.log('Connected to game server.');
    conn.write('Name: RJM');
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 3000);
    
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