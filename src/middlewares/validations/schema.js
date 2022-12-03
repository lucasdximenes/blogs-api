const Joi = require('joi');

const loginBodySchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be a string',
    'string.email': 'Email must be a valid email',
    'string.empty': 'Email cannot be empty',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.base': 'Password must be a string',
    'string.min': 'Password must be at least 6 characters long',
    'string.empty': 'Password cannot be empty',
    'any.required': 'Password is required',
  }),
});

const registerBodySchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.base': '"displayName" must be a string',
    'string.min': '"displayName" length must be at least 8 characters long',
    'string.empty': '"displayName" cannot be empty',
    'any.required': '"displayName" is required',
  }),
  email: Joi.string().email().required().messages({
    'string.base': '"email" must be a string',
    'string.email': '"email" must be a valid email',
    'string.empty': '"email" cannot be empty',
    'any.required': '"email" is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.base': '"password" must be a string',
    'string.min': '"password" length must be at least 6 characters long',
    'string.empty': '"password" cannot be empty',
    'any.required': '"password" is required',
  }),
  image: Joi.string().messages({
    'string.base': '"image" must be a string',
  }),
});

module.exports = {
  loginBodySchema,
  registerBodySchema,
};
