/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from 'express';

import cors from 'cors';

import cookieParser from 'cookie-parser';
import router from './app/routes';

// const express = require('express');

const app: Application = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: 'https://clever-kitten-d5efcc.netlify.app', credentials: true }));

//application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

export default app;
