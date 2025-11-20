#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 Welcome to My Ecommerce Store Setup!\n');

const questions = [
  {
    key: 'MONGO_URI',
    question: 'Enter your MongoDB connection string: ',
    default: 'mongodb://127.0.0.1:27017/mern_ecommerce'
  },
  {
    key: 'JWT_SECRET',
    question: 'Enter a JWT secret (or press enter for auto-generated): ',
    default: () => require('crypto').randomBytes(64).toString('hex')
  },
  {
    key: 'CLIENT_URL',
    question: 'Enter your client URL (default: http://localhost:8080): ',
    default: 'http://localhost:8080'
  }
];

async function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question.question, (answer) => {
      const value = answer.trim() || (typeof question.default === 'function' ? question.default() : question.default);
      resolve({ key: question.key, value });
    });
  });
}

async function setup() {
  console.log('Setting up environment variables...\n');
  
  const answers = {};
  
  for (const question of questions) {
    const answer = await askQuestion(question);
    answers[answer.key] = answer.value;
  }
  
  // Create server .env file
  const serverEnvContent = `PORT=3000
MONGO_URI=${answers.MONGO_URI}
JWT_SECRET=${answers.JWT_SECRET}
CLIENT_URL=${answers.CLIENT_URL}
BASE_API_URL=api
MAILCHIMP_KEY=
MAILCHIMP_LIST_KEY=
MAILGUN_KEY=
MAILGUN_DOMAIN=
MAILGUN_EMAIL_SENDER=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=${answers.CLIENT_URL.replace('8080', '3000')}/api/auth/google/callback
FACEBOOK_CLIENT_ID=
FACEBOOK_CLIENT_SECRET=
FACEBOOK_CALLBACK_URL=${answers.CLIENT_URL.replace('8080', '3000')}/api/auth/facebook/callback
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=us-east-1
AWS_BUCKET_NAME=`;

  // Create client .env file
  const clientEnvContent = `API_URL=${answers.CLIENT_URL.replace('8080', '3000')}/api`;

  // Write files
  fs.writeFileSync(path.join(__dirname, 'server', '.env'), serverEnvContent);
  fs.writeFileSync(path.join(__dirname, 'client', '.env'), clientEnvContent);
  
  console.log('\n✅ Environment files created successfully!');
  console.log('\n📝 Next steps:');
  console.log('1. Install dependencies: npm install');
  console.log('2. Start development: npm run dev');
  console.log('3. Open http://localhost:8080 in your browser');
  console.log('\n💡 Don\'t forget to:');
  console.log('- Set up your MongoDB database');
  console.log('- Configure additional services (AWS, Mailgun, OAuth) if needed');
  console.log('- Update environment variables for production deployment');
  
  rl.close();
}

setup().catch(console.error);