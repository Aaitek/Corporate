'use strict';

/**
 * managed-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::managed-service.managed-service');

