import config, {nodeEnv} from './config';
import express from 'express';
import apirouter from './api/index';
import path from 'path';
import data from './src/user.json';
const server = express();

server.use(express.static(path.join(__dirname, 'public')));
server.use('/api', apirouter);
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
	console.log('why');
	res.render('start');
});

server.get('/login', (req, res) => {
	console.log(req.query);
	res.send(data);
});

server.listen(config.port, () => {
	console.log('listening on port', config.port);
});