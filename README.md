# AI Chatbot Concept - Intranet Project

A modern AI chatbot application built with React, TypeScript, and Vite. This project features a sleek chat interface that communicates with an AI agent backend service.

## Features

- 🤖 **AI Chat Interface**: Interactive chat component with real-time messaging
- 📱 **Responsive Design**: Mobile-friendly interface with custom styling
- 🎨 **Modern UI**: Built with Tailwind CSS for consistent styling
- ⚡ **Fast Development**: Powered by Vite for instant hot module replacement
- 🔒 **Type Safety**: Full TypeScript support for better development experience
- 🌐 **CORS Solution**: Configured proxy to handle cross-origin requests

## Tech Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.11
- **HTTP Client**: Axios 1.11.0
- **UI Components**: Custom chat interface with auto-resizing textarea

## Project Structure

```
src/
├── assets/                 # Static assets (images, icons)
├── hooks/                  # Custom React hooks
│   └── useAiAgent.ts      # Hook for AI agent interactions
├── presentation/           # UI components
│   └── aiagent-chat/      # Chat interface component
├── providers/             # React context providers
│   └── AiAgentProvider.tsx # AI agent state management
└── server/                # API integration
    └── AiAgentServer.ts   # Backend communication service
```

## Getting Started

### Prerequisites

- Node.js (latest LTS version)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd intranet-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Configuration

### Proxy Setup

The project includes a Vite proxy configuration to handle CORS issues when communicating with the AI backend:

```typescript
// vite.config.ts
server: {
  proxy: {
    "/api": {
      target: "http://0.0.0.0:8000",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
}
```

This setup allows the frontend to make requests to `/api/*` endpoints, which are automatically proxied to the backend server running on port 8000.

## Architecture

The application follows a clean architecture pattern:

- **Hooks**: Custom hooks manage state and side effects
- **Providers**: Context providers handle global state management
- **Presentation**: UI components focus on rendering and user interaction
- **Server**: Service layer handles API communication

## Development

This project uses modern development tools and practices:

- **ESLint**: Code linting with React-specific rules
- **TypeScript**: Static type checking
- **Hot Module Replacement**: Instant updates during development
- **Component-based Architecture**: Reusable and maintainable components

## Backend Integration

The application communicates with an AI agent backend service through:

- RESTful API endpoints
- Axios for HTTP requests
- Singleton pattern for server instance management
- Error handling and logging

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request
