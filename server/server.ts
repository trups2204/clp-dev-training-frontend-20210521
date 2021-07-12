import express from 'express';
import path from 'path';
import interceptor from 'express-interceptor';
import axios from 'axios';
import {_} from 'lodash';

import { exampleRoute } from './routes/example';

const port = 5000;
const root = path.resolve(__dirname, '..');
const app = express();

const publicEnvVars = {
  SERVER_API: process.env.SERVER_API,
  NPM_PACKAGE_NAME: process.env.npm_package_name,
  FLICKR_API_KEY: process.env.FLICKR_API_KEY,
  FLICKR_API_URL:process.env.FLICKR_API_URL,
  FLICKR_GET_PHOTOS_METHOD: process.env.FLICKR_GET_PHOTOS_METHOD
};


// set up a little middleware helper to inject some values into the served HTML, replacing
// pre-defined template vars we've put in there
const htmlInterceptor = interceptor((req, res) => {
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  return {
    isInterceptable: () => res.get('Content-Type').includes('text/html'),
    intercept: (body, send) => {
      const bodyReplace = body.replace(
        '{{envVars}}',
        JSON.stringify(publicEnvVars).replace(/"/g, '\\"')
      );
      send(bodyReplace);
    },
  };
});
export const fetchImages = (tag, req)=> {
  return axios({
    method: 'get',
    url: publicEnvVars.FLICKR_API_URL,
    params: {
      method:publicEnvVars.FLICKR_GET_PHOTOS_METHOD,
      api_key: publicEnvVars.FLICKR_API_KEY,
      tags: tag,
      extras: 'url_n, owner_name, date_taken, views',
      page: 1,
      format: 'json',
      nojsoncallback: 1,
      per_page: 30,
    }
  })
};
export const mapPhotosData =(data) =>{
  var result = _.map(data, function(photo) {
    return _.pick(photo, 'url_n','title','ownername','id');
  });
  return result;

}
app.use(htmlInterceptor);
app.use('/images', express.static(`${root}/server/public`));

app.use('/', express.static(`${root}/server/public`));
app.use('/public', express.static(`${root}/server/public`));

app.get('/api', exampleRoute);
app.get('/api/images', function(req, res) {

 fetchImages(req.query.tag, req)
    .then((response) => {
      res.json(mapPhotosData(response.data.photos.photo));
  })
});


app.get('/health', (req, res) =>
  res
    .status(200)
    .type('application/json')
    .send({
      uptime: process.uptime(),
      uptimeUnit: 'seconds',
    })
    .end()
);

app.listen(port, () => {
  console.log(`CLP Dev Training Frontend Node server running (port ${port})`);
});


// Global catcher just in case something unexpected breaks (maybe from 3rd party library)
/* istanbul ignore next */
process.on('uncaughtException', (err) => {
  // eslint-disable-next-line
  console.error('UNCAUGHT EXCEPTION', `[Inside 'uncaughtException' event] ${err.message}`, err.stack);
});
