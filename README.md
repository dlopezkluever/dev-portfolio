# 🎯 Magic Portfolio - Developer Showcase

A modern, responsive portfolio website built with Next.js 15 and the Once UI System, designed to showcase development projects with beautiful carousels, detailed project pages, and seamless navigation.

## ✨ Features

### 🎨 **Modern Design**
- Clean, minimalist design with excellent typography
- Responsive layout that works perfectly on all devices
- Dark/light theme support with system preference detection
- Smooth animations and transitions powered by Once UI

### 📱 **Project Showcase**
- **Homepage Carousel**: Each project displays with 2 featured images in an interactive carousel
- **Work Page**: Extended view with up to 4 images per project
- **Detailed Project Pages**: Individual pages with full image galleries, technology tags, and external links
- **Smart Navigation**: "Learn More" buttons lead to comprehensive project details

### 🛠 **Technical Features**
- **MDX Support**: Write project content in Markdown with React components
- **TypeScript**: Full type safety throughout the application
- **SEO Optimized**: Meta tags, Open Graph, and Schema.org markup
- **Image Optimization**: Next.js Image component for optimal performance
- **File-based Routing**: Automatic route generation from file structure

## 🚀 Technology Stack

### **Frontend Framework**
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development

### **UI & Styling**
- **Once UI System** - Modern React component library
- **Sass** - Enhanced CSS with variables and mixins
- **React Icons** - Comprehensive icon library

### **Content Management**
- **MDX** - Markdown with React components
- **Gray Matter** - YAML frontmatter parsing
- **Next MDX Remote** - Dynamic MDX rendering

### **Development Tools**
- **ESLint** - Code linting and quality
- **TypeScript Compiler** - Type checking

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── work/              # Projects showcase
│   │   ├── page.tsx       # Projects listing
│   │   ├── [slug]/        # Dynamic project pages
│   │   └── projects/      # MDX project files
│   │       ├── elmerfem-for-edu.mdx
│   │       ├── merlins-grimoire.mdx
│   │       └── xtraktor.mdx
│   └── gallery/           # Image gallery
├── components/            # Reusable React components
│   ├── ProjectCard.tsx    # Project display component
│   ├── work/             # Work-specific components
│   └── mdx.tsx           # MDX rendering components
├── resources/            # Site configuration and content
│   └── content.js        # Site metadata and settings
└── utils/                # Utility functions
    ├── utils.ts          # MDX processing utilities
    └── formatDate.ts     # Date formatting helpers

public/                   # Static assets
├── elmer-for-edu/       # ElmerFEM project images
├── merlin's-grimoire/   # Merlin's Grimoire project images
└── Xtraktor/           # Xtraktor project images
```

## 🎯 Featured Projects

### 🔬 **ElmerFEM for Edu**
Educational web platform that transforms complex Finite Element Analysis into an accessible learning tool for high school students.
- **Tech**: Docker, ElmerFEM, Web Development, Educational Technology
- **Demo**: [Loom Presentation](https://www.loom.com/share/951fb874f06f42f09c8bf7ae43b16ab3)

### 🧙‍♂️ **Merlin's Grimoire: Chemistry Edition**
Innovative educational wizard game that transforms chemistry learning into an immersive magical adventure.
- **Tech**: Game Development, Educational Technology, Chemistry Simulation
- **Demo**: [Loom Presentation](https://www.loom.com/share/fb3c8005819146c7af3ab865b8584a52)

### 🤖 **Xtraktor**
AI-powered desktop application that transforms audio/video recordings into structured, actionable insights.
- **Tech**: AI/ML, Desktop Application, Audio/Video Processing, Windows Development
- **Demo**: [Loom Presentation](https://www.loom.com/share/2e29ac00fd8b456abe19284d81595ee4)

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.17 or later
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/magic-portfolio.git
   cd magic-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 🎨 Customization Guide

### **Adding New Projects**

1. **Create a new MDX file** in `src/app/work/projects/`
   ```markdown
   ---
   title: "Your Project Name"
   slug: "your-project-slug"
   publishedAt: "2025-01-24"
   summary: "Brief project description"
   images: [
     "/your-project/image1.jpg",
     "/your-project/image2.jpg"
   ]
   tag: "Technology Category"
   team: []
   link: "https://your-demo-link.com"
   github: "https://github.com/yourusername/your-project"
   ---

   ## Project Overview
   Your detailed project description here...
   ```

2. **Add project images** to `public/your-project/`

3. **The project will automatically appear** on homepage and work page

### **Customizing Site Content**

Edit `src/resources/content.js` to update:
- Personal information
- Navigation labels
- Page descriptions
- Social links

### **Styling Customization**

- **Colors & Themes**: Modify Once UI theme variables
- **Typography**: Update font preferences in the configuration
- **Layout**: Adjust component props and spacing
- **Animations**: Customize transition timings and effects

### **Image Configuration**

- **Homepage**: Shows first 2 images from each project
- **Work Page**: Shows up to 4 images per project
- **Project Pages**: Displays all images in a responsive gallery
- **Supported Formats**: JPG, PNG, WebP, SVG

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: Full-featured experience with hover effects
- **Tablet**: Touch-optimized navigation and layouts
- **Mobile**: Streamlined interface with swipe gestures

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
# Deploy to Vercel
npm i -g vercel
vercel
```

### **Netlify**
```bash
# Build command
npm run build

# Publish directory
out/
```

### **GitHub Pages**
```bash
# Export static site
npm run export
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Once UI System** - Beautiful React component library
- **Next.js Team** - Amazing React framework
- **Vercel** - Seamless deployment platform

---

## 💡 Using as a Template

This portfolio is designed to be easily customizable for your own projects:

1. **Clone the repository**
2. **Replace project content** in `src/app/work/projects/`
3. **Update personal information** in `src/resources/content.js`
4. **Add your own project images** to `public/`
5. **Customize styling** to match your brand
6. **Deploy** to your preferred platform

**Perfect for:**
- Software developers
- UI/UX designers
- Product managers
- Technical professionals
- Students showcasing projects

---

*Built with ❤️ using Next.js and Once UI* 