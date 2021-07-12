// var express = require('express'); // (npm install --save express)
// var request = require('supertest');

// function createApp() {
//   app = express();

//   var router = express.Router();
//   router.route('/').get(function(req, res) {
//     return res.json({success: true});
//   });

//   app.use(router);

//   return app;
// }

// describe('Flickr Get Photos server', function() {
//   var app;

//   // Called once before any of the tests in this block begin.
//   before(function(done) {
//     app = createApp();
//     app.listen(function(err) {
//       if (err) { return done(err); }
//       done();
//     });
//   });

//   it('should send back a photos JSON object when api/images called', function() {
//     request(app)
//       .get('/server')
//       .set('Content-Type', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, function(err, res) {
//         if (err) { return done(err); }
//         callStatus = res.body.success;
//         expect(callStatus).to.equal(true);
//         // Done
//         done();
//       });
//   });

// });