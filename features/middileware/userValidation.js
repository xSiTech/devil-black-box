import Joi from "joi";

const createUserSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  mobileNumber: Joi.string()
    .regex(/^\d{10}$/)
    .required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
  city: Joi.string().required(),
  area: Joi.string().required(),
  state: Joi.string().required(),
  country: Joi.string().required(),
});

const updateUserSchema = Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email(),
    mobileNumber: Joi.string()
      .regex(/^\d{10}$/)
      ,
    latitude: Joi.number(),
    longitude: Joi.number(),
    city: Joi.string(),
    area: Joi.string(),
    state: Joi.string(),
    country: Joi.string(),
  });

export const createUserValidation = (req, res, next) => {
    const {error} = createUserSchema.validate(req.body);

    if(error){
      return res.status(400).json({ status: 400, message: error.details[0].message });
    }
    next();
}

export const updateUserValidation = (req, res, next) => {
    const {error} = updateUserSchema.validate(req.body);

    if(error){
      return res.status(400).json({ status: 400, message: error.details[0].message });
    }
    next();
}