const Joi = require('joi');
const express = require('express');
const { request } = require('express');
const app = express();
var axios = require('axios');
const crypto = require("crypto");
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

app.use(express.json());

// Authorization middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and 
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://YOUR_DOMAIN/.well-known/jwks.json` //<-----------ADD YOUR OWN---------------
  }),

  // Validate the audience and the issuer.
  audience: 'YOUR_API_IDENTIFIER', //<-----------ADD YOUR OWN---------------
  issuer: [`https://YOUR_DOMAIN/`], //<-----------ADD YOUR OWN---------------
  algorithms: ['RS256']
});

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
];

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/secure', checkJwt, (req, res) => {
  res.send('This is a secure connection');
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.post('/api/courses', (req, res) => {  
  const { error } = validateCourse(req.body);
  if ( error ) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given ID was not found');

  res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given ID was not found');    

  const { error } = validateCourse(req.body);
  if ( error ) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given ID was not found');

  //Delete
  const index = courses.indexOf(course);
  console.log(index);
  courses.splice(index, 1);

  //return the same course
  res.send(course);
});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });

  return schema.validate(course);
}

app.get('/api/hipster-ipsum', (req, res) => {
  
  var config = {
    method: 'get',
    url: 'http://hipsum.co/api/?type=hipster-centric&sentences=3',
    headers: { }
  };

  axios(config)
  .then(function (response) {    
    body = JSON.stringify(response.data);    
    
    res.send(body);
  })
  .catch(function (error) {
    console.log(error);
    res.send(error);
  });
  
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}...`));


