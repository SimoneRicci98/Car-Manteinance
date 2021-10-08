import express from 'express';
import QueriesRouter from './routes/queries.js';
import cors from 'cors';

const app = express();



app.use(express.urlencoded({extended : true}));
app.use(express.json({extended : true}));
app.use(cors());

app.use("/Query",QueriesRouter);

app.listen(5000);