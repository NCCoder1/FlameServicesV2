import Server from './bare/Server.mjs';
import { readFileSync } from 'fs';
import http from 'http';
import fs from 'fs';
import nodeStatic from 'node-static';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const bare =  new Server('/bare/', '');
const serve = new nodeStatic.Server('public/');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const options = {
    key: fs.readFileSync(certDir, 'key.pem'),
    cert: fs.readFileSync(certDir, 'cert.pem')
  }


const server = https.createServer(options);




server.on('request', (request, response) => {
    if (bare.route_request(request, response)) return true;
    serve.serve(request, response);
});

server.on('upgrade', (req, socket, head) => {
	if(bare.route_upgrade(req, socket, head))return;
	socket.end();
});

server.listen(process.env.PORT || 443);
