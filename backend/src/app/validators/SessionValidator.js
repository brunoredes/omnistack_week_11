const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  doLogin() {
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
      }),
    });
  },
};
