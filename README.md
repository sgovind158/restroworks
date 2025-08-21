
## 🛠️ Getting Started

### 1. Clone the repository:
```sh
git clone https://github.com/sgovind158/restroworks.git

```

### 2. Backend 

# Restroworks Backend

This is the **PayloadCMS backend** for the Restroworks project.  
It manages localization for home and contact page data, as well as user contact requests, powered by MongoDB.

---

## 🖥️ Technology Stack

- **Backend:** [PayloadCMS](https://payloadcms.com/) (Node.js)
- **Database:** MongoDB

---

## 🚀 Features

- **Contact Form Management:** Store and manage contact form submissions (name, email, message) via the admin panel and API
- **Pages Collection:** Manage dynamic pages and their content for the frontend
- **User Authentication:** Built-in user management and authentication
- **Custom Collections:** Easily extendable for menus, orders, blogs, etc.
- **REST API:** Auto-generated endpoints for all collections (including contact and pages)
- **Admin Panel:** Powerful, customizable admin UI
- **Localization Ready:** Can be extended for multi-language content

---

## ⚡ Quick Start

### 1. Clone the Repository

```sh
git clone https://github.com/sgovind158/restroworks.git
cd restroworks/backend
```

### 2. Set Up Environment Variables

Copy the example environment file and update values as needed:

```sh
cp .env.example .env
```

- Set your `MONGODB_URI` (local or cloud MongoDB connection string)
- Configure S3 credentials if using cloud media storage

### 3. Install Dependencies

```sh
pnpm install
```
or
```sh
npm install
```

### 4. Start the Development Server

```sh
pnpm dev
```
or
```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to access the Payload admin panel.

---

## 🐳 Docker (Optional)

You can use Docker for local development:

1. Update `MONGODB_URI` in your `.env` to `mongodb://127.0.0.1/<dbname>`
2. Update `docker-compose.yml` if needed
3. Start with:
   ```sh
   docker-compose up
   ```

---

## 🏗️ Collections

- **Contact:** Stores contact form submissions (name, email, message)
- **Pages:** Manages dynamic pages and their content for the frontend
- **Users:** Auth-enabled collection for admin panel access
- **Media:** Uploads-enabled collection for images and files
---


## 🛠️ Customization

- Extend collections in `/src/collections`
- Update Payload config in `/src/payload.config.ts`
- See [PayloadCMS Docs](https://payloadcms.com/docs) for more

---

## ❓ Questions & Support

- [PayloadCMS Discord](https://discord.com/invite/payload)
- [PayloadCMS Discussions](https://github.com/payloadcms/payload/discussions)

---

## 📄 License

MIT


### 3. Frontend 

# Restroworks Frontend

This is the **Next.js frontend** for the Restroworks project, a modern restaurant management SaaS platform.  
It supports localization (English/Hindi), dynamic content from PayloadCMS, SEO best practices, and more.

## 🖥️ Technology Stack

| Category         | Packages / Tools Used                                                                 |
|------------------|--------------------------------------------------------------------------------------|
| **Framework**        | Next.js (v15+), React (v19+), TypeScript                                      |
| **UI/Styling**       | Tailwind CSS, shadcn/ui, lucide-react
| **Forms/Validation** | Formik, Yup                                                                   |
| **Utilities**        | axios, react-toastify, motion, clsx, class-variance-authority, tailwind-merge  |
| **Env/Build**        | env-cmd, next-sitemap                                                         |
| **Backend**          | PayloadCMS (local), MongoDB                                                   |

---


---

## 🚀 Features

- **Next.js App Router** (v15+)
- **Localization (i18n)**: English (`en`), Hindi (`hi`)
- **Dynamic Content**: Fetches pages and blocks from PayloadCMS backend
- **SEO Optimized**: Dynamic metadata, sitemap, robots.txt
- **Custom 404, Loading, and Error pages**
- **Contact Form**: Integrated with backend API using Formik for form state management and Yup for validation.
- **Image Optimization**: Uses Next.js `<Image />`
- **Tailwind CSS** for styling
- **shadcn/ui** for modern, accessible UI components

---


## 🏗️ Project Structure

```
frontend/
├── .next/                  # Next.js build output (auto-generated)
├── node_modules/           # Node.js dependencies
├── public/                 # Static assets (images, favicon, etc.)
├── src/
│   ├── app/
│   │   ├── [locale]/       # Locale-based routing (en, hi, etc.)
│   │   │   ├── contact/    # Contact page (localized)
│   │   │   ├── lang/       # Language local static file
│   │   │   ├── error.tsx   # Custom error page
│   │   │   ├── layout.tsx  # Layout for locale pages
│   │   │   ├── loading.tsx # Loading state for locale pages
│   │   │   └── page.tsx    # Home page (localized)
│   │   ├── favicon.ico
│   │   ├── global-not-found.tsx # Global 404 page
│   │   └── globals.css     # Global styles (Tailwind, etc.)
│   ├── components/         # Shared shadcn ui components
│   ├── lib/                # Library code and helpers
│   ├── utils/              # Utility functions
│   └── views/              # UI blocks and view components
│       └── middleware.ts   # Middleware for Next.js (e.g., i18n)
├── .env                    # Environment variables
├── .env.dev
├── .env.local
├── .gitignore
├── components.json         # shadcn/ui config
├── eslint.config.mjs       # ESLint configuration
└── README.md               # Project documentation
```

---

## 🛠️ Getting Started


1. **Clone the repository:**
   ```sh
   git clone https://github.com/sgovind158/restroworks.git
   cd restroworks/frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   ⚠️ **Note:** Normally, we do **not** commit `.env` files to version control for security reasons. 
   For your convenience and easy installation, `.env`, `.env.dev`, and `.env.local` files are included in the repository. 

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Build for production:**
   ```sh
   npm run build
   npm start
   ```

---

## 🌐 Localization

- All pages are available in English (`en`) and Hindi (`hi`).
- Locale is determined by the URL (e.g., `/en`, `/hi`).

---

## 📝 Notes

- Content is managed via [PayloadCMS](https://payloadcms.com/).
- Uses [shadcn/ui](https://ui.shadcn.com/) for UI components.

---

## 📂 Related

- [Restroworks Backend (PayloadCMS)](../backend)
- [PayloadCMS Documentation](https://payloadcms.com/docs)

---


## 📄 License

MIT