# Senor Sativa LLC Website

This is a full-stack web application built with React (frontend) and NestJS (backend).

## Project Structure

```
├── frontend/          # React + Vite frontend application
│   ├── src/          # Source files
│   │   ├── components/   # React components
│   │   ├── assets/      # Static assets
│   │   └── ...
│   ├── public/       # Public assets
│   └── ...
│
└── backend/          # NestJS backend application
    ├── src/          # Source files
    │   ├── ai/       # AI integration modules
    │   ├── square/   # Square payment integration
    │   ├── config/   # Configuration files
    │   ├── entities/ # Database entities
    │   └── ...
    └── ...
```

## Technologies Used

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

### Backend
- NestJS
- TypeScript
- Square API Integration
- Claude AI Integration
- PostgreSQL

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   - Copy `.env.example` to `.env`
   - Update the variables with your configuration
4. Start the development server:
   ```bash
   npm run start:dev
   ```
   The backend API will be available at `http://localhost:3000`

## Features
- Modern, responsive UI with Tailwind CSS
- Secure payment processing with Square
- AI-powered features using Claude
- RESTful API endpoints
- Database integration with PostgreSQL

## Development

### Frontend Development
- Uses Vite for fast development and building
- TypeScript for type safety
- Tailwind CSS for styling
- Component-based architecture

### Backend Development
- NestJS modules for organized code structure
- TypeScript for type safety
- Swagger API documentation
- Database migrations and entities
- Integration with external services (Square, Claude)

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is proprietary and confidential. All rights reserved.
