import express from 'express';
import routes from './routes';
import cors from 'cors';

import logger from 'morgan';

import dotenv from 'dotenv-flow';

import config from './utils/config';

dotenv.config();

const port = config.port;

const app = express();
const corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));
app.use(express.json());

app.use(logger('dev'));

app.use(routes);

const server = app.listen(port);
console.log("server open at port " + port);

export default server;