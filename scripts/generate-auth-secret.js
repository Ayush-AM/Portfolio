/**
 * Script to generate a secure AUTH_SECRET for NextAuth.js
 * Run with: node scripts/generate-auth-secret.js
 */

const crypto = require('crypto');

// Generate a random string of 32 bytes and encode it as base64
const generateSecret = () => {
  const secret = crypto.randomBytes(32).toString('base64');
  return secret;
};

const authSecret = generateSecret();

console.log('\n=== AUTH_SECRET for NextAuth.js ===');
console.log(authSecret);
console.log('\nAdd this to your .env file as:');
console.log(`AUTH_SECRET="${authSecret}"\n`);
console.log('Remember to keep this value secret and never commit it to your repository!');