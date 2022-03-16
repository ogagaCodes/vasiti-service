const Joi = require("joi").extend(require("@joi/date"));


exports.deleteProductSchema = Joi.object({
    id: Joi.number().positive().required(),
});

exports.saveProductSchema = Joi.object({
    id: Joi.number().optional(),
    product_name: Joi.string().required(),
    product_description: Joi.string().required(),
    product_varieties: Joi.string().required(),
    date_uploaded: Joi.date().utc().required(),
    endDate: Joi.date().format('YYYY-MM-DD').utc().optional(),
});
exports.listRafflesSchema = Joi.object({
    page: Joi.number().min(1).required(),
    limit: Joi.number().min(1).max(100),
  });
  exports.updateRaffleSchema = Joi.object({
    isActive: Joi.boolean().optional(),
    title: Joi.string().optional(),
    price: Joi.string().optional(),
    start_date: Joi.date().format('YYYY-MM-DD').utc().optional(),
    end_date: Joi.date().format('YYYY-MM-DD').utc().optional(),
});

exports.turnOffRaffleSchema = Joi.object({
    id: Joi.objectId().required()
  });