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

const posterSchema = Joi.object({
  height:Joi.number().required(),
  width: Joi.number().required(),
  slug: Joi.string().required(),
  createdBy: Joi.required(),
  updatedBy: Joi.required(),
});

const posterpersonSchema = Joi.object({
  x:Joi.string().required(),
  y:Joi.string().required(),
  height:Joi.number().required(),
  width: Joi.number().required(),
  poster_id:Joi.required(),
  field_name: Joi.string().required()
});

const posterTextSchema = Joi.object({
  text: Joi.string().required(),
  x: Joi.string().required(),
  y: Joi.string().required(),
  color: Joi.string().required(),
  font_family: Joi.string().required(),
  size: Joi.string().required(),
  font_size: Joi.number().required(),
  poster_id: Joi.required(),
  field_name: Joi.string().required()
});


export const validUser = (req, res, next) => {
    const {error} = schema.validate(req.body);

    if(error){
      return res.status(400).json({ status: 400, message: error.details[0].message });
    }
    next();
}

export const validPoster = (req,res, next) => {
  const {error} = posterSchema.validate(req.body);
  if(error) {
    return res.status(400).json({ status: 400, message: error.details[0].message });
  }
  next();
}

export const validPersonImage = (req, res , next) => {
  const {error} = posterpersonSchema.validate(req.body);

  if(error){
    return res.status(400).json({ status: 400, message: error.details[0].message });
  }
  next();
}

export const validPostertext = (req, res, next) => {
  const {error} = posterTextSchema.validate(req.body);

  if(error) {
    return res.status(400).json({ status: 400, message: error.details[0].message });
  }
  next();
}
