# Import Data to Strapi

This guide shows you how to import the fallback products and case studies data into Strapi without deleting existing data.

## Products to Import

The following products are available in `src/data/productsData.js` and should be imported into Strapi:

1. **AI Sales Agent** (slug: `ai-sales-agent`)
2. **AI Booking Agent** (slug: `ai-booking-agent`)
3. **AI Trade Strategy Agent** (slug: `ai-trade-strategy-agent`)
4. **AI Restaurant Agent** (slug: `ai-restaurant-agent`)
5. **AI Real Estate Agent** (slug: `ai-real-estate-agent`)
6. **AI Dental Assistant** (slug: `ai-dental-assistant`)
7. **AI Field Service Agent** (slug: `ai-field-service-agent`)
8. **AI Automation Platform** (slug: `ai-automation-platform`) - Coming Soon
9. **Enterprise Integration Hub** (slug: `enterprise-integration-hub`) - Coming Soon
10. **Industry AI Accelerators** (slug: `industry-ai-accelerators`) - Coming Soon

## Case Studies to Import

The following case studies should be imported into Strapi:

1. **Enterprise DXP Modernisation for a Public Sector Organisation** (slug: `enterprise-dxp-modernisation-public-sector`)
2. **AI-Driven Platform for Customer Engagement in Financial Services** (slug: `ai-driven-platform-financial-services`)
3. **Cloud Migration for a High-Traffic Media Platform** (slug: `cloud-migration-high-traffic-media`)

## How to Import

### Option 1: Manual Import via Strapi Admin

1. Log into Strapi Admin: `https://aaitek-production.up.railway.app/admin`
2. Navigate to **Content Manager**
3. Select **Product** or **Case Study** collection type
4. Click **Create new entry**
5. Fill in the fields based on the data structure below
6. Click **Save** and then **Publish**

### Option 2: Bulk Import (Recommended)

You can use Strapi's import feature or create entries via API. Here's the data structure:

#### Product Structure:
```json
{
  "title": "AI Sales Agent",
  "slug": "ai-sales-agent",
  "description": "Sales teams lose time on manual follow-ups...",
  "category": "AI Agent",
  "features": ["Automated lead qualification", "Context-aware sales conversations", ...],
  "pricing": {}
}
```

#### Case Study Structure:
```json
{
  "title": "Enterprise DXP Modernisation for a Public Sector Organisation",
  "slug": "enterprise-dxp-modernisation-public-sector",
  "client": "Public Sector Organisation",
  "industry": "Government",
  "category": "cloud",
  "description": "A comprehensive digital experience platform...",
  "fullContent": "<p>This case study demonstrates...</p>",
  "results": {
    "Performance Improvement": "300%",
    "Cost Reduction": "40%",
    "User Satisfaction": "95%"
  },
  "technologies": ["DXP", "Cloud", "AWS"]
}
```

## Notes

- **Don't delete existing data** - Only add new entries
- Make sure to **Publish** entries after creating them
- Images can be uploaded separately in Strapi's Media Library
- The frontend will automatically use Strapi data if available, otherwise it falls back to hardcoded data
