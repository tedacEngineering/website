# TEDAC Engineering Limited: company website

React 18 + Vite + Tailwind CSS + React Router. Domain: **tedacengineering.com**

## 1. Run locally
```bash
npm install
cp .env.example .env      # then add your form endpoint (see section 3)
npm run dev               # http://localhost:5173
npm run build             # production build in /dist
npm run preview           # test the production build
```
Requires Node 18+.

## 2. Replace demo content and images
| What | Where |
|---|---|
| Company details, services, policies, partners, projects, news, team, jobs, stats | `src/data/site.js` (sample sections are marked at the top of the file) |
| Photos | Drop real files in `public/images/`, then add the file name to the `REAL` map in `src/data/images.js`. Example: `'hero-1': '/images/hero-1.jpg'` |
| Partner logos | Put the logo in `public/images/` and set `logo: '/images/jompa.png'` on that partner in `site.js` |
| Social links and email | `SITE` object in `site.js` (the email is a placeholder: confirm with the client) |

Image names in use: `hero-1..3`, `about-1..3`, `service-1..9`, `project-1..6`, `news-1..3`, `industry-1..4`, `team-1..4`, `careers-1`, `contact-1`, `cta-1`, `hse-1`, `process-1`. Recommended size: 1600x1000 or larger (team photos 4:5).
Create `public/og-image.jpg` (1200x630) for link previews on WhatsApp, LinkedIn and Facebook.
To regenerate the demo images: `python3 scripts/generate_placeholders.py`.

## 3. Admin: let the client edit news and jobs (Sanity CMS)
The site reads news and job openings from Sanity (free plan is enough). Edits appear on the live site within seconds, with no rebuild.
1. Create a free project at https://www.sanity.io/manage. Note the **Project ID**; keep the dataset `production`.
2. In the same dashboard open **API, CORS origins** and add `https://tedacengineering.com`, `https://www.tedacengineering.com` and `http://localhost:5173` (tick "Allow credentials" off).
3. Website: put the ID in `.env` as `VITE_SANITY_PROJECT_ID=...` (and in your host's environment variables).
4. Studio (the admin screen):
```bash
cd studio
npm install
cp .env.example .env     # set SANITY_STUDIO_PROJECT_ID
npm run dev              # local admin at http://localhost:3333
npm run deploy           # publishes a hosted admin, e.g. https://tedac.sanity.studio
```
5. In Manage, Members: invite the client by email. They log in at the studio URL and use **News article** and **Job opening**. "Show on website" hides a job without deleting it.

Until a project ID is set (or if Sanity is unreachable) the site shows the demo news and jobs from `src/data/site.js`. Once connected, only Sanity content is shown.

## 4. Forms (contact, quote requests, job applications)
1. Create a free form at https://formspree.io (or Getform / Basin) and set the notification email to the client's inbox.
2. Copy the endpoint URL into `.env` as `VITE_FORM_ENDPOINT=https://formspree.io/f/xxxx`.
3. Add the same variable in your host's dashboard (Vercel/Netlify: Environment Variables) before building.

Without an endpoint, forms fall back to opening the visitor's email app. CV uploads need a plan that supports file uploads (Formspree paid plans), or use your own API endpoint that accepts `multipart/form-data`.

## 5. Deploy to tedacengineering.com
**Option A: Vercel (recommended, free)**
1. Push the project to GitHub. Import it at vercel.com (framework: Vite; build `npm run build`; output `dist`).
2. Add `VITE_FORM_ENDPOINT` under Settings, Environment Variables.
3. Settings, Domains: add `tedacengineering.com` and `www.tedacengineering.com`.
4. At the domain registrar set `A` record `@` to `76.76.21.21` and `CNAME` `www` to `cname.vercel-dns.com`. HTTPS is automatic. `vercel.json` already handles page refreshes.

**Option B: Netlify**: build `npm run build`, publish `dist`. `public/_redirects` is included. Add the domain under Domain management.

**Option C: cPanel / shared hosting**: run `npm run build`, upload the *contents* of `dist/` (including the hidden `.htaccess`) to `public_html`. Enable SSL (AutoSSL / Let's Encrypt).

After launch: submit `https://tedacengineering.com/sitemap.xml` to Google Search Console, create a Google Business Profile for the Port Harcourt address, and re-check the sitemap if you add pages.

## 6. SEO notes
Per-page titles, descriptions, canonical URLs, Open Graph tags and Organization JSON-LD are handled by `src/components/Seo.jsx`. Because this is a single-page app, Google renders it with JavaScript. For stronger SEO later, add pre-rendering (for example `vite-react-ssg` or Netlify/Vercel prerendering).

## 7. Structure
```
src/
  components/  Navbar, Footer, Layout, Logo, Seo, Forms, Ui (shared blocks)
  pages/       Home, About, Services, ServiceDetail, Projects, News, NewsPost, Careers, Contact, Policies, Partners, NotFound
  data/        site.js (content), images.js (image map)
  hooks/       useForm.js, useContent.js (Sanity news and jobs)
  lib/         sanity.js
studio/        Sanity admin (schemas for news and jobs)
```
Design language: engineering-drawing sheet (zone-marked frame, dimension-line labels, corner brackets, clipped corners echoing the logo, flowing pipe divider). Palette: navy `#0B1F3F`, gold `#E8A90E`, steel blue `#2F7FD1`, sheet grey `#EEF1F5`. Type: Playfair Display (headings), Manrope (body and numbers), IBM Plex Mono (drawing annotations).
