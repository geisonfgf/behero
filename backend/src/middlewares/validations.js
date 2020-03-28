const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    ongCreateEndpoint: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.string().required().length(11),
            city: Joi.string().required(),
            uf: Joi.string().required().length(2),
        })
    }),

    ongProfileEndpoint: celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown()
    }),

    ongIncidentsEndpoint: celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number(),
        })
    }),

    ongIncidentsIdEndpoint: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().required(),
        })
    }),
}