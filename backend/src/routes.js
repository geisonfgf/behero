const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const validations = require('./middlewares/validations');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', validations.ongCreateEndpoint, OngController.create);

routes.get('/Profile', validations.ongProfileEndpoint, ProfileController.index);

routes.get('/incidents', validations.ongIncidentsEndpoint, IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', validations.ongIncidentsIdEndpoint, IncidentController.delete);

module.exports = routes;