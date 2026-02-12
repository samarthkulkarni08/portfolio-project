# Portfolio Website

A modern, minimal portfolio website for UI/UX designers and frontend developers built with React and Tailwind CSS.

## Features

- 🎨 Modern, minimal design with Changa One typography
- 📱 Fully responsive layout
- ⚡ Smooth animations and transitions
- 🎯 Organized sections: Hero, About, Experience, Design Projects, Dev Projects, Blogs & Case Studies, Contact
- 🛠️ Built with React 18 and Tailwind CSS
- 🚀 Fast development with Vite

## Tech Stack

- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-project
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
portfolio-project/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navigation.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── SkillCard.jsx
│   │   ├── ExperienceItem.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── DevProjectCard.jsx
│   │   └── BlogCard.jsx
│   ├── pages/              # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── DesignProjects.jsx
│   │   ├── DevProjects.jsx
│   │   ├── Blogs.jsx
│   │   └── Contact.jsx
│   ├── data/               # Content data (easy to update!)
│   │   └── portfolioData.js
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles with Tailwind
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── vite.config.js          # Vite configuration
```

## Easy Content Updates

**All your portfolio content is centralized in one file:** `src/data/portfolioData.js`

To update your portfolio:

1. **Personal Information**: Edit `personalInfo` object
   - Name, title, tagline, description
   - Email, resume URL, social links

2. **About Section**: Edit `about` object
   - Heading, description, paragraphs

3. **Skills**: Edit `skills` object
   - Design skills, development skills, tools
   - Each skill has name, icon, and color

4. **Work Experience**: Edit `experience` array
   - Add/remove/modify job entries

5. **Design Projects**: Edit `designProjects` array
   - Add your design project details

6. **Development Projects**: Edit `devProjects` array
   - Add your dev project details

7. **Blogs & Case Studies**: Edit `blogs` array
   - Add your articles and case studies

**No need to touch component code** - just update the data file!

## Customization

### Quick Content Update (Recommended)

**Simply edit `src/data/portfolioData.js`** - this file contains all your portfolio content:

```javascript
export const personalInfo = {
  name: "Your Name",
  email: "your.email@example.com",
  resumeUrl: "/path/to/resume.pdf",
  // ... more fields
};

export const designProjects = [
  {
    title: "Your Project",
    description: "Project description",
    // ... more fields
  }
];
```

### Component Customization

- **Navigation**: Edit `src/components/Navigation.jsx`
- **Section Headers**: Edit `src/components/SectionHeader.jsx`
- **Cards & Items**: Edit individual component files in `src/components/`
- **Pages**: Edit page components in `src/pages/`

### Style Customization

Edit `tailwind.config.js` to customize the color scheme.

### Add Project Images

Replace the gradient placeholders in the project cards with your actual project images.

## Sections

1. **Home/Hero** - Introduction with resume download CTA
2. **About** - Your story and skills showcase with icons
3. **Experience** - Timeline of work history
4. **Design Projects** - UI/UX design portfolio
5. **Dev Projects** - Frontend development projects
6. **Blogs & Case Studies** - Your writings and case studies
7. **Contact** - Contact information and social links

## License

MIT License - feel free to use this template for your own portfolio!

## Support

If you have any questions or run into issues, please check the documentation for:
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
