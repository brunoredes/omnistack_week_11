const { Router } = require('express');
const OngValidator = require('./app/validators/OngValidator');
const ProfileValidator = require('./app/validators/ProfileValidator');
const SessionValidator = require('./app/validators/SessionValidator');
const IncidentValidator = require('./app/validators/IncidentValidator');
const OngController = require('./app/controllers/OngController');
const IncidentController = require('./app/controllers/IncidentController');
const ProfileController = require('./app/controllers/ProfileController');
const SessionController = require('./app/controllers/SessionController');

const routes = Router();

routes.post('/ongs', OngValidator.createOng, OngController.store);
routes.get('/ongs', OngController.index);

routes.post('/sessions', SessionValidator.doLogin, SessionController.store);
routes.get('/profile', ProfileValidator.Auth, ProfileController.index);

routes.get(
  '/incidents',
  IncidentValidator.getIncident,
  IncidentController.index
);
routes.post(
  '/incidents',
  IncidentValidator.postIncident,
  IncidentController.store
);
routes.delete(
  '/incidents/:id',
  IncidentValidator.deleteIncident,
  IncidentController.delete
);

module.exports = routes;
