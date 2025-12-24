'use strict';

/**
 * managed-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::managed-service.managed-service');

