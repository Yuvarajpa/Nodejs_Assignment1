//TCP Server

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected');

    socket.on('data', (data) => {
        console.log(`Received from client: ${data}`);
        
        socket.write('Hello from the server!');
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });
    
    socket.on('error', (err) => {
        console.log('Socket error:', err.message);
    });
});

server.listen(4000, () => {
    console.log('Server listening on port 4000');
});

/*output
Server listening on port 4000
Client connected
Received from client: Hello from the client!
Client disconnected
*/

//TCP Client

const net = require('net');

const client = new net.Socket();

client.connect(4000, '127.0.0.1', () => {
    console.log('Connected to the server');
    
    client.write('Hello from the client!');
});

client.on('data', (data) => {
    console.log(`Received from server: ${data}`);
    
    client.end();
});

client.on('close', () => {
    console.log('Connection closed');
});

client.on('error', (err) => {
    console.log('Client error:', err.message);
});


/*output
Connected to the server
Received from server: Hello from the server!
Connection closed
*/