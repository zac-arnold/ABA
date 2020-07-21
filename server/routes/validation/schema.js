const Joi = require('@hapi/joi')

const schema = Joi.object().keys({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(15)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string()
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$'))
})

module.exports = schema
