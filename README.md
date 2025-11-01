# 🚀 Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my skills, projects, and professional experience as an AWS Data Engineer and Python Backend Developer.

<img width="1881" height="864" alt="Screenshot 2025-11-01 113350" src="https://github.com/user-attachments/assets/943b0b17-32ec-4bc0-aba8-6cf65f814480" />


## ✨ Features

- **Responsive Design** - Seamless experience across all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean and professional interface with smooth animations
- **Interactive Components** - Engaging hover effects and transitions
- **Fast Performance** - Optimized React components for quick loading
- **Easy Customization** - Well-structured code for easy modifications
- **SEO Friendly** - Semantic HTML and proper meta tags

## 🛠️ Technologies Used

- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **JavaScript ES6+** - Modern JavaScript features

## 📋 Sections

1. **Home** - Hero section with introduction and call-to-action
2. **Skills** - Technical skills organized by categories
3. **Projects** - Showcase of featured projects with descriptions
4. **Experience** - Professional work experience timeline
5. **Contact** - Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization Guide

### Update Personal Information

1. **Profile Photo**: Replace `/p1.jpg` in the `public` folder with your photo
2. **Contact Info**: Update email, LinkedIn, and GitHub links in `ContactSection` component
3. **Resume**: Add your resume PDF to the `public` folder and update the download button link

### Modify Content

#### Skills Section
```javascript
const skillCategories = [
  {
    title: "Your Category",
    icon: <YourIcon className="w-6 h-6" />,
    color: "cyan",
    skills: ["Skill1", "Skill2", "Skill3"]
  }
];
```

#### Projects Section
```javascript
const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    tech: ["Tech1", "Tech2"],
    github: "https://github.com/...",
    live: "https://demo-link.com"
  }
];
```

#### Experience Section
```javascript
const experiences = [
  {
    role: "Your Role",
    company: "Company Name",
    location: "Location",
    period: "Start - End",
    description: ["Achievement 1", "Achievement 2"]
  }
];
```

### Color Customization

The primary accent color is cyan. To change it:

1. Search for `cyan-600` in the code
2. Replace with your preferred Tailwind color (e.g., `blue-600`, `purple-600`)
3. Update hover states accordingly

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── p1.jpg              # Your profile photo
│   └── resume.pdf          # Your resume
├── src/
│   ├── App.js              # Main component
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── package.json
└── README.md
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🌐 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `build`
7. Click "Deploy site"

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Optimization Tips

- Optimize images (use WebP format)
- Lazy load components
- Minimize bundle size
- Use React.memo for expensive components
- Enable code splitting

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Sanket Bhagat**

- Email: Sanketbhagat1710@gmail.com
- LinkedIn: [ LinkedIn Profile](https://www.linkedin.com/in/contactsanketbhagat/)
- GitHub: [@Sanket](https://github.com/Sanketb04)

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Create React App](https://create-react-app.dev/)

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/Sanketb04/portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/Sanketb04/portfolio?style=social)
![GitHub issues](https://img.shields.io/github/issues/Sanketb04/portfolio)
![GitHub license](https://img.shields.io/github/license/Sanketb04/portfolio)

---

⭐ If you like this project, please give it a star!

Made with ❤️ by Sanket Bhagat
