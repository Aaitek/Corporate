'use strict';

/**
 * contact-submission controller
 * Using default Strapi behavior - email notifications handled in lifecycle hook
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-submission.contact-submission');
