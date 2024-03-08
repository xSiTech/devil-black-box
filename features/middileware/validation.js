import Joi from "joi";

const schema = Joi.object({
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

export const validUser = (req, res, next) => {
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).json({ status: 400, message: error.details[0].message });
    }
    next();
}
