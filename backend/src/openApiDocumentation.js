const openApiDocumentation = {
  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'Semana Omnistack 11',
    description: 'User management API',
    contact: {
      name: 'Semana Omnistack 11',
      url: 'github.com/brunoredes/omnistack_week_11',
    },
    license: {
      name: 'ISC',
      url: 'https://opensource.org/licenses/ISC',
    },
  },
  servers: [
    {
      url: 'http://localhost:3333/',
      description: 'Be the hero Backend',
    },
  ],
  tags: [
    {
      name: 'Ongs operations',
    },
    {
      name: 'Incidents',
    },
  ],
  paths: {
    '/ongs': {
      post: {
        tags: ['Ongs operations'],
        description: 'Create Ongs',
        operationId: 'createOngs',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Ongs',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'New Ong created',
          },
          '400': {
            description: 'Invalid parameters',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'User identificationNumbers 10, 20 already exist',
                  internal_code: 'invalid_parameters',
                },
              },
            },
          },
        },
      },
      get: {
        tags: ['Ongs operations'],
        description: 'List of NGOs',
        operationId: 'ListOngs',
        responses: {
          '200': {
            description: 'List of NGOs',
          },
          '404': {
            description: 'NGO not found',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
              },
            },
          },
        },
      },
    },
    '/profile': {
      get: {
        tags: ['Incidents'],
        description: 'List of incidents from ongs',
        operationId: 'listIncidongs',
        parameters: [],
        responses: {
          '200': {
            description: 'List of incidents from NGOs',
          },
          '404': {
            description: 'No list of incidents to this NGO',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
              },
            },
          },
        },
      },
    },
    '/incidents': {
      post: {
        tags: ['Incidents'],
        description: 'Create incident',
        operationId: 'createIncident',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Incidents',
              },
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Incident created',
          },
          '400': {
            description: 'Invalid parameters',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: '',
                  internal_code: 'invalid_parameters',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'Internal Server Error',
                  internal_code: 'invalid_parameters',
                },
              },
            },
          },
        },
      },
      get: {
        tags: ['Incidents'],
        description: 'Get incident',
        operationId: 'getIncident',
        responses: {
          '200': {
            description: 'List of incidents',
          },
          '400': {
            description: 'Invalid parameters',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
              },
            },
          },
        },
      },
    },
    '/incidents/{id}': {
      delete: {
        tags: ['Incidents'],
        description: 'Delete incident',
        operationId: 'deleteIncident',
        parameters: [
          {
            name: 'id',
            in: 'path',
            type: 'integer',
          },
        ],
        responses: {
          '204': {
            description: 'Incident deleted',
          },
          '400': {
            description: 'Invalid parameters',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'Operation not permited',
                  internal_code: 'invalid_parameters',
                },
              },
            },
          },
          '500': {
            description: 'Internal Error Server',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'Internal error server',
                  internal_code: 'internal_error_server',
                },
              },
            },
          },
        },
      },
    },
    '/sessions': {
      post: {
        tags: ['Ongs operations'],
        description: 'Ong login',
        operationId: 'ong_login',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Session',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'Logged succesfully',
          },
          '401': {
            description: 'Unauthorized',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'Unauthorized to do login',
                  internal_code: 'invalid_parameters',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'Internal Server Error',
                  internal_code: 'invalid_parameters',
                },
              },
            },
          },
        },
      },
    },
  },
  security: [
    {
      ApiKeyAuth: [],
    },
  ],
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'authorization',
      },
    },
    schemas: {
      Session: {
        type: 'object',
        properties: {
          id: {
            $ref: '#/components/schemas/ong_id',
          },
        },
      },
      Ongs: {
        type: 'object',
        properties: {
          id: {
            $ref: '#/components/schemas/ong_id',
          },
          name: {
            $ref: '#/components/schemas/name',
          },
          email: {
            $ref: '#components/schemas/email',
          },
          whatsapp: {
            $ref: '#/components/schemas/whatsapp',
          },
          city: {
            $ref: '#/components/schemas/city',
          },
          uf: {
            $ref: '#/components/schemas/uf',
          },
        },
      },
      Incidents: {
        type: 'object',
        properties: {
          title: {
            $ref: '#/components/schemas/title',
          },
          description: {
            $ref: '#/components/schemas/description',
          },
          value: {
            $ref: '#/components/schemas/value',
          },
        },
      },
      ong_id: {
        type: 'string',
        description: 'Ong ID',
        example: 'd47idhd',
      },
      name: {
        type: 'string',
        example: 'Ong Name',
      },
      email: {
        type: 'string',
        example: 'Ong Mail',
      },
      whatsapp: {
        type: 'string',
        description: 'Ong Whatsapp',
      },
      city: {
        type: 'string',
        description: 'City of ong',
      },
      uf: {
        type: 'string',
        description: 'Uf of ong',
      },
      title: {
        type: 'string',
        description: 'Title of incident',
      },
      description: {
        type: 'string',
        description: 'Description of incident',
      },
      value: {
        type: 'integer',
        description: 'Value of incident',
      },
      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
          },
          internal_code: {
            type: 'string',
          },
        },
      },
    },
  },
};

module.exports = openApiDocumentation;
