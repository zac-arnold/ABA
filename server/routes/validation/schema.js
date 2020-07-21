const Joi = require('@hapi/joi')

const schema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(15)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
})

module.exports = schema
