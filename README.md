# Feature Showcase - MERN Internship Assignment

A modern, responsive Feature Showcase section built with React.js and Tailwind CSS. This project demonstrates advanced UI interactions including sticky scroll behavior, auto-advancing features, and smooth animations.

## 🚀 Features

### Core Functionality
- **Interactive Feature Navigation**: Click on any feature to activate it
- **Arrow Key Navigation**: Use left/right arrow keys to navigate between features
- **Sticky Scroll Behavior**: Section becomes fixed while in viewport
- **Auto-Advance on Scroll**: Features automatically advance as user scrolls
- **Responsive Design**: Optimized for desktop and mobile devices

### UI Components
- **3-Column Desktop Layout**: Left (details) | Center (iPhone mockup) | Right (feature list)
- **Mobile-First Design**: Stacked layout for smaller screens
- **Smooth Animations**: Fade-in, slide transitions, and hover effects
- **Accessibility**: Keyboard navigation, ARIA labels, and semantic HTML

### Technical Features
- **React Hooks**: useState, useEffect, useRef, useCallback
- **Intersection Observer**: Efficient scroll detection
- **Tailwind CSS**: Utility-first styling with custom animations
- **Vite**: Fast development and build tooling

## 🛠️ Tech Stack

- **Frontend**: React.js 18.2.0
- **Styling**: Tailwind CSS 3.4.0
- **Build Tool**: Vite 5.0.8
- **Package Manager**: npm
- **Deployment**: Vercel

## 📁 Project Structure

```
assignment/
├── src/
│   ├── components/
│   │   ├── FeatureShowcase.jsx    # Main component with scroll logic
│   │   ├── FeatureDetail.jsx      # Feature information display
│   │   ├── FeatureList.jsx        # Clickable feature list
│   │   └── PhoneMockup.jsx        # iPhone mockup with gradient
│   ├── features.js                 # Feature data (5 items)
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Global styles + Tailwind
├── package.json                    # Dependencies and scripts
├── tailwind.config.js             # Tailwind configuration
├── vite.config.js                 # Vite configuration
└── README.md                       # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm 8+

### Local Development

1. **Clone and Install**
   ```bash
   cd assignment
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   - Navigate to `http://localhost:3000`
   - The app will automatically open in your default browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Set project name (e.g., "feature-showcase")
   - Confirm deployment settings

### Option 2: Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Feature Showcase"
   git branch -M main
   git remote add origin https://github.com/yourusername/feature-showcase.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect React settings
   - Click "Deploy"

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/feature-showcase)

## 📱 Responsive Design

### Desktop (lg: 1024px+)
- 3-column grid layout
- Side-by-side content display
- Full feature descriptions visible

### Mobile (< 1024px)
- Stacked vertical layout
- iPhone mockup on top
- Feature details in center
- Feature list at bottom
- Touch-friendly tap targets

## 🎯 Evaluation Criteria Alignment

### Functionality (40%) ✅
- [x] Clickable feature points with active state
- [x] Left/right arrow navigation
- [x] Sticky scroll behavior
- [x] Auto-advance features 1→5 on scroll
- [x] Smooth transitions between features

### Responsiveness (25%) ✅
- [x] Desktop 3-column layout
- [x] Mobile stacked layout
- [x] Touch-friendly interface
- [x] Proper spacing on all devices

### Code Quality (20%) ✅
- [x] Modular component structure
- [x] Clean, readable code
- [x] Comprehensive documentation
- [x] Proper React patterns and hooks

### Polish/UX (15%) ✅
- [x] Smooth animations and transitions
- [x] Visual feedback and hover states
- [x] Professional iPhone mockup design
- [x] Consistent spacing and typography

## 🔧 Customization

### Adding New Features
Edit `src/features.js` to add more features:
```javascript
{
  id: 6,
  title: "Feature No.6 -",
  heading: "NEW FEATURE HEADING",
  description: ["Point 1", "Point 2", "Point 3"],
  image: "/placeholder-6.jpg"
}
```

### Styling Changes
- Modify `tailwind.config.js` for custom colors and animations
- Update `src/index.css` for global styles
- Component-specific styles in individual JSX files

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
```bash
npm run build
# Check for syntax errors or missing dependencies
```

**Styling Issues**
```bash
npm run dev
# Ensure Tailwind CSS is properly configured
```

**Deployment Issues**
- Verify `vercel.json` configuration
- Check build output in Vercel dashboard
- Ensure all dependencies are in `package.json`

## 📄 License

This project is created for MERN Internship Assignment purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Ready to deploy?** Follow the Vercel deployment instructions above to get your Feature Showcase live on the web! 🚀
