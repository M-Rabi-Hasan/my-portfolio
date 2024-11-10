// postcss.config.mjs

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},  // Optional: Add this if you need autoprefixing
  },
};

export default config;
