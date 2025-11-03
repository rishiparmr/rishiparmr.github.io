# Getting Started with Your Portfolio

## 🎉 Your Portfolio is Ready!

The development server should be running. If not, start it with:

```bash
npm run dev
```

Then open your browser to: **http://localhost:5173**

## 📝 Next Steps to Personalize

### 1. Update Your Information

**Hero Section** (`src/components/Hero.vue`):
- Line 15: Change "Rishi" to your name
- Line 17-20: Update your description

**About Section** (`src/components/About.vue`):
- Line 24: Update the heading with your name
- Lines 25-35: Write your bio
- Lines 38-48: Update location, email, and status

**Contact Section** (`src/components/Contact.vue`):
- Lines 13-15: Update email
- Lines 18-20: Update phone
- Lines 23-25: Update location
- Lines 29-52: Update social media links

**Footer** (`src/components/Footer.vue`):
- Line 6: Update name in logo
- Lines 7-9: Update bio
- Lines 41-71: Update social media links

### 2. Add Your Skills

Edit `src/components/Skills.vue` (lines 35-62):
- Modify the `skillCategories` array
- Add/remove skills as needed
- Change emoji icons if desired

### 3. Add Your Projects

Edit `src/components/Projects.vue` (lines 42-88):
- Replace placeholder projects with your real projects
- Update: title, description, category, tech stack, images
- Add your demo URLs and GitHub links
- You can add more categories in the `filters` array (line 30)

### 4. Add a Profile Image

Option 1: Use an actual image:
1. Add your photo to `src/assets/`
2. In `src/components/About.vue`, replace the placeholder div with:
```vue
<img src="../assets/your-photo.jpg" alt="Your Name" />
```

Option 2: Keep the icon placeholder and customize the background color/gradient

### 5. Add Resume/CV

1. Add your resume PDF to `public/` folder (e.g., `public/resume.pdf`)
2. In `src/components/About.vue`, line 51, update the href:
```vue
<a href="/resume.pdf" class="btn btn-primary resume-btn" download>Download Resume</a>
```

### 6. Customize Colors (Optional)

Edit `src/styles/variables.css` to change the color scheme:
```css
--color-primary: #1e3a8a;     /* Main blue color */
--color-accent: #06b6d4;      /* Cyan accent */
```

Try different color combinations:
- Purple & Pink: `#6B46C1` & `#EC4899`
- Green & Teal: `#059669` & `#14B8A6`
- Orange & Red: `#EA580C` & `#DC2626`

## 🚀 Building for Production

When ready to deploy:

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

## 🌐 Deployment Options

### Vercel (Recommended - Easiest)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify
1. Go to https://netlify.com
2. Drag & drop the `dist/` folder
3. Or connect your GitHub repo for automatic deployments

### GitHub Pages
1. Install: `npm install -D gh-pages`
2. Add to package.json scripts: `"deploy": "npm run build && gh-pages -d dist"`
3. Run: `npm run deploy`

## 🔧 Common Customizations

### Change Section Order
Edit `src/App.vue` to reorder components:
```vue
<Hero />
<Projects />  <!-- Moved up -->
<About />
<Skills />
<Contact />
<Footer />
```

### Remove a Section
Simply delete or comment out the component in `src/App.vue`

### Add Dark Mode
This would require:
1. Add a toggle button in Navbar
2. Create a reactive theme state
3. Update CSS variables dynamically

### Add More Projects
Just add more objects to the `projects` array in `src/components/Projects.vue`

## 📱 Testing Responsiveness

1. Open browser dev tools (F12)
2. Click the device toggle icon
3. Test on different device sizes:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)

## ❓ Need Help?

- Check the main `README.md` for full documentation
- Review `PORTFOLIO_PLAN.txt` for project structure details
- Vue.js docs: https://vuejs.org
- Vite docs: https://vitejs.dev

## 🎨 Design Tips

1. **Keep it simple**: Don't overwhelm visitors
2. **Use good typography**: Stick to 2-3 font sizes
3. **Show your best work**: Quality over quantity in projects
4. **Add real content**: Replace all placeholder text
5. **Test on mobile**: Most visitors will view on phones
6. **Get feedback**: Share with friends before going live

---

Good luck with your portfolio! 🚀

