import Joi from "joi";

const ceatePosterImageSchema = Joi.object({
  x: Joi.string().required(),
  y: Joi.string().required(),
  height: Joi.number().required(),
  width: Joi.number().required(),
  poster_id: Joi.required(),
  field_name: Joi.string().required(),
});

const updatePosterImageSchema = Joi.object({
    x: Joi.string(),
    y: Joi.string(),
    height: Joi.number(),
    width: Joi.number(),
    poster_id: Joi.string(),
    field_name: Joi.string(),
  });

export const createValidPosterImage = (req, res, next) => {
  const { error } = ceatePosterImageSchema.validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ status: 400, message: error.details[0].message });
  }
  next();
};

export const updateValidPosterImage = (req, res, next) => {
    const { error } = updatePosterImageSchema.validate(req.body);
  
    if (error) {
      return res
        .status(400)
        .json({ status: 400, message: error.details[0].message });
    }
    next();
  };
