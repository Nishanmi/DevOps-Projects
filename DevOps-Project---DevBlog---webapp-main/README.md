# DevBlog

A lightweight blog application built with React, TypeScript, and Tailwind CSS — featuring a complete DevOps setup with Docker and GitHub Actions CI/CD.

![CI](https://github.com/YOUR_USERNAME/devblog/actions/workflows/ci.yml/badge.svg)

## Features

- Create, edit, and delete blog posts
- Filter posts by category (Tech, Personal, Tutorial)
- Search posts by title
- Responsive design with a clean UI
- Data persistence using browser local storage

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **UI Components**: shadcn/ui, Radix UI
- **Routing**: React Router v6
- **DevOps**: Docker, Nginx, GitHub Actions

## Getting Started

### Prerequisites

- Node.js 20+ and npm

### Local Development

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/devblog.git
cd devblog

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:8080`.

### Running with Docker

```bash
# Build and start the container
docker-compose up --build

# Or build manually
docker build -t devblog .
docker run -p 80:80 devblog
```

The app will be available at `http://localhost`.

## CI/CD

This project uses GitHub Actions for continuous integration. On every push and pull request to `main`, the pipeline will:

1. Install dependencies
2. Run tests
3. Build the application

## Project Structure

```
├── src/
│   ├── components/    # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions and data logic
│   ├── pages/         # Page components
│   └── types/         # TypeScript type definitions
├── Dockerfile         # Multi-stage Docker build
├── nginx.conf         # Nginx configuration for SPA
├── docker-compose.yml # Docker Compose setup
└── .github/workflows/ # CI/CD pipeline
```

## Author

**Nishant**

## License

This project is open source and available under the [MIT License](LICENSE).
