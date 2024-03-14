import Joi from "joi";

const createPosterSchema = Joi.object({
  height: Joi.number().required(),
  width: Joi.number().required(),
  slug: Joi.string().required(),
  createdBy: Joi.required(),
  updatedBy: Joi.required(),
});

const updatePosterSchema = Joi.object({
    height: Joi.number(),
    width: Joi.number(),
    slug: Joi.string(),
    createdBy: Joi.required(),
    updatedBy: Joi.required(),
  });

export const createValidPoster = (req, res, next) => {
  const { error } = createPosterSchema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ status: 400, message: error.details[0].message });
  }
  next();
};

export const updateValidPoster = (req, res, next) => {
    const { error } = updatePosterSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ status: 400, message: error.details[0].message });
    }
    next();
  };
  