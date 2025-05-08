# 🌿 Veda Aesthetica Clinic – Official Website

This is the official website for **Veda Aesthetica Clinic**, built with [Astro](https://astro.build/), Tailwind CSS, and modern frontend practices. It offers a fast, responsive, SEO-optimized experience to showcase the clinic's aesthetic treatments, services, testimonials, and more.

## 🧠 Features

- Static Site Generator using Astro
- SEO-optimized meta and OpenGraph tags
- Lazy-loaded images and testimonials
- Responsive layout with Tailwind CSS
- Structured data with Schema.org for Google
- Integration-ready for AdSense, GTM, Reddit & Discord
- Easily update JSON-based content without rebuilding

---

## 🛠 Project Structure

```

project/
├── public/
│   ├── images/
│   └
├── src/
│   ├── Assets/
│       ── data/
│       ├── testimonials.json
│       ├── socials.json
│       └── services.json
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
└── README.md

````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Dhaivat-Raval/VedaWellness.git
cd VedaWellness
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run in Development Mode

```bash
npm run dev
```

Your site should now be running at [http://localhost:4321](http://localhost:4321)

---

## 🔁 Updating the Site

### ✏️ Update Static Content (e.g., Pages or Layouts)

Edit files inside `src/pages` or `src/components`. All changes require rebuilding.
 

---

### 📝 Update JSON Content

If you want to update the data for services, socials or testimonials you will need to update the appropriate json files from the `src/asstes/data` folder


#### Recommended Method:

1. **Update data files in the `src/asstes/data` folder**:

   ```
   src/asstes/data/testimonials.json
   src/asstes/data/services.json
   src/asstes/data/social.json
   ```

2. **Rebuild the project using build commands.**:

## 🧱 Build for Production

```bash
npm run build
```

This will generate a `dist/` folder containing the final static site.

To preview the production build locally:

```bash
npm run preview
```

---

## 📦 Deployment

Upload the `dist/` folder contents to your server (e.g., cPanel, Netlify, Vercel, Cloudflare Pages, etc.).

---

## 📂 Adding New Assets

* To add new assets you will need to update the json data which will require rebuilding the project.

---

## 📈 Optional Integrations

### Google Tag Manager

Uncomment GTM scripts in `src/layouts/Layout.astro` and replace `GTM-XXXXXXX`.

### Google AdSense

Replace the ad container with AdSense script inside `TestimonialSection.astro` or any layout.

### Embed for Reddit and Discord

Add these tags to `<head>` of your `Layout.astro` if you want others to embed your site.

#### Reddit Embed

```html
<meta property="og:site_name" content="Veda Aesthetica Clinic" />
<meta property="og:title" content="Premium Aesthetic Treatments in Rajkot" />
<meta property="og:description" content="Experience modern skin treatments and beauty care in Rajkot." />
<meta property="og:image" content="https://www.example.com/images/veda-aesthetica.png" />
```

#### Discord Embed (uses Open Graph)

Discord auto-parses OG tags, so just ensure your existing OG tags are present and correct.

---

## 🙋‍♂️ Maintainers

* **Developer:** [Darshit Limbad](https://github.com/darshitlimbad)

For help or issues, raise an issue or email us.

---
