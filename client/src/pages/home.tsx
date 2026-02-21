import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import driveIQScreenshot from "@assets/image_1769337265421.png";
import sweetNCrumblesScreenshot from "@assets/image_1770364053560.png";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code2,
  Layers,
  Zap,
  Car,
  Cake,
  CheckCircle,
  ArrowRight,
  Download,
  ChevronDown,
  Instagram,
} from "lucide-react";


const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
  { label: "Work With Me", href: "#services" },
];

const skills = [
  "Java", "Python", "C++", "JavaScript", "TypeScript", "React", "React Native",
  "Firebase", "Node.js", "Swift", "SQL", "Git", "REST APIs"
];

const services = [
  { 
    id: "lite", 
    name: "Lite Site", 
    price: "$250", 
    timeline: "~7 days",
    forWho: "Portfolios & simple businesses",
    description: "Perfect for portfolios and simple businesses that need a clean, professional online presence.",
    features: ["1-page responsive website", "Custom layout", "Mobile optimization", "Basic SEO", "Domain + hosting setup"],
    link: "https://square.link/u/kogWQGB8",
  },
  { 
    id: "business", 
    name: "Business Website", 
    price: "$600", 
    timeline: "2–4 weeks",
    forWho: "Small businesses",
    description: "Ideal for small businesses needing dynamic features and a multi-page professional website.",
    features: ["3–5 pages", "Custom design", "Contact forms", "SEO basics", "Domain + hosting setup", "Simple backend (forms or orders)", "Copywriting"],
    link: "https://square.link/u/6jLkNuxl",
  },
  { 
    id: "webapp", 
    name: "Web App / Custom Build", 
    price: "Starting at $1,200", 
    timeline: "Varies",
    forWho: "Startups & custom software",
    description: "For startups and custom software solutions. Custom quote required.",
    features: ["React frontend", "Backend APIs", "Authentication", "Dashboards", "Database integration", "Scalable architecture", "Copywriting"],
    link: "https://square.link/u/6jLkNuxl",
  },
];

const maintenancePlans = [
  {
    id: "basic",
    name: "Basic Care",
    price: "$50",
    forWho: "Static sites only",
    features: ["Hosting", "SSL certificates", "Uptime monitoring", "Small content updates", "Bug fixes"],
    link: "https://square.link/u/FVDOonSu",
  },
  {
    id: "business-care",
    name: "Business Care",
    price: "$100",
    forWho: "Business websites",
    link: "https://square.link/u/7hkedbaU",
    features: ["Hosting", "Backend maintenance", "Bug fixes", "Redeployments", "Domain + SSL management", "Small feature updates", "Priority support"],
  },
  {
    id: "app-care",
    link: "https://square.link/u/7hkedbaU",
    name: "App Care",
    price: "$150–250",
    forWho: "Web applications",
    features: ["Server monitoring", "API maintenance", "Database support", "Feature updates", "Scaling assistance"],
  },
];

const resumeItems = [
  {
    type: "experience",
    title: "Research Intern, Digital Forensics & A.I.",
    subtitle: "Northrop Grumman • Tallahassee, FL • Aug '23 - Aug '24",
    description: "Conducted forensic analysis using Autopsy to extract file metadata, thumbnail fragments, and hidden headers. Applied YOLOv7 object detection to real-world dashcam data to flag seatbelt usage and classify objects. Detected safety violations in 10,000+ video frames, reducing false-positive rate by 25%.",
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    subtitle: "Florida A&M University, Tallahassee, FL (May 2025)",
    description: "Google Computer Science Scholarship recipient. Dean's List (3x). Active member of NSBE, BDPA, and FAVES volunteer organization. Student athlete with strong foundation in software engineering, data structures, and algorithms.",
  },
  {
    type: "experience",
    title: "Software Developer",
    subtitle: "Full-Stack Development",
    description: "Hands-on experience building web applications from the ground up, designing features, structuring data, and implementing clean, maintainable code.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-16">
            <a href="#" className="text-xl font-semibold text-foreground" data-testid="link-logo">
              Daylen<span className="text-primary">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 flex-wrap">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover-elevate"
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </a>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t py-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md transition-colors hover-elevate"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge variant="secondary" className="mb-6" data-testid="badge-availability">
              <span className="mr-2 inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for new projects
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight" data-testid="text-hero-title">
              Hi, I'm <span className="text-primary">Daylen</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="text-hero-subtitle">
              Software Developer specializing in building practical, user-focused web applications
              with clean design and solid engineering.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild data-testid="button-view-work">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild data-testid="button-contact-hero">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <a
                href="https://github.com/daylenx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-github-hero"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/daylen-hall/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-linkedin-hero"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/devdaylen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-instagram-hero"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:daylen25147@gmail.com"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-email-hero"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-center mt-16"
          >
            <a 
              href="#about" 
              className="animate-bounce text-muted-foreground hover:text-foreground"
              data-testid="link-scroll-down"
            >
              <ChevronDown className="h-8 w-8" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-about-title">About Me</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <div className="space-y-6 text-muted-foreground" data-testid="text-about-content">
                  <p className="text-lg leading-relaxed">
                    I graduated from Florida A&M University with a Bachelor's in Computer Science
                    and have a passion for building practical, user-focused applications. I'm a hard worker, 
                    fast learner, and team player looking to grow in the software development space.
                  </p>
                  <p className="leading-relaxed">
                    I enjoy working on projects that combine clean design with solid engineering,
                    especially web and mobile applications that solve real problems. My experience
                    includes designing end-to-end, data-driven applications and working with modern
                    tools like React, TypeScript, Firebase, and Swift for iOS development.
                  </p>
                  <p className="leading-relaxed">
                    During my time at FAMU, I was a student athlete playing football while balancing
                    academics and staying involved in organizations like NSBE, BDPA, and FAVES. That
                    experience taught me discipline, time management, and how to perform under pressure.
                  </p>
                  <p className="leading-relaxed">
                    Outside of coding, you'll find me watching football or gaming on Xbox. I'm always
                    eager to take on new challenges and continue growing as a developer.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="overflow-visible">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-primary" />
                      Skills & Technologies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <Badge key={skill} variant="secondary" data-testid={`badge-skill-${index}`}>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <Card className="text-center overflow-visible" data-testid="card-trait-fullstack">
                    <CardContent className="pt-6">
                      <Layers className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium text-muted-foreground">Full-Stack</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center overflow-visible" data-testid="card-trait-learner">
                    <CardContent className="pt-6">
                      <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium text-muted-foreground">Fast Learner</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center overflow-visible" data-testid="card-trait-detail">
                    <CardContent className="pt-6">
                      <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium text-muted-foreground">Detail-Oriented</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-projects-title">Projects</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-8">
              <Card className="overflow-visible" data-testid="card-project-driveiq">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Car className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl" data-testid="text-project-title-driveiq">DriveIQ</CardTitle>
                        <CardDescription className="text-base" data-testid="text-project-subtitle-driveiq">Vehicle Maintenance Tracking App · Custom Build</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                      <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-project-description-driveiq">
                        DriveIQ is a vehicle maintenance tracking web application designed to help users
                        stay on top of service schedules and vehicle health without relying on memory or
                        paper records.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        The app allows users to manage one or multiple vehicles, log maintenance and
                        service history, and track important details such as mileage, service dates,
                        notes, and costs. DriveIQ is built with scalability in mind, making it suitable
                        for individual drivers, families, or small fleets.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        The goal of DriveIQ is simple: reduce missed maintenance, improve vehicle
                        longevity, and give users a clear view of their vehicle history in one place.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <div className="relative max-w-[280px] rounded-2xl overflow-hidden shadow-xl border border-border">
                        <img 
                          src={driveIQScreenshot} 
                          alt="DriveIQ Vehicle Details Screen" 
                          className="w-full h-auto"
                          data-testid="img-driveiq-screenshot"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "Multi-vehicle management",
                        "Maintenance and service logging",
                        "Odometer tracking",
                        "Clean, dashboard-style interface",
                        "Scalable architecture",
                        "Full web application"
                      ].map((feature, index) => (
                        <div key={feature} className="flex items-center gap-2" data-testid={`text-driveiq-feature-${index}`}>
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t">
                    {["React", "TypeScript", "Firebase", "Modern Web Development"].map((tech, index) => (
                      <Badge key={tech} variant="secondary" data-testid={`badge-driveiq-tech-${index}`}>{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-visible" data-testid="card-project-sweetncrumbles">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Cake className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl" data-testid="text-project-title-snc">Sweet N' Crumbles</CardTitle>
                        <CardDescription className="text-base" data-testid="text-project-subtitle-snc">Dessert Business Website · Lite Site</CardDescription>
                      </div>
                    </div>
                    <a
                      href="https://www.sweetncrumbles.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="link-snc-website"
                    >
                      <Button variant="outline" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Visit Website
                      </Button>
                    </a>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                      <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-project-description-snc">
                        Sweet N' Crumbles is a mobile-friendly website built for a handcrafted dessert business
                        specializing in cheesecake stuffed strawberries, dipped strawberries, dessert cups,
                        and custom party treats.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        The site features a full menu with pricing, an order request system for future and
                        catering orders, and a clean, inviting design that reflects the brand's personality.
                        Built with a focus on mobile-first design since most customers browse and order from
                        their phones.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        This project showcases real-world freelance work — designing, building, and deploying
                        a complete business website for a client from start to finish.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <div className="relative max-w-[280px] rounded-2xl overflow-hidden shadow-xl border border-border">
                        <img 
                          src={sweetNCrumblesScreenshot} 
                          alt="Sweet N' Crumbles Homepage" 
                          className="w-full h-auto"
                          data-testid="img-snc-screenshot"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "Mobile-first responsive design",
                        "Full menu with pricing",
                        "Order request system",
                        "Catering & party order support",
                        "Future order scheduling",
                        "Clean, branded UI"
                      ].map((feature, index) => (
                        <div key={feature} className="flex items-center gap-2" data-testid={`text-snc-feature-${index}`}>
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t">
                    {["React", "TypeScript", "Mobile First Design", "Freelance Project"].map((tech, index) => (
                      <Badge key={tech} variant="secondary" data-testid={`badge-snc-tech-${index}`}>{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-resume-title">Resume</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              {resumeItems.map((item, index) => (
                <Card key={index} className="overflow-visible" data-testid={`card-resume-${index}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary" className="uppercase text-xs" data-testid={`badge-resume-type-${index}`}>
                        {item.type}
                      </Badge>
                    </div>
                    <CardTitle data-testid={`text-resume-title-${index}`}>{item.title}</CardTitle>
                    <CardDescription className="text-base" data-testid={`text-resume-subtitle-${index}`}>{item.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground" data-testid={`text-resume-desc-${index}`}>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center mt-8">
              <p className="text-muted-foreground mb-4" data-testid="text-resume-cta">
                Interested in learning more about my background?
              </p>
              <Button variant="outline" size="lg" asChild data-testid="button-download-resume">
                <a href="https://docs.google.com/document/d/1_x4HLHutH19B7zOlNSAW2_vrcOkL2cG-GElVxfQTEDQ/export?format=pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">Work With Me</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" data-testid="text-services-subtitle">
                Looking to build a custom website? I offer professional web development services
                tailored to your needs.
              </p>
              <p className="text-sm text-muted-foreground mt-2" data-testid="text-copywriting-note">
                Need copywriting only? Contact me for a custom quote.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.id} className="overflow-visible hover-elevate flex flex-col" data-testid={`card-service-${service.id}`}>
                  <CardHeader className="pb-4">
                    <Badge variant="secondary" className="w-fit mb-2 text-xs" data-testid={`badge-service-for-${service.id}`}>
                      {service.forWho}
                    </Badge>
                    <CardTitle className="text-xl" data-testid={`text-service-name-${service.id}`}>{service.name}</CardTitle>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-3xl font-bold text-primary" data-testid={`text-service-price-${service.id}`}>{service.price}</span>
                      <span className="text-sm text-muted-foreground">• {service.timeline}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <p className="text-muted-foreground text-sm" data-testid={`text-service-desc-${service.id}`}>{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {service.link && (
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-service-buy-${service.id}`}
                      >
                        <Button className="w-full mt-4 gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Get Started
                        </Button>
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2" data-testid="text-maintenance-title">Hosting & Maintenance Plans</h3>
                <p className="text-muted-foreground text-sm">Monthly plans to keep your site running smoothly</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {maintenancePlans.map((plan) => (
                  <Card key={plan.id} className="overflow-visible hover-elevate flex flex-col" data-testid={`card-maintenance-${plan.id}`}>
                    <CardHeader className="pb-4">
                      <Badge variant="secondary" className="w-fit mb-2 text-xs" data-testid={`badge-maintenance-for-${plan.id}`}>
                        {plan.forWho}
                      </Badge>
                      <CardTitle className="text-xl" data-testid={`text-maintenance-name-${plan.id}`}>{plan.name}</CardTitle>
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-3xl font-bold text-primary" data-testid={`text-maintenance-price-${plan.id}`}>{plan.price}</span>
                        <span className="text-sm text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {plan.link && (
                        <a
                          href={plan.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid={`link-maintenance-buy-${plan.id}`}
                        >
                          <Button className="w-full mt-4 gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Get Started
                          </Button>
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6" data-testid="text-maintenance-note">
                Business websites and web applications require the Business or App Care plan.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center mt-10">
              <Button size="lg" asChild data-testid="button-get-started">
                <a href="#contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-contact-title">Get In Touch</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" data-testid="text-contact-subtitle">
                Have a project in mind or just want to say hello? I'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <motion.div variants={fadeInUp}>
                <Card className="overflow-visible hover-elevate" data-testid="card-contact-email">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a
                          href="mailto:daylen25147@gmail.com"
                          className="font-medium text-foreground hover:text-primary transition-colors"
                          data-testid="link-email-contact"
                        >
                          daylen25147@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="overflow-visible hover-elevate" data-testid="card-contact-phone">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a
                          href="tel:3175631497"
                          className="font-medium text-foreground hover:text-primary transition-colors"
                          data-testid="link-phone-contact"
                        >
                          (317) 563-1497
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="overflow-visible hover-elevate" data-testid="card-contact-github">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Github className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">GitHub</p>
                        <a
                          href="https://github.com/daylenx"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-foreground hover:text-primary transition-colors"
                          data-testid="link-github-contact"
                        >
                          github.com/daylenx
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="overflow-visible hover-elevate" data-testid="card-contact-linkedin">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Linkedin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">LinkedIn</p>
                        <a
                          href="https://www.linkedin.com/in/daylen-hall/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-foreground hover:text-primary transition-colors"
                          data-testid="link-linkedin-contact"
                        >
                          linkedin.com/in/daylen-hall
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">
            <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
              {new Date().getFullYear()} Daylen Hall. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/daylenx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-github-footer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/daylen-hall/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-linkedin-footer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:daylen25147@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-email-footer"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
