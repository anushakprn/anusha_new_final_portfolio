# 🚀 Anusha Kothapalli - Data Science Portfolio

A modern, responsive, and highly interactive portfolio website showcasing data science projects, research work, and technical expertise. Built with cutting-edge web technologies for an exceptional user experience.

![Portfolio Preview](https://via.placeholder.com/800x400/0f172a/64ffda?text=Portfolio+Preview)

## ✨ Features

### 🎨 **High-End UI/UX Design**
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Dark Theme**: Professional dark color scheme optimized for developer portfolios
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Glass Morphism**: Modern backdrop blur effects and translucent elements
- **Gradient Accents**: Beautiful gradient combinations throughout the design

### 🎭 **Smooth Animations & Interactions**
- **Framer Motion**: Production-ready motion library for React
- **Scroll Animations**: Elements animate into view as you scroll
- **Hover Effects**: Interactive hover states on cards, buttons, and links
- **Loading Animation**: Elegant loading screen with progress indicator
- **Micro-interactions**: Subtle animations that enhance user experience

### 🧭 **Smooth Scroll Navigation**
- **Single Page Application**: Seamless navigation between sections
- **Active Section Detection**: Navbar highlights current section automatically
- **Smooth Scrolling**: Fluid scroll behavior with offset calculations
- **Mobile Menu**: Responsive hamburger menu for mobile devices
- **Scroll to Top**: Floating button appears when scrolling down

### 💼 **FAANG-Ready Content**
- **Professional Layout**: Clean, modern design suitable for top tech companies
- **Project Showcase**: Detailed project cards with tech stacks and features
- **Skills Visualization**: Interactive skill bars and technology badges
- **Research Highlights**: Academic achievements and publications
- **Contact Integration**: Professional contact form and social links

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Modern React with hooks and concurrent features
- **React Router** - Client-side routing (SPA navigation)

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **PostCSS** - CSS processing and autoprefixing

### Development Tools
- **Create React App** - React application boilerplate
- **ESLint** - Code linting and formatting
- **Git** - Version control

### Deployment
- **Vercel/Netlify** - Recommended hosting platforms
- **GitHub Pages** - Alternative static hosting

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anushakprn/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📧 Formspree Email Functionality Setup

The contact form uses Formspree to send emails directly to your inbox. Follow these steps to set it up:

### 1. Create Formspree Account
1. Go to [Formspree](https://formspree.io/) and create a free account
2. Verify your email address

### 2. Create a New Form
1. In your Formspree dashboard, click "Create a new form"
2. Give it a name like "Portfolio Contact Form"
3. Copy the form endpoint URL (looks like: `https://formspree.io/f/xxxxxxxx`)

### 3. Configure Environment Variable
Update your `.env` file with the endpoint URL:
```env
REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id_here
```

### 4. Test the Contact Form
1. Start your development server: `npm start`
2. Fill out the contact form and submit
3. Check your email for the message

**Note**: Formspree is much simpler than EmailJS - no templates or services needed, just one endpoint URL!

### 6. Test the Contact Form
1. Start your development server: `npm start`
2. Fill out the contact form and submit
3. Check your email for the message

**Note**: The contact form will show error messages if EmailJS is not properly configured.

## �📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html          # Main HTML template
│   └── favicon.ico         # Website favicon
├── src/
│   ├── components/         # React components
│   │   ├── Home.js        # Hero section
│   │   ├── About.js       # About section
│   │   ├── Experience.js  # Work experience
│   │   ├── Skills.js      # Technical skills
│   │   ├── Projects.js    # Project showcase
│   │   ├── Achievements.js # Awards & certifications
│   │   ├── Contact.js     # Contact form
│   │   └── Navbar.js      # Navigation component
│   ├── App.js             # Main application component
│   ├── App.css            # Global styles & Tailwind imports
│   └── index.js           # Application entry point
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
        // ... other shades
      }
    }
  }
}
```

### Content
Update the component files in `src/components/` to modify:
- Personal information
- Project details
- Skills and technologies
- Contact information

### Animations
Modify animation variants in component files to customize motion effects.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌟 Key Sections

### 🏠 Home
- Hero section with animated introduction
- Call-to-action buttons
- Floating animated elements

### 👨‍💻 About
- Personal description and background
- Key statistics with animated counters
- Technology highlights

### 💼 Experience
- Professional timeline
- Company details and achievements
- Technology tags

### 🛠️ Skills
- Interactive skill bars
- Technology categories
- Proficiency indicators

### 🚀 Projects
- Project cards with hover effects
- Technology stacks
- GitHub and demo links

### 🏆 Achievements
- Awards and certifications
- Research publications
- Professional milestones

### 📞 Contact
- Contact form with validation
- Social media links
- Professional information

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure domain settings

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React** - A JavaScript library for building user interfaces
- **Tailwind CSS** - A utility-first CSS framework
- **Framer Motion** - A production-ready motion library for React
- **Font Awesome** - The iconic SVG, font, and CSS toolkit

## 📞 Contact

**Anusha Kothapalli**
- Email: [your-email@example.com]
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [https://github.com/anushakprn]
- Portfolio: [Your Portfolio URL]

---

⭐ **Star this repo if you found it helpful!**

Made with ❤️ by Anusha Kothapalli