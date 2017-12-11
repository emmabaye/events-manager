import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import config from '../webpack.config';
import bodyParser from 'body-parser';
import routes from './routes/v1/index';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({credentials: true, origin: true}));

if(process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, { noInfo: false, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}
app.use(express.static(process.cwd() + '/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.listen(port, () => {
  console.log('Server listening on port ', port);
});

export default app;
