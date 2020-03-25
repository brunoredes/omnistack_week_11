const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const routes = require('./routes');
const openApiDocumentation = require('./openApiDocumentation');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

app.listen(3333);
