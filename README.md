# Portfolio Website

A modern, responsive portfolio website built with Vue.js to showcase software engineering projects and skills.

## 🚀 Features

- **Modern Design**: Clean and professional UI with a Modern Tech color scheme (Dark Blue & Cyan)
- **Responsive**: Fully responsive design that works on all devices (mobile, tablet, desktop)
- **Interactive Navigation**: Smooth scrolling navigation with mobile hamburger menu
- **Animated Hero Section**: Eye-catching hero section with animated background shapes
- **Skills Showcase**: Organized display of technical skills across 6 categories
- **Project Portfolio**: Filterable project gallery with detailed project cards
- **Contact Form**: Functional contact form with validation
- **Social Links**: Connect via GitHub, LinkedIn, Twitter, and Email

## 🛠️ Tech Stack

- **Framework**: Vue.js 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Variables
- **Architecture**: Single Page Application (SPA)

## 📁 Project Structure

```
portfolio/
├── index.html              # Entry point
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
├── src/
│   ├── App.vue            # Root component
│   ├── main.js            # Vue app initialization
│   ├── components/        # Vue components
│   │   ├── Navbar.vue     # Navigation bar with mobile menu
│   │   ├── Hero.vue       # Hero section
│   │   ├── About.vue      # About section
│   │   ├── Skills.vue     # Skills showcase
│   │   ├── Projects.vue   # Projects gallery
│   │   ├── ProjectCard.vue # Individual project card
│   │   ├── Contact.vue    # Contact form
│   │   └── Footer.vue     # Footer section
│   ├── assets/            # Images, icons, resume
│   └── styles/            # CSS files
│       ├── main.css       # Global styles
│       └── variables.css  # CSS variables for theming
├── public/                # Static assets
└── README.md              # This file
```

## 🎨 Design Features

- **Color Scheme**: Modern Tech (Dark blue primary, Cyan accents, White backgrounds)
- **Typography**: System fonts for optimal performance
- **Animations**: Smooth transitions and scroll animations
- **Icons**: SVG icons for social links
- **Cards**: Hover effects with shadows and transforms
- **Forms**: Clean form design with validation

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎯 Sections

1. **Hero**: Introduction with name, tagline, and call-to-action buttons
2. **About**: Professional bio, details, and resume download
3. **Skills**: Technical skills organized by category (Languages, Frontend, Backend, Databases, DevOps, Other)
4. **Projects**: Featured projects with filtering by category, live demos, and GitHub links
5. **Contact**: Contact information and functional form
6. **Footer**: Quick links and social media connections

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.vue`):
   - Update name and tagline
   - Modify description text

2. **About Section** (`src/components/About.vue`):
   - Add your bio
   - Update location, email, and status
   - Replace profile image placeholder

3. **Skills Section** (`src/components/Skills.vue`):
   - Modify the `skillCategories` array with your skills

4. **Projects Section** (`src/components/Projects.vue`):
   - Update the `projects` array with your projects
   - Add project images, descriptions, and links

5. **Contact Section** (`src/components/Contact.vue`):
   - Update contact information
   - Add social media links

### Change Color Scheme

Modify CSS variables in `src/styles/variables.css`:

```css
:root {
  --color-primary: #1e3a8a;     /* Your primary color */
  --color-accent: #06b6d4;      /* Your accent color */
  /* ... other variables */
}
```

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Deploy to Services

This project can be deployed to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop `dist` folder or connect via Git
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload `dist` folder to S3 bucket

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Rishi** - Software Engineer

- Email: rishi@example.com
- GitHub: [Your GitHub]
- LinkedIn: [Your LinkedIn]

---

Built with ❤️ using Vue.js and Vite

