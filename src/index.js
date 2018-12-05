import 'babel-polyfill';
import express from  'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes/index';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();
require('./helpers/redisEndpoints')(app)

app.use(
    '/api',
    proxy('http://192.170.12.66:8080', {  // enter API URI here
      proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
      }
    })
  );// 2nd option (proxyRepOptDecoraor) not required, it is used here for google oauth flow

// it tells that client public is available and can now generate the html
app.use(express.static('public'));  
app.get('*', (req, res) => {    
    const store = createStore(req); //req is sent for cookies
    // logic to initialize and load data to store
    const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});


