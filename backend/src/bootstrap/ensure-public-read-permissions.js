'use strict';

const READ_ACTIONS = [
  'api::article.article.find',
  'api::article.article.findOne',
  'api::case-study.case-study.find',
  'api::case-study.case-study.findOne',
  'api::managed-service.managed-service.find',
  'api::managed-service.managed-service.findOne',
  'api::product.product.find',
  'api::product.product.findOne',
  'api::service.service.find',
  'api::service.service.findOne',
  'api::testimonial.testimonial.find',
  'api::testimonial.testimonial.findOne',
];

const PUBLIC_ONLY_ACTIONS = ['api::contact-submission.contact-submission.create'];

/**
 * Strapi often stores only *enabled* permissions as rows. Missing row ⇒ no ability ⇒ Forbidden.
 * We create missing rows or set enabled: true on existing rows (public + authenticated).
 */
async function ensureActionsForRole(strapi, roleType, actions) {
  const role = await strapi.query('plugin::users-permissions.role').findOne({
    where: { type: roleType },
  });

  if (!role) {
    strapi.log.warn(`[ensure-public-read] No role with type "${roleType}"`);
    return;
  }

  let created = 0;
  let updated = 0;

  for (const action of actions) {
    const existing = await strapi.query('plugin::users-permissions.permission').findOne({
      where: { action, role: role.id },
    });

    if (!existing) {
      await strapi.query('plugin::users-permissions.permission').create({
        data: { action, role: role.id, enabled: true },
      });
      strapi.log.info(`[ensure-public-read] Created permission ${roleType} → ${action}`);
      created += 1;
      continue;
    }

    if (existing.enabled !== true) {
      await strapi.query('plugin::users-permissions.permission').update({
        where: { id: existing.id },
        data: { enabled: true },
      });
      strapi.log.info(`[ensure-public-read] Enabled permission ${roleType} → ${action}`);
      updated += 1;
    }
  }

  strapi.log.info(
    `[ensure-public-read] Role "${roleType}": ${actions.length} action(s) checked, created ${created}, updated ${updated}`
  );
}

module.exports = async function ensurePublicReadPermissions(strapi) {
  try {
    await ensureActionsForRole(strapi, 'public', [...READ_ACTIONS, ...PUBLIC_ONLY_ACTIONS]);
    await ensureActionsForRole(strapi, 'authenticated', [...READ_ACTIONS]);
  } catch (err) {
    strapi.log.error('[ensure-public-read] Failed to update permissions', err);
  }
};
