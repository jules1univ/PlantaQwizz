import express from "express";
import helmet  from 'helmet';
import jwt from 'jsonwebtoken';
import { rateLimit} from 'express-rate-limit';
import {join} from "path";

const compression = require('compression')
const sanitizer = require('express-sanitizer');
require('dotenv').config();


const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
});

app.use(express.json());
app.use(limiter);
app.use(helmet());
app.use(sanitizer());
app.use(compression())

app.disable('x-powered-by');

app.get('/api', (req, res) => {
  res.json({ message: "Hello"})
}); 

app.use('/', express.static(join(__dirname, "static/"), {index: "index.html"}));


app.listen(5000);
