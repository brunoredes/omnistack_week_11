const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  Auth() {
    celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
    });
  },
};
