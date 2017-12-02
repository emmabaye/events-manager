import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './routes/v1/index';
import cors from 'cors';


const app = express();

app.use(cors({credentials: true, origin: true}));
app.use('/', express.static(process.cwd() + '/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config();

const port = process.env.PORT || 3000;

routes(app);

app.listen(port, () => {
  console.log('Server listening on port ', port);
});

export default app;
