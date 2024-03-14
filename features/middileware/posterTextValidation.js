import Joi from "joi";

const createPosterTextSchema = Joi.object({
  text: Joi.string().required(),
  x: Joi.string().required(),
  y: Joi.string().required(),
  color: Joi.string().required(),
  font_family: Joi.string().required(),
  size: Joi.string().required(),
  font_size: Joi.number().required(),
  poster_id: Joi.string().required(),
  field_name: Joi.string().required(),
});

const updatePosterTextSchema = Joi.object({
    text: Joi.string(),
    x: Joi.string(),
    y: Joi.string(),
    color: Joi.string(),
    font_family: Joi.string(),
    size: Joi.string(),
    font_size: Joi.number(),
    poster_id: Joi.string(),
    field_name: Joi.string(),
  });

export const createValidPostertext = (req, res, next) => {
  const { error } = createPosterTextSchema.validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ status: 400, message: error.details[0].message });
  }
  next();
};

export const updateValidPostertext = (req, res, next) => {
  const { error } = updatePosterTextSchema.validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ status: 400, message: error.details[0].message });
  }
  next();
};
