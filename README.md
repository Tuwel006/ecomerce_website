# My Ecommerce Store

A modern, full-stack ecommerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js) and deployed on Vercel.

## Features

- 🛍️ Complete ecommerce functionality
- 👤 User authentication and authorization
- 🛒 Shopping cart and wishlist
- 💳 Order management
- 📱 Responsive design
- 🔍 Product search and filtering
- ⭐ Product reviews and ratings
- 📧 Email notifications
- 🔐 Admin dashboard
- 📊 Merchant management

## Tech Stack

**Frontend:**
- React 16.8+
- Redux for state management
- React Router for navigation
- Bootstrap & Reactstrap for UI
- Webpack for bundling
- Sass for styling

**Backend:**
- Node.js & Express.js
- MongoDB with Mongoose
- JWT for authentication
- Socket.io for real-time features
- Multer for file uploads
- Passport.js for OAuth

**Deployment:**
- Vercel for hosting
- MongoDB Atlas for database
- AWS S3 for file storage

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Vercel account

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-ecommerce-store.git
   cd my-ecommerce-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` files in both `client` and `server` directories
   - Rename them to `.env`
   - Fill in your actual values

4. **Start development servers**
   ```bash
   npm run dev
   ```

   This will start both client (http://localhost:8080) and server (http://localhost:3000)

### Environment Variables

**Server (.env):**
```
PORT=3000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
CLIENT_URL=http://localhost:8080
# Add other variables as needed
```

**Client (.env):**
```
API_URL=http://localhost:3000/api
```

## Deployment to Vercel

### Automatic Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration

3. **Set Environment Variables**
   - In Vercel dashboard, go to Project Settings > Environment Variables
   - Add all the environment variables from your server `.env` file
   - Make sure to update URLs to use your Vercel domain

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Project Structure

```
├── client/                 # React frontend
│   ├── app/               # React components and containers
│   ├── public/            # Static assets
│   ├── webpack/           # Webpack configuration
│   └── package.json
├── server/                # Express backend
│   ├── config/            # Configuration files
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── package.json
├── vercel.json            # Vercel deployment config
└── package.json           # Root package.json
```

## Available Scripts

- `npm run dev` - Start both client and server in development mode
- `npm run build` - Build client for production
- `npm start` - Start server in production mode
- `npm run install:client` - Install client dependencies
- `npm run install:server` - Install server dependencies

## Configuration for Production

### Database Setup
1. Create a MongoDB Atlas cluster
2. Get your connection string
3. Update `MONGO_URI` in environment variables

### File Storage (AWS S3)
1. Create an S3 bucket
2. Set up IAM user with S3 permissions
3. Add AWS credentials to environment variables

### Email Service (Mailgun)
1. Sign up for Mailgun
2. Verify your domain
3. Add Mailgun credentials to environment variables

### OAuth Setup (Optional)
1. Create Google/Facebook OAuth apps
2. Add OAuth credentials to environment variables
3. Update callback URLs to match your domain

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

If you encounter any issues, please create an issue in the GitHub repository.