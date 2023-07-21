# Nuxt 3 Boilerplate for MongoDB
This Nuxt3 boilerplate includes the following dependencies

- `eslint` - Widely used tool for linting and enforcing code style and quality.
- `@nuxtjs/eslint-config-typescript` - Pre-configured Eslint setup for Nuxtjs.
- `@pinia/nuxt` - Pinia state management pattern and library for Vue.js applications.
- `mongoose` - For MongoDB Schema and modeling.
- `mongo-sanitize` - Prevent potential NoSQL injection attacks in MongoDB-based applications.
- `jsonwebtoken` - For Authentication and Authorization.
- `nanoid` & `nanoid-dictionary` - For generating a random and unique ID's.
- `xss` - For sanitizing data before sending to the database.
- `bcrypt` - For password hashing
- `@nuxtjs/tailwindcss` - For UI

### MongoDB Configuration
1. Create a `.env` file
2. Inside the file, `MONGO_URL=add-your-mongo-URL-here...`

If configuration is successful, you should be able to see the `Successfully connected to DB.` in the terminal.