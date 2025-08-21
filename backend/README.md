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

## 📹 Video Walkthrough

> Click the [watch the video here](https://youtu.be/MLgRtuFnhug).

## ❓ Questions & Support

- [PayloadCMS Discord](https://discord.com/invite/payload)
- [PayloadCMS Discussions](https://github.com/payloadcms/payload/discussions)

---

## 📄 License

MIT