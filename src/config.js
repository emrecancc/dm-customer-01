// src/config.js
require('dotenv').config();

const config = {
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  // other config values
};

function validateConfig() {
  if (!config.NEXTAUTH_SECRET) {
    // Provide a default placeholder for testing environments
    config.NEXTAUTH_SECRET = 'placeholder-secret';
  }
}

module.exports = { config, validateConfig };
