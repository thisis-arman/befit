import express, { Application } from 'express'
import cors from 'cors'
import { router } from './app/routes';
import { notFound } from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app :Application= express();
const port = 3000;

app.use(cors())
app.use(express.json());


app.use('/api/v1',router)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/",notFound)
app.use("/",globalErrorHandler)
export default app;
