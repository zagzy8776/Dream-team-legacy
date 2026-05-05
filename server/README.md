# Dream Team Legacy API Server

Backend API for the admin dashboard and property management system.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your values
```

3. Initialize database:
```bash
npm run prisma:migrate
npm run prisma:generate
```

4. Start the server:
```bash
npm run dev    # Development (auto-reload)
npm start      # Production
```

The server will be available at `http://localhost:3001`

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Create new admin user
- `POST /api/auth/login` - Login admin user
- `GET /api/auth/me` - Get current user profile

### Properties (Admin)
- `GET /api/properties` - List all properties (requires auth)
- `GET /api/properties/:id` - Get single property (requires auth)
- `POST /api/properties` - Create property (requires auth)
- `PUT /api/properties/:id` - Update property (requires auth)
- `DELETE /api/properties/:id` - Delete property (requires auth)
- `PATCH /api/properties/:id/status` - Update property status (requires auth)

### Public
- `GET /api/public-properties` - Get published properties (no auth required)
- `GET /health` - Health check

## 🗄️ Database

Uses SQLite for development. Switch to PostgreSQL for production.

### Prisma Schema
- **User**: Admin users with authentication
- **Property**: Real estate properties with all details

### Database Commands
```bash
npm run prisma:studio    # Open Prisma Studio (visual database editor)
npm run prisma:migrate   # Run migrations
npm run prisma:generate  # Generate Prisma Client
```

## 🔐 Security

- JWT authentication for admin endpoints
- Password hashing with bcrypt
- Input validation with Zod
- CORS configured for specific origins

## 📝 Environment Variables

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key-here"
PORT=3001
NODE_ENV=development
```

## 🛠️ Development

### Running in Development
```bash
npm run dev
```

### Testing API
Use tools like Postman or curl to test the API.

### Creating First Admin User
```bash
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password123","name":"Admin"}'
```

## 🚢 Deployment

### Production Environment
1. Set `NODE_ENV=production`
2. Use PostgreSQL instead of SQLite
3. Set strong `JWT_SECRET`
4. Configure CORS for your domain

### Deploy to Railway/Render
1. Connect your GitHub repository
2. Set environment variables
3. Deploy!

## 📄 License

MIT