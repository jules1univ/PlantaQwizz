import express from "express";

import helmet  from 'helmet';
import { rateLimit} from 'express-rate-limit';


const jwt = require('jsonwebtoken');
const sanitizer = require('express-sanitizer');


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

app.get("/", (req, res) => {
  jwt.
  
  res.json({ message: "hello world !" });
});

app.listen(5000);
