# Figure.ai Website Redesign & Prisma.ai Feature

## Overview
This project is a complete redesign of the [Figure.ai](https://www.figure.ai/) website with the introduction of a new feature called Prisma.ai. The redesign showcases advanced UI/UX skills and was awarded 1st place at the state-level CSI (Computer Society of India) DESIGN-A-THON.

## Project Highlights
- **Complete UI/UX Overhaul**: Reimagined the entire Figure.ai website interface with modern design principles
- **Prisma.ai Feature**: Conceptualized and designed a new feature (design-only implementation)
- **Award-Winning**: 1st place winner at CSI DESIGN-A-THON at the state level
- **Interactive 3D Elements**: Implemented engaging 3D components using Three.js

## Tech Stack
- **Build Tool**: Vite
- **Languages**: JavaScript/TypeScript
- **3D Rendering**: Three.js
  - *Note: Chose Three.js over React Three Fiber due to stability considerations*
- **Styling**: Custom CSS
  - *Note: Opted for custom CSS configuration optimized for Three.js integration instead of Tailwind CSS*

Project Structure
Copyfigure-ai/
├── src/
│   ├── shader/             # Custom shader files for Three.js
│   ├── types/              # TypeScript type definitions
│   ├── chat.html           # Chat feature implementation
│   ├── index.html          # Main application entry point
│   ├── script.js           # JavaScript implementation
│   ├── script.ts           # TypeScript implementation
│   ├── style.css           # Custom styling
│   ├── three.js            # Three.js implementation
│   ├── three.ts            # Three.js TypeScript implementation
│   ├── types.ts            # Additional TypeScript type definitions
│   ├── utils.js            # Utility functions
│   └── utils.ts            # TypeScript utility functions
├── dist/                   # Distribution build files
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration

## Features
- Responsive design across all device sizes
- Interactive 3D elements that enhance user engagement
- Smooth animations and transitions
- Optimized performance for complex 3D rendering

Installation & Development
bashCopy# Clone the repository
git clone https://github.com/rshdhere/figure-ai.git

# Navigate to project directory
cd figure-ai

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

## Screenshots
[Add screenshot placeholders here]

## Future Improvements
- Implementation of the Prisma.ai feature beyond the design phase
- Potential migration to React when React Three Fiber stability improves
- Additional interactive elements and animations

## License
[Your chosen license]
