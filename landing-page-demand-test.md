# Fractional Brome Landing Page Demand Test

## Concept Snapshot
- **Positioning**: Flexible fractional ownership platform that lets aspiring homeowners buy a share of a high-demand property, earn rental income, and exit on their own timeline.
- **Primary Audience**: High-earning renters, real-estate curious millennials, and investors seeking low-friction diversification.
- **Core Promise**: "Own the best homes without the full mortgage." Immediate wealth-building access, vetted properties, and managed operations.

## Page Structure & Messaging
1. **Hero Section**
   - Headline: "Own your share of a dream home in weeks, not years."
   - Subheadline: "Fractional Brome vets properties, manages tenants, and handles resale so you can build equity from day one."
   - Primary CTA button: `Request Early Access`
   - Secondary CTA (anchor to education section): `How fractional ownership works`
   - Social proof: rotating counter (e.g., "2,400 people joined the waitlist")

2. **Trust & Credibility Band**
   - Short logos: press mentions or placeholder badges.
   - Quick stats: "Avg. 6.8% projected net yield", "Exit windows every 90 days", "Legal structure aligned with SEC guidelines" (test different claims for conversion).

3. **How It Works (3 Steps)**
   - Step 1: Browse pre-vetted properties with transparent financials.
   - Step 2: Choose your fractional stake (starting at 5%).
   - Step 3: Earn rental income and track appreciation in your dashboard.
   - Include micro-CTA under each step (e.g., `See sample property`).

4. **Featured Property Carousel**
   - Cards with property photo, location, share price, projected annual yield, exit window, occupancy rate.
   - CTA within each card: `Reserve a share` (gates to lead form).

5. **Value Proposition Grid**
   - Managed operations, legal compliance, short exit horizons, instant diversification, transparent fees, secure digital onboarding.
   - One tile dedicated to "What makes us comparable to REITs but better" to address investor objections.

6. **Risk & Safety Section**
   - Transparent fee disclosure.
  - Explanation of legal entity structure (Series LLC / Trust).
   - Insurance and property management partners.
   - FAQ accordion to cover liquidity, taxation, governance, exit process.

7. **Social Proof & Testimonials**
   - Quotes from beta users/investors.
   - Short video testimonial thumbnail.
   - Metrics like "Average investor onboarded in 14 minutes".

8. **Education Funnel**
   - Quick comparison chart: Buying outright vs. REIT vs. Fractional Brome.
   - Downloadable guide gated behind email to boost lead capture.

9. **Waitlist Capture Section**
   - Form fields: First name, email, net worth range, intended investment range, property type interest.
   - Optional "Accredited investor" toggle.
   - Consent checkbox for updates and term acceptance.

10. **Footer**
    - Links: Product, Legal documentation, Careers, FAQ, Contact.
    - Compliance disclaimer and risk statement.
    - Trust badges (SOC2, escrow partner, legal counsel).

## Experiment Elements
- **Hero Variant Test**: Value-focused vs. wealth-growth vs. lifestyle positioning.
- **CTA Copy Test**: `Request Early Access` vs. `Join the Waitlist` vs. `See Investment Terms`.
- **Social Proof Treatments**: Waitlist count vs. investor testimonial vs. media logos.
- **Form Length Test**: Minimal field set vs. deeper qualification questions (investable assets, timeline).

## Data Capture & Tools
- **Analytics**: GA4, Mixpanel funnel to track hero CTA clicks, property card engagement, guide downloads.
- **Session Replay**: FullStory or Hotjar to observe friction.
- **Form Handling**: Webflow native form or Typeform embed → Zapier → Airtable/HubSpot for segmentation.
- **Priority Events**:
  1. `hero_cta_click`
  2. `property_card_view`
  3. `form_submission`
  4. `guide_download`
  5. `waitlist_confirmation`

## Lead Nurture Flow
- **Instant Response**: Thank-you page with confirmation, short survey on investment goals, and calendar link for optional consult.
- **Email Sequence**:
  1. Welcome email with concept overview and top FAQ.
  2. Property highlight + projected returns.
  3. Risk mitigation focus + legal structure deep dive.
  4. Scarcity trigger once launch nears ("only 200 Early Access spots").
- **Retargeting**: Upload captured emails to custom audiences; deploy paid social retargeting with dynamic property visuals.

## Success Metrics
- Primary metric: Waitlist conversion rate (unique sessions to form submissions).
- Secondary metrics: Guide downloads, property card interactions, hero CTA click-through, consult booking rate.
- Benchmarks: Aim for 5–8% waitlist conversion, 35% hero CTA CTR, 20% guide download-to-lead progression.

## Content & Creative Needs
- High-quality property imagery (3–5 hero-grade shots, studios with consistent styling).
- Brand palette: warm neutrals with deep green accent; fonts pairing: modern sans for headlines, readable serif for body copy.
- Icon set illustrating trust, transparency, liquidity, diversification.
- 30-second explainer animation focusing on ownership process.

## Marketing Channels for Traffic
- Paid social (Meta, LinkedIn) targeted to high-income renters and tech professionals.
- Partnerships with real-estate newsletters (The Basis Point, CRE Daily).
- Organic content (LinkedIn thought leadership, blog posts about fractional ownership benefits).
- PR outreach to fintech and proptech outlets.
- Referral program: early waitlist members get priority allocation for qualified referrals.

## Launch Checklist
- Publish landing page (Webflow/Squarespace custom template).
- QA analytics and event tracking in staging before pushing live.
- Confidence copy and compliance review.
- Test all CTAs, forms, and email automation.
- Set up retargeting audiences and creative assets.
- Monitor daily for first two weeks; run weekly experiment review.
