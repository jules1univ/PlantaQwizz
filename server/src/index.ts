import express from "express";
import helmet  from 'helmet';
import jwt from 'jsonwebtoken';
import { rateLimit} from 'express-rate-limit';
import {join} from "path";

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

app.disable('x-powered-by');

app.use('/', express.static(join(__dirname, "..", "../client/dist"), {index: "index.html"}));

app.get("/api", (req, res) => {
  const token = jwt.sign({}, process.env.TOKEN_PRIVATE_KEY as jwt.Secret);
  res.json({ message: token });
});

app.listen(5000);
