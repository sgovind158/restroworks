# Restroworks

Restroworks is a modern restaurant management SaaS platform, featuring a **Next.js frontend** and a **PayloadCMS backend** powered by MongoDB.  
It supports localization (English/Hindi), dynamic content management, SEO best practices, and more.

---

## 🖥️ Technology Stack

| Category         | Packages / Tools Used                                                                 |
|------------------|--------------------------------------------------------------------------------------|
| **Frontend**         | Next.js (v15+), React (v19+), TypeScript                                      |
| **UI/Styling**       | Tailwind CSS, shadcn/ui, lucide-react                                         |
| **Forms/Validation** | Formik, Yup                                                                   |
| **Utilities**        | axios, react-toastify, motion, clsx, class-variance-authority, tailwind-merge  |
| **Env/Build**        | env-cmd, next-sitemap                                                         |
| **Backend**          | PayloadCMS (Node.js), MongoDB                                                 |

---

## 🚀 Features

- **Next.js App Router** (v15+)
- **Localization (i18n):** English (`en`), Hindi (`hi`)
- **Dynamic Content:** Fetches pages and blocks from PayloadCMS backend
- **SEO Optimized:** Dynamic metadata, sitemap, robots.txt
- **Custom 404, Loading, and Error pages**
- **Contact Form:** Integrated with backend API using Formik for form state management and Yup for validation
- **Image Optimization:** Uses Next.js `<Image />`
- **Tailwind CSS** for styling
- **shadcn/ui** for modern, accessible UI components
- **Contact Form Management:** Store and manage contact form submissions (name, email, message) via the admin panel and API
- **Pages Collection:** Manage dynamic pages and their content for the frontend
- **User Authentication:** Built-in user management and authentication (backend)
- **Media Management:** Upload and manage images/files with resizing and focal point support (backend)
- **REST API:** Auto-generated endpoints for all collections (including contact and pages)
- **Admin Panel:** Powerful, customizable admin UI (backend)
- **Localization Ready:** Can be extended for multi-language content

---

## 🛠️ Getting Started

### 1. Clone the repository:
```sh
git clone https://github.com/sgovind158/restroworks.git
cd restroworks
```

---

### 2. Backend Setup

```sh
cd backend
cp .env.example .env
npm install
npm run dev
```
- Set your `MONGODB_URI` (local or cloud MongoDB connection string) in `.env`
- Open [http://localhost:3000](http://localhost:3000) for the Payload admin panel

---

### 3. Frontend Setup

```sh
cd ../frontend
npm install
npm run dev
```
- ⚠️ **Note:** Normally, we do **not** commit `.env` files to version control for security reasons.  
  For your convenience and easy installation, `.env`, `.env.dev`, and `.env.local` files are included in the repository.

---

## 🏗️ Project Structure

```
restroworks/
├── backend/
│   ├── src/
│   │   ├── collections/         # PayloadCMS collections (Contact, Pages, Users, Media, etc.)
│   │   └── payload.config.ts    # PayloadCMS config
│   ├── .env                     # Backend environment variables
│   ├── docker-compose.yml       # Docker setup (optional)
│   └── README.md                # Backend documentation
├── frontend/
│   ├── public/                  # Static assets (images, favicon, etc.)
│   ├── src/
│   │   ├── app/
│   │   │   ├── [locale]/        # Locale-based routing (en, hi, etc.)
│   │   │   │   ├── contact/     # Contact page (localized)
│   │   │   │   ├── lang/        # Language local static file (for translations not managed by CMS)
│   │   │   │   ├── error.tsx    # Custom error page
│   │   │   │   ├── layout.tsx   # Layout for locale pages
│   │   │   │   ├── loading.tsx  # Loading state for locale pages
│   │   │   │   └── page.tsx     # Home page (localized)
│   │   ├── components/          # Shared shadcn ui components
│   │   ├── lib/                 # Library code and helpers
│   │   ├── utils/               # Utility functions
│   │   └── views/               # UI blocks and view components
│   ├── .env                     # Frontend environment variables
│   └── README.md                # Frontend documentation
└── README.md                    # Main project documentation
```

---

## 🌐 Localization

- All pages are available in English (`en`) and Hindi (`hi`).
- Locale is determined by the URL (e.g., `/en`, `/hi`).
- Static translation files for UI text are in `src/app/[locale]/lang/`.

---

## 📦 CMS Modeling Choices

- **Pages Collection:**  
  Used to manage all dynamic pages (like Home, Contact, etc.) with flexible block-based content.  
  Each page can have a unique slug, locale, meta fields, and an array of content blocks.

- **Blocks:**  
  Content blocks (e.g., hero, features) are modeled as reusable, nestable components inside the Pages collection.  
  This allows non-developers to build and edit complex layouts visually from the Payload admin panel.

- **Contact Collection:**  
  Stores all contact form submissions (name, email, message) for easy management and follow-up.

- **Localization:**  
  Each page and block can be localized by setting the `locale` field, allowing content editors to manage translations for each supported language.

---

## ✏️ How to Create/Edit Pages and Blocks

1. **Login to the Payload Admin Panel:**  
   Open [http://localhost:3000/admin](http://localhost:3000/admin) in your browser.

2. **Pages:**  
   - Go to the "Pages" collection.
   - Click "Create New" to add a new page, or select an existing page to edit.
   - Fill in the slug, locale, meta fields, and add content blocks as needed.

3. **Blocks:**  
   - Within a page, use the "Blocks" field to add, remove, or reorder content blocks (e.g., Hero, Features).
   - Each block type has its own set of fields for customization.

4. **Contact Submissions:**  
   - Go to the "Contact" collection to view all form submissions from the frontend.

5. **Localization:**  
   - For each page, select the desired locale and provide translated content for that language.


## 🏗️ Backend Collections

- **Contact:** Stores contact form submissions (name, email, message)
- **Pages:** Manages dynamic pages and their content for the frontend
- **Users:** Auth-enabled collection for admin panel access
- **Media:** Uploads-enabled collection for images and files

---

## 🛠️ Customization

- Extend backend collections in `/backend/src/collections`
- Update Payload config in `/backend/src/payload.config.ts`
- See [PayloadCMS Docs](https://payloadcms.com/docs) for more

---

## 📂 Related

- [PayloadCMS Documentation](https://payloadcms.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

---

## 📄 License

MIT