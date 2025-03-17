# Figure.ai Website Redesign & Prisma.ai Feature

https://youtu.be/FN8iu29O4h0
[![Watch the video]](https://youtu.be/FN8iu29O4h0)


This project delivers a comprehensive redesign of the Figure.ai website with the introduction of an innovative feature called Prisma.ai. The redesign demonstrates advanced UI/UX expertise and was awarded 1st place at the state-level CSI (Computer Society of India) DESIGN-A-THON competition.

## Project Highlights
* **Complete UI/UX Overhaul**: Reimagined the entire Figure.ai website interface with modern design principles and cutting-edge aesthetics
* **Prisma.ai Feature**: Conceptualized and designed a revolutionary new feature that enhances user interaction (design-only implementation)
* **Award-Winning**: Secured 1st place at CSI DESIGN-A-THON at the state level, recognized for innovation and execution
* **Interactive 3D Elements**: Implemented engaging and immersive 3D components using Three.js for a next-generation user experience

## Tech Stack
* **Build Tool**: Vite - for lightning-fast development and optimized production builds
* **Languages**: JavaScript/TypeScript - ensuring type safety and code maintainability
* **3D Rendering**: Three.js & GSAP
   * *Note: Chose Three.js over React Three Fiber due to stability considerations for complex 3D implementations*
* **Styling**: Custom CSS
   * *Note: Opted for custom CSS configuration optimized for Three.js integration instead of Tailwind CSS to maximize performance*

## Project Structure
```
figure-ai/
├── src/
│   ├── shader/           # Custom shader files for Three.js
│   ├── types/            # TypeScript type definitions
│   ├── chat.html         # Chat feature implementation
│   ├── index.html        # Main application entry point
│   ├── script.js         # JavaScript implementation
│   ├── script.ts         # TypeScript implementation
│   ├── style.css         # Custom styling
│   ├── three.js          # Three.js implementation
│   ├── three.ts          # Three.js TypeScript implementation
│   ├── types.ts          # Additional TypeScript type definitions
│   ├── utils.js          # Utility functions
│   └── utils.ts          # TypeScript utility functions
├── dist/                 # Distribution build files
├── package.json          # Project dependencies and scripts
└── vite.config.js        # Vite configuration
```

## Features
* **Responsive Design**: Seamless experience across all device sizes from mobile to desktop
* **Interactive 3D Elements**: Dynamic, interactive 3D components that enhance user engagement
* **Smooth Animations**: Carefully crafted animations and transitions for a polished user experience using GSAP
* **Performance Optimization**: Specially tuned for complex 3D rendering without sacrificing speed

## Installation & Development
```bash
# Clone the repository
git clone https://github.com/rshdhere/figure-ai.git

# Navigate to project directory
cd figure-ai

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```


## Future Improvements
* Implementation of the Prisma.ai feature beyond the design phase
* Potential migration to React when React Three Fiber stability improves
* Additional interactive elements and animations
* Performance optimizations for lower-end devices

## License
MIT License - see [LICENSE](LICENSE) file for details

## Author
[Mohammed Raashed]

## Acknowledgements
* [Computer Society of India](https://www.csi-india.org/) for hosting the DESIGN-A-THON
* [Figure.ai](https://www.figure.ai/) for inspiration
