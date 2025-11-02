# Phirozgar Irani - Portfolio Website

A modern, warm, and minimal personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with pastel color palette
- **Responsive**: Fully responsive design for desktop, tablet, and mobile
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive**: Hover effects, scroll animations, and smooth transitions
- **Fast Performance**: Built with Vite for optimal performance
- **SEO Ready**: Optimized for search engines

## 🎨 Design System

### Color Palette
- Background: #FDFCFB (off-white)
- Mint: #CFF5E7
- Peach: #FFD8CC
- Lavender: #E3D7FF
- Charcoal text: #333333
- Secondary text: #666666
- Accent: #6A5ACD

### Typography
- Headings: Outfit (Google Fonts)
- Body: Inter (Google Fonts)

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Emoji-based icons
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
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

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🚀 Deployment

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── Hero.jsx            # Hero section
│   ├── About.jsx           # About section
│   ├── Projects.jsx        # Projects showcase
│   ├── Experience.jsx      # Experience timeline
│   ├── Skills.jsx          # Skills section
│   ├── Contact.jsx         # Contact form
│   └── Footer.jsx          # Footer component
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## 🎯 Sections

1. **Hero**: Introduction with call-to-action buttons
2. **About**: Personal information and background
3. **Projects**: Portfolio of projects with tech stacks
4. **Experience**: Professional experience timeline
5. **Skills**: Technical and soft skills with progress bars
6. **Contact**: Contact form and social links

## 🔧 Customization

### Colors
Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  'off-white': '#FDFCFB',
  'mint': '#CFF5E7',
  'peach': '#FFD8CC',
  'lavender': '#E3D7FF',
  'charcoal': '#333333',
  'secondary': '#666666',
  'accent': '#6A5ACD',
}
```

### Content
Update the content in each component file to match your personal information.

### Projects
Add your projects in `src/components/Projects.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description",
    image: "🛒", // Emoji or image URL
    tech: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/your-username/project"
  }
]
```

## 📱 Responsive Breakpoints

- Mobile: 375px
- Tablet: 768px
- Desktop: 1440px

## 🎨 Animation Features

- Fade-in animations on scroll
- Hover effects on interactive elements
- Smooth page transitions
- Floating background elements
- Staggered animations for lists
- Progress bar animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Phirozgar Irani - [@your-twitter](https://twitter.com/your-twitter) - phirozgar@example.com

Project Link: [https://github.com/your-username/portfolio](https://github.com/your-username/portfolio)
