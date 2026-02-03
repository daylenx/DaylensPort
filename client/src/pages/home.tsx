import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { ThemeToggle } from "@/components/theme-toggle";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { contactMessageSchema, type ContactMessage } from "@shared/schema";
import driveIQScreenshot from "@assets/image_1769337265421.png";
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
  CheckCircle,
  ArrowRight,
  Download,
  ChevronDown,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
  { label: "Work With Me", href: "#services" },
];

const skills = [
  "React", "TypeScript", "JavaScript", "Firebase", "Node.js", "HTML/CSS",
  "Tailwind CSS", "Git", "REST APIs", "Responsive Design"
];

const services = [
  { 
    id: "lite", 
    name: "Lite Site", 
    price: "$200", 
    timeline: "7 days",
    forWho: "Hobbyists, side hustles, students",
    description: "Perfect 1-page site with intro, products/services, and contact sections. Mobile responsive with simple, clean design. Deployed and live.",
    features: ["1-page site", "Mobile responsive", "Simple design", "Domain + hosting setup"],
  },
  { 
    id: "business", 
    name: "Starter / Business Site", 
    price: "$500", 
    timeline: "3–4 weeks",
    forWho: "Small businesses",
    description: "Comprehensive 3–5 page website with custom layout, contact form, SEO basics, and domain + hosting setup included.",
    features: ["3–5 pages", "Custom layout", "Contact form", "SEO basics", "Domain + hosting setup"],
  },
  { 
    id: "webapp", 
    name: "Web App / Custom Build", 
    price: "$1,000", 
    timeline: "4+ weeks",
    forWho: "Startups, internal tools",
    description: "Full-featured React application with authentication, dashboards, API integrations, and scalable architecture built for growth.",
    features: ["React app", "Auth / dashboards", "APIs / backend", "Scalable architecture"],
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
    subtitle: "Florida A&M University • Tallahassee, FL • Spring '25",
    description: "Strong foundation in software engineering, data structures, algorithms, and modern development practices. Active member of NSBE (National Society of Black Engineers), BDPA (Black Data Processing Associates), and ACM (Association for Computing Machinery).",
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
  const { toast } = useToast();

  const form = useForm<ContactMessage>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactMessage) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactMessage) => {
    contactMutation.mutate(data);
  };

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
              Hi, I'm <span className="text-primary">Daylen Hall</span>
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
                    I'm a recent Florida A&M University graduate with a Bachelor's in Computer Science
                    and a strong interest in building practical, user-focused applications.
                  </p>
                  <p className="leading-relaxed">
                    I enjoy working on projects that combine clean design with solid engineering,
                    especially web applications that solve real problems. Most of my experience
                    comes from hands-on projects where I've designed features, structured data,
                    and built full applications from the ground up.
                  </p>
                  <p className="leading-relaxed">
                    I'm especially interested in frontend and full-stack development, and I like
                    working with modern tools such as React, TypeScript, and Firebase. I care a
                    lot about writing readable code, thinking through edge cases, and understanding
                    why a solution works — not just making something function.
                  </p>
                  <p className="leading-relaxed">
                    During my time at FAMU, I was actively involved in NSBE, BDPA, and ACM — communities
                    that helped me grow both technically and professionally. Outside of coding, you'll
                    find me watching football or gaming on Xbox.
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

            <motion.div variants={fadeInUp}>
              <Card className="overflow-visible" data-testid="card-project-driveiq">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Car className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl" data-testid="text-project-title">DriveIQ</CardTitle>
                        <CardDescription className="text-base" data-testid="text-project-subtitle">Vehicle Maintenance Tracking App</CardDescription>
                      </div>
                    </div>
                    <a
                      href="https://github.com/daylenx/DriveIQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="link-driveiq-github"
                    >
                      <Button variant="outline" className="gap-2">
                        <Github className="h-4 w-4" />
                        View on GitHub
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                      <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-project-description">
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
                        <div key={feature} className="flex items-center gap-2" data-testid={`text-feature-${index}`}>
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t">
                    {["React", "TypeScript", "Firebase", "Modern Web Development"].map((tech, index) => (
                      <Badge key={tech} variant="secondary" data-testid={`badge-tech-${index}`}>{tech}</Badge>
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
                <a href="#contact">
                  <Download className="mr-2 h-4 w-4" />
                  Request Full Resume
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
                  </CardContent>
                </Card>
              ))}
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

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInUp}>
                <Card className="overflow-visible">
                  <CardHeader>
                    <CardTitle data-testid="text-form-title">Send a Message</CardTitle>
                    <CardDescription data-testid="text-form-subtitle">Fill out the form and I'll get back to you soon.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input 
                                  placeholder="Your Name" 
                                  {...field} 
                                  data-testid="input-contact-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="Your Email" 
                                  {...field} 
                                  data-testid="input-contact-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Textarea
                                  placeholder="Your Message"
                                  rows={5}
                                  className="resize-none"
                                  {...field}
                                  data-testid="input-contact-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="submit"
                          className="w-full"
                          disabled={contactMutation.isPending}
                          data-testid="button-submit-contact"
                        >
                          {contactMutation.isPending ? "Sending..." : "Send Message"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <Card className="overflow-visible" data-testid="card-contact-email">
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

                <Card className="overflow-visible" data-testid="card-contact-phone">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a
                          href="tel:3178097510"
                          className="font-medium text-foreground hover:text-primary transition-colors"
                          data-testid="link-phone-contact"
                        >
                          (317) 809-7510
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-visible" data-testid="card-contact-github">
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

                <Card className="overflow-visible" data-testid="card-contact-linkedin">
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
