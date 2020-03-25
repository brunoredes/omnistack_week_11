const { Router } = require('express');
const OngController = require('./app/controllers/OngController');
const IncidentController = require('./app/controllers/IncidentController');
const ProfileController = require('./app/controllers/ProfileController');

const routes = Router();

routes.post('/ongs', OngController.store);
routes.get('/ongs', OngController.index);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
