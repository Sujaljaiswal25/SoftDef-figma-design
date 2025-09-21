# SoftDef-figma-design

A React + Vite project implementing a responsive design from Figma, featuring product filtering, navigation components, and a modern UI.

## Features

- React + Vite for fast development and build times
- Tailwind CSS for styling
- Responsive design with mobile navigation
- Product filtering functionality
- Pagination
- Context API for state management

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/Sujaljaiswal25/SoftDef-figma-design.git
   cd SoftDef-figma-design
   ```

2. Install dependencies:

   ```bash
   npm install
   # or if you use yarn
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or if you use yarn
   yarn dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Project Structure

```
src/
├── components/          # React components
│   ├── filterUtils/    # Filtering components
│   ├── footer/         # Footer components
│   ├── navbars/        # Navigation components
│   ├── poster/         # Poster components
│   └── products/       # Product-related components
├── context/            # React Context providers
└── utils/              # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Technologies Used

- React
- Vite
- Tailwind CSS
- ESLint
- Context API
