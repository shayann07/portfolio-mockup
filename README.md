
# Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and Vite. Features a sleek dark theme with custom animations, gradient effects, and multiple sections showcasing projects, skills, and professional experience.

## ✨ Features

- **Hero Section** - Animated background with raindrop effects and gradient overlays
- **Story Section** - Interactive timeline showcasing professional journey
- **Command Center** - Real-time performance metrics with animated charts
- **Projects Section** - Showcase of featured projects with custom icons and metrics
- **Skills Section** - Categorized technical skills with color-coded variants
- **Lab Section** - Experimental projects and prototypes
- **Contact Section** - Professional contact information and links
- **Custom Cursor Glow** - Interactive cursor effects
- **Responsive Design** - Fully responsive across all device sizes
- **Dark Theme** - Modern dark UI with purple/cyan accent colors

## 🛠️ Tech Stack

- **Framework**: React 18.2.0
- **Language**: TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 3.4.16
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Routing**: React Router DOM 6.8.1

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/shayann07/portfolio-mockup.git
cd portfolio-mockup
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🚀 Usage

The development server will start on `http://localhost:5173` (or the next available port).

### Development

Run the development server with hot module replacement:
```bash
npm run dev
```

### Production Build

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── CursorGlow.tsx
│   └── SectionHeader.tsx
├── config/             # Configuration files
│   ├── icons.ts
│   ├── links.ts
│   └── personalLinks.ts
├── sections/           # Page sections
│   ├── CommandCenterSection/
│   ├── ContactSection/
│   ├── CTASection/
│   ├── Footer/
│   ├── HeroSection/
│   ├── LabSection/
│   ├── Navbar/
│   ├── ProjectsSection/
│   ├── SkillsSection/
│   └── StorySection/
├── App.tsx            # Main app component
└── index.tsx          # Entry point
```

## 🎨 Sections Overview

### Hero Section
- Animated background with gradient effects
- Animated raindrop particles
- Hero content with project cards

### Story Section
- Interactive timeline
- Professional journey milestones
- Timeline items with descriptions

### Command Center
- Performance metrics dashboard
- Animated bar charts
- Real-time status indicators
- Metric cards with gradient backgrounds

### Projects Section
- Featured projects showcase
- Custom project icons
- Technology tags
- Project metrics (users, ratings, etc.)

### Skills Section
- Categorized skill sets:
  - Mobile Development (Kotlin, Flutter, etc.)
  - Architecture Patterns
  - Backend & APIs
  - Database Technologies
  - Machine Learning
  - Tools & DevOps
  - Testing

### Lab Section
- Experimental projects
- Prototypes and side projects

### Contact Section
- Contact information
- Social media links
- Professional links

## 🎯 Key Features

- **Custom Animations**: Smooth transitions and hover effects
- **Gradient Backgrounds**: Modern gradient overlays and effects
- **Interactive Elements**: Hover states and interactive components
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Type-Safe**: Full TypeScript support
- **Component-Based**: Modular, reusable component architecture

## 📝 Configuration

Update personal information in:
- `src/config/personalLinks.ts` - Contact and social links
- `src/config/links.ts` - Navigation and external links
- `src/config/icons.ts` - Custom icons configuration

## 🔧 Customization

### Colors
The project uses Tailwind CSS with custom color schemes. Modify colors in:
- Component files for specific color variants
- `tailwind.config.js` for global color themes

### Content
Update section content by editing the respective component files in `src/sections/`.

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Muhammad Shayan**
- GitHub: [@shayxo](https://github.com/shayxo)
- LinkedIn: [/in/muhammad-shayan](https://linkedin.com/in/muhammad-shayan)
- Email: shayan@example.com

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
