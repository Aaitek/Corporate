'use strict';

/**
 * managed-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::managed-service.managed-service');

