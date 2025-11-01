import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Download, Menu, X, Code, Database, Cloud, Server, ChevronRight, Briefcase, GraduationCap, Award, Zap } from 'lucide-react';

// Floating particles background component
const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Navigation with scroll effect
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl shadow-cyan-500/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="relative group cursor-pointer">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SB
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300" />
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {['home', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative px-4 py-2 text-gray-300 hover:text-cyan-400 transition capitalize group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <button className="md:hidden text-gray-300 hover:text-cyan-400 transition" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {['home', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-3 px-4 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Enhanced Hero Section with animated gradient and 3D effect
const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <ParticlesBackground />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
              <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-mono text-sm">Available for opportunities</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Sanket Bhagat
                </span>
              </h1>
              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Data Engineer &
                </span>
              </h2>
              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  Python Backend Developer
                </span>
              </h2>
            </div>

            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Architecting scalable data pipelines and cloud-native solutions. Transforming complex data into strategic business intelligence with cutting-edge AWS technologies.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={20} />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50"
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { value: '2+', label: 'Years Experience' },
                { value: '10+', label: 'Projects Built' },
                { value: '5+', label: 'AWS Services' }
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Photo with 3D effect */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
              
              {/* Main image container */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-spin-slow" />
                <div className="absolute inset-2 bg-slate-900 rounded-full" />
                <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-slate-800 group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/p1.jpg" 
                    alt="Sanket Bhagat"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-2xl shadow-2xl shadow-cyan-500/50 animate-bounce-slow">
                <span className="font-bold flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Open to Work
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

// Enhanced Skills Section with hover animations
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500",
      skills: ["Python", "SQL", "PySpark", "JavaScript"]
    },
    {
      title: "AWS Cloud Services",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500",
      skills: ["S3", "Glue", "Lambda", "Redshift", "EC2", "RDS", "Athena", "Step Functions", "CloudWatch", "IAM"]
    },
    {
      title: "Frameworks & Tools",
      icon: <Server className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: ["Flask", "FastAPI", "Apache Spark", "Airflow", "Docker", "Git", "CI/CD"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      color: "from-pink-500 to-cyan-500",
      skills: ["MySQL", "PostgreSQL", "AWS Redshift", "DynamoDB"]
    }
  ];

  return (
    <section id="skills" className="relative py-32 bg-slate-900 overflow-hidden">
      <ParticlesBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-400">Cutting-edge technologies I master</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="group relative"
            >
              {/* Animated border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500`} />
              
              <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="group/skill relative px-4 py-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-cyan-400 transition-all duration-300 cursor-default"
                    >
                      <span className="relative z-10 text-gray-300 group-hover/skill:text-white transition-colors">
                        {skill}
                      </span>
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl opacity-0 group-hover/skill:opacity-20 transition-opacity`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Projects Section with modern cards
const ProjectsSection = () => {
  const projects = [
    {
      title: "Stock Price Data Collection & Processing",
      description: "Architected serverless ETL pipeline leveraging AWS Lambda, S3, and Glue for real-time stock market data processing. Implemented automated hourly collection with CloudWatch orchestration and RESTful API exposure.",
      tech: ["AWS Lambda", "S3", "Glue", "API Gateway", "Python", "Pandas"],
      gradient: "from-cyan-500 to-blue-500",
      github: "#",
      live: "#"
    },
    {
      title: "AI-Powered Data Engineering Pipeline",
      description: "Engineered comprehensive automated pipeline integrating AWS ecosystem with SageMaker AutoML. Achieved 60% reduction in manual data preparation through intelligent Step Functions orchestration.",
      tech: ["SageMaker", "Lambda", "S3", "Redshift", "Step Functions", "boto3"],
      gradient: "from-blue-500 to-purple-500",
      github: "#",
      live: "#"
    },
    {
      title: "Real-Time Tweet Stream Analytics",
      description: "Developed high-throughput data pipeline utilizing Kafka and Spark Streaming for live social media analysis. Implemented advanced sentiment analysis with PySpark for actionable insights.",
      tech: ["Kafka", "Spark Streaming", "PySpark", "AWS S3", "Python"],
      gradient: "from-purple-500 to-pink-500",
      github: "#",
      live: "#"
    },
    {
      title: "NYC Taxi Data Analytics Platform",
      description: "Constructed enterprise-grade pipeline processing massive NYC taxi datasets. Optimized real-time analytics using Databricks, delivering comprehensive fleet performance visualizations.",
      tech: ["Databricks", "PySpark", "Python", "Visualization", "ETL"],
      gradient: "from-pink-500 to-cyan-500",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="relative py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDgsIDIxNiwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400">Innovative solutions that drive results</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-20 group-hover:opacity-100 transition duration-500`} />
              
              <div className="relative h-full bg-slate-800/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 group-hover:border-transparent transition-all duration-500">
                <div className="space-y-6">
                  <div className={`inline-block p-3 bg-gradient-to-r ${project.gradient} rounded-xl`}>
                    <Code className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs bg-slate-900/80 text-cyan-400 border border-slate-700 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a 
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-gray-300 rounded-xl hover:bg-slate-700 hover:text-cyan-400 transition-all duration-300 group/btn"
                    >
                      <Github size={18} />
                      <span>Code</span>
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    <a 
                      href={project.live}
                      className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 group/btn`}
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Experience Section
const ExperienceSection = () => {
  const experiences = [
    {
      role: "AWS Data Engineer / Python Developer",
      company: "Tech Development IT Services",
      location: "Pune",
      period: "Oct 2024 – Present",
      icon: <Briefcase className="w-5 h-5" />,
      gradient: "from-cyan-500 to-blue-500",
      description: [
        "Architected and deployed sophisticated data pipelines using AWS Glue and Lambda for automated ETL operations",
        "Engineered high-performance RESTful APIs with Flask and FastAPI for seamless backend integration",
        "Orchestrated S3-based data lake architecture and optimized Redshift analytics infrastructure",
        "Implemented comprehensive monitoring solutions with AWS CloudWatch for pipeline observability"
      ]
    },
    {
      role: "ETL Developer Intern",
      company: "Rubix AI Solutions",
      location: "Pune",
      period: "Jan 2024 – Aug 2024",
      icon: <Code className="w-5 h-5" />,
      gradient: "from-purple-500 to-pink-500",
      description: [
        "Developed and optimized enterprise ETL pipelines leveraging Azure Data Factory and Databricks",
        "Implemented Delta Lake architecture for efficient incremental data loading patterns",
        "Engineered AWS S3 and Glue workflows for scalable data transformation",
        "Created advanced SQL aggregation logic powering interactive Power BI dashboards"
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-32 bg-slate-900 overflow-hidden">
      <ParticlesBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          <p className="text-xl text-gray-400">Building innovative solutions at scale</p>
        </div>

        <div className="relative space-y-12">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-24">
              {/* Timeline dot */}
              <div className={`absolute left-4 top-8 w-8 h-8 bg-gradient-to-r ${exp.gradient} rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50`}>
                {exp.icon}
              </div>

              <div className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${exp.gradient} rounded-3xl blur opacity-20 group-hover:opacity-100 transition duration-500`} />
                
                <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 group-hover:border-transparent transition-all duration-500">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-xl text-white font-semibold">{exp.company}</p>
                      <p className="text-gray-400">{exp.location}</p>
                    </div>
                    <div className={`px-6 py-3 bg-gradient-to-r ${exp.gradient} rounded-2xl text-white font-semibold shadow-lg`}>
                      {exp.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors">
                        <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = () => {
    alert('Thanks for reaching out! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
      <ParticlesBackground />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-400">Ready to build something amazing together?</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Name</label>
                  <input 
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-900 text-white px-6 py-4 rounded-xl border border-slate-700 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Email</label>
                  <input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-900 text-white px-6 py-4 rounded-xl border border-slate-700 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Message</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="5"
                    className="w-full bg-slate-900 text-white px-6 py-4 rounded-xl border border-slate-700 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button 
                  onClick={handleSubmit}
                  className="group/btn w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info & Education */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-20 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:Sanketbhagat1710@gmail.com"
                    className="group/link flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl hover:bg-slate-900 transition-all"
                  >
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white group-hover/link:text-cyan-400 transition-colors">Sanketbhagat1710@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/contactsanketbhagat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl hover:bg-slate-900 transition-all"
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <p className="text-white group-hover/link:text-cyan-400 transition-colors">Connect with me</p>
                    </div>
                  </a>

                  <a 
                    href="https://github.com/Sanketb04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl hover:bg-slate-900 transition-all"
                  >
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                      <Github className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">GitHub</p>
                      <p className="text-white group-hover/link:text-cyan-400 transition-colors">View my code</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="p-4 bg-slate-900/50 rounded-xl">
                    <p className="text-lg font-bold text-cyan-400 mb-1">Master of Computer Science</p>
                    <p className="text-white font-medium">University of Pune</p>
                    <p className="text-gray-400 text-sm">2024 - 2026</p>
                    <div className="mt-2 inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                      <p className="text-white text-sm font-semibold">CGPA: 8.90</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-slate-900/50 rounded-xl">
                    <p className="text-lg font-bold text-purple-400 mb-1">Bachelor of Computer Science</p>
                    <p className="text-white font-medium">University of Pune</p>
                    <p className="text-gray-400 text-sm">2021 - 2024</p>
                    <div className="mt-2 inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                      <p className="text-white text-sm font-semibold">CGPA: 8.36</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Footer
const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/contactsanketbhagat/", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, url: "https://github.com/Sanketb04", label: "GitHub" },
    { icon: <Mail className="w-5 h-5" />, url: "mailto:Sanketbhagat1710@gmail.com", label: "Email" }
  ];

  return (
    <footer className="relative bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 mb-2">
              © 2025 Sanket Bhagat. Crafted with passion.
            </p>
            <p className="text-sm text-gray-500">
              Built with React & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-slate-900 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-sm text-gray-500">
            Transforming data into insights • Building the future with code
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export default function Portfolio() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float linear infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
      `}</style>
      
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}