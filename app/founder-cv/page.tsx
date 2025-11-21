'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.webp';
import {
  Wrench,
  Code,
  Database,
  Factory,
  Cpu,
  Zap,
  Award,
  BookOpen,
  Briefcase,
  Mail,
  Linkedin,
  Phone,
  MapPin,
  ExternalLink,
  Terminal,
  Activity,
  Menu,
  X,
  ChevronRight,
  ShoppingCart,
  Globe,
  GraduationCap,
  Users,
  Heart,
} from 'lucide-react';
import Link from 'next/link';

const FounderCVPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  const NavLink = ({ id, label }: { id: string; label: string }) => (
    <button
      onClick={() => scrollTo(id)}
      className={`text-sm font-medium tracking-wider hover:text-orange-600 transition-colors ${
        activeSection === id ? 'text-orange-600' : 'text-slate-600'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <Image src={logo} alt="Maintafox" width={32} height={32} className="rounded-md" />
            <span className="text-xl font-bold tracking-tighter text-slate-900">Maintafox</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            <NavLink id="about" label="ABOUT" />
            <NavLink id="skills" label="SKILLS" />
            <NavLink id="education" label="EDUCATION" />
            <NavLink id="experience" label="EXPERIENCE" />
            <NavLink id="projects" label="PROJECTS" />
            <button
              onClick={() => scrollTo('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20"
            >
              CONTACT ME
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-6 shadow-2xl">
            <NavLink id="about" label="ABOUT" />
            <NavLink id="skills" label="SKILLS" />
            <NavLink id="education" label="EDUCATION" />
            <NavLink id="experience" label="EXPERIENCE" />
            <NavLink id="projects" label="PROJECTS" />
            <NavLink id="contact" label="CONTACT" />
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50"></div>

        {/* Animated Glow Orbs - Adjusted for Light Theme */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-400/10 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-blue-600 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              SYSTEM ONLINE: INDUSTRIAL ENGINEER
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-xl ring-1 ring-slate-200">
                <Image
                  src="/me.webp"
                  alt="Oussama Brahimi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tight">
                OUSSAMA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  BRAHIMI
                </span>
              </h1>
            </div>

            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              <span className="text-orange-600 font-semibold">Industrial Maintenance Engineer</span>{' '}
              & Founder of Maintafox. Combining deep reliability expertise with advanced software
              solutions to optimize industrial performance.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollTo('projects')}
                className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-slate-900/20"
              >
                <Cpu size={20} />
                View Innovations
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="border border-slate-300 hover:border-orange-500 text-slate-600 hover:text-orange-600 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all bg-white/50 hover:bg-white"
              >
                Let&apos;s Connect
              </button>
            </div>
          </div>

          {/* Hero Dashboard Graphic */}
          <div className="relative">
            <div className="relative bg-white/90 backdrop-blur-xl border border-slate-200 rounded-2xl p-6 shadow-2xl transform md:rotate-3 transition-transform hover:rotate-0 duration-500 group">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-blue-500"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-orange-500"></div>

              <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <Terminal size={18} className="text-slate-400" />
                  <span className="text-sm font-mono text-slate-500">oussama_profile.exe</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-100">
                  <span className="text-slate-500">Focus</span>
                  <span className="text-green-600 font-medium">CMMS & Reliability</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-100">
                  <span className="text-slate-500">Core Project</span>
                  <span className="text-orange-600 font-medium">Maintafox System</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-100">
                  <span className="text-slate-500">Status</span>
                  <span className="text-blue-600 font-medium">Master 2 Maint. Ind.</span>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span>Engineering Skills</span>
                    <span>98%</span>
                  </div>
                  <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-orange-600 w-[98%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project: Maintafox */}
      <section id="about" className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-orange-600 font-mono text-sm mb-2 tracking-widest">
                FEATURED INNOVATION
              </h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">
                <Link href="/" className="hover:text-blue-600 transition-colors">
                  Maintafox
                </Link>{' '}
                <span className="font-light text-slate-400">CMMS</span>
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                A comprehensive Computerized Maintenance Management System (CMMS/GMAO) designed to
                revolutionize industrial workflows. Maintafox is a complex, advanced ecosystem built
                to integrate IIoT principles with robust maintenance planning.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-slate-600">
                  <Zap size={18} className="text-yellow-500 mt-1 shrink-0" />
                  <span>Advanced workflow & intervention tracking</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <Database size={18} className="text-blue-500 mt-1 shrink-0" />
                  <span>Enterprise-grade architecture & data handling</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <Activity size={18} className="text-green-500 mt-1 shrink-0" />
                  <span>Predictive maintenance modeling ready</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl transform rotate-2 opacity-50 blur-lg"></div>
              <div className="relative bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors shadow-xl shadow-slate-200/50">
                <div className="flex items-center gap-4 p-6 border-b border-slate-100">
                  <div className="bg-orange-600 p-3 rounded-lg">
                    <Wrench className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900">Maintafox</h4>
                    <span className="text-xs text-slate-500 font-mono">ENTERPRISE EDITION</span>
                  </div>
                </div>
                <div className="relative w-full aspect-video bg-slate-50">
                  <Image
                    src="/dashboard.webp"
                    alt="Maintafox Dashboard"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Arsenal</h2>
            <div className="h-1 w-20 bg-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Industrial Skills - PRIMARY */}
            <div className="bg-white p-8 rounded-2xl border border-orange-100 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-600"></div>
              <div className="flex items-center gap-3 mb-8">
                <Factory className="text-orange-600" size={24} />
                <h3 className="text-xl font-bold text-slate-900">
                  Industrial Maintenance Engineering
                </h3>
              </div>
              <div className="space-y-6">
                <SkillBar name="CMMS (GMAO) Management" level={98} color="bg-orange-600" />
                <SkillBar name="Reliability & Preventive Maint." level={95} color="bg-orange-600" />
                <SkillBar name="Hydraulics & Pneumatics" level={90} color="bg-amber-500" />
                <SkillBar name="Safety (HSE) & TPM Strategy" level={92} color="bg-red-500" />
                <SkillBar name="Mechanical Assembly & Welding" level={85} color="bg-slate-400" />
              </div>
            </div>

            {/* Digital Skills - SECONDARY */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <Code className="text-blue-600" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Self-Taught Technologies</h3>
              </div>
              <div className="space-y-6">
                <SkillBar name="Programming (Python, etc.)" level={85} color="bg-blue-600" />
                <SkillBar name="Industrial AI & Machine Learning" level={80} color="bg-cyan-500" />
                <SkillBar name="Matlab / Simulink" level={85} color="bg-blue-600" />
                <SkillBar name="Full Stack Development" level={75} color="bg-indigo-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <GraduationCap className="text-orange-600" size={32} />
            <h2 className="text-3xl font-bold text-slate-900">Education & Certifications</h2>
          </div>

          <div className="grid gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex items-start gap-4 hover:border-orange-200 transition-colors hover:shadow-md">
              <div className="mt-1">
                <div className="w-2 h-2 rounded-full bg-orange-600"></div>
              </div>
              <div>
                <div className="flex justify-between items-baseline w-full mb-1">
                  <h3 className="text-xl font-bold text-slate-900">
                    Master 2 - Maintenance Industrielle
                  </h3>
                  <span className="text-sm text-orange-600 font-mono">2025 - 2026</span>
                </div>
                <p className="text-blue-600 text-sm mb-2">Université Abderrahmane Mira - Béjaïa</p>
                <p className="text-slate-600 text-sm">
                  Specializing in CMMS solutions, IIoT, and joint optimization of
                  maintenance-production.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex items-start gap-4 hover:border-orange-200 transition-colors hover:shadow-md">
              <div className="mt-1">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
              </div>
              <div>
                <div className="flex justify-between items-baseline w-full mb-1">
                  <h3 className="text-xl font-bold text-slate-900">
                    Master 1 - Maintenance Industrielle
                  </h3>
                  <span className="text-sm text-slate-500 font-mono">2024 - 2025</span>
                </div>
                <p className="text-blue-600 text-sm">Université Abderrahmane Mira - Béjaïa</p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex items-start gap-4 hover:border-orange-200 transition-colors hover:shadow-md">
              <div className="mt-1">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
              </div>
              <div>
                <div className="flex justify-between items-baseline w-full mb-1">
                  <h3 className="text-xl font-bold text-slate-900">
                    Licence - Mécanique Industrielle
                  </h3>
                  <span className="text-sm text-slate-500 font-mono">2021 - 2024</span>
                </div>
                <p className="text-blue-600 text-sm mb-2">Université 8 Mai 1954 Guelma</p>
                <p className="text-slate-600 text-sm">Construction and Maintenance specialty.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Briefcase className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-slate-900">Professional Experience</h2>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            <TimelineItem
              year="2025 - Present"
              title="Tech Maintenance & Operator"
              company="World Emballage, Béjaïa"
              desc="Operation of production machines, precise adjustments, corrective maintenance of compressors, and improvement of collage heads for noise reduction."
              icon={<Wrench size={16} />}
              side="left"
            />

            <TimelineItem
              year="2024"
              title="Industrial Maintenance Intern"
              company="Sonatrach (HBNS)"
              desc="Maintenance of rotating equipment, data collection for predictive analysis, and strict adherence to HSE protocols in an Oil & Gas environment."
              icon={<Activity size={16} />}
              side="right"
            />

            <TimelineItem
              year="2023"
              title="Industrial Maintenance Intern"
              company="Sonatrach (MERK)"
              desc="Diagnosis of failures, heavy maintenance tasks, and immersion in the petroleum sector constraints."
              icon={<Factory size={16} />}
              side="left"
            />

            <TimelineItem
              year="2022"
              title="Industrial Maintenance Intern"
              company="SPA CONDI Labelle"
              desc="Contribution to repair activities and failure analysis in a production plant environment."
              icon={<Wrench size={16} />}
              side="right"
            />
          </div>
        </div>
      </section>

      {/* Leadership & Volunteering */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Users className="text-green-600" size={32} />
            <h2 className="text-3xl font-bold text-slate-900">Leadership & Volunteering</h2>
          </div>

          <div className="bg-slate-50 rounded-xl border border-green-200 p-8 hover:bg-white hover:shadow-lg transition-all group">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="bg-green-100 p-4 rounded-full h-20 w-20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                <Heart size={32} className="text-green-600" />
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">President Founder</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-bold border border-green-200">
                    ROWAD Club
                  </span>
                </div>
                <h4 className="text-lg text-slate-600 mb-4">
                  Club entrepreneuriat Vert (Université de Guelma)
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Founded and led the ROWAD Green Entrepreneurship Club as part of the European
                  project SAFIR. Orchestrated the launch of activities focused on sustainable
                  entrepreneurship and green innovation, including organizing workshops and
                  mentoring students in their entrepreneurial projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">R&D & Digital Projects</h2>
              <p className="text-slate-500">
                Innovative solutions developed from concept to deployment.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard
              title="Vibrafox"
              tag="Machine Learning"
              desc="Predictive vibration analysis prototype for industrial equipment. Uses sensors to detect anomalies early."
              award="Innovative Project Award"
              color="border-cyan-200"
              icon={<Activity size={24} className="text-cyan-600" />}
            />
            <ProjectCard
              title="Saf9a"
              tag="E-Commerce"
              desc="A comprehensive e-commerce project designed for seamless digital transactions and user experience."
              color="border-purple-200"
              icon={<ShoppingCart size={24} className="text-purple-600" />}
            />
            <ProjectCard
              title="Droblow"
              tag="Logistics"
              desc="An innovative dropshipping platform optimizing supply chain management and order fulfillment."
              color="border-blue-200"
              icon={<Globe size={24} className="text-blue-600" />}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-100">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Ready to optimize your plant?</h2>
              <p className="text-slate-600 text-lg">
                I am open to opportunities in Industrial Maintenance, CMMS Implementation, and
                Reliability Engineering.
              </p>

              <div className="space-y-4 pt-4">
                <ContactItem icon={<Phone size={20} />} text="+213 540 537 886" />
                <ContactItem icon={<Mail size={20} />} text="Brahimi.oussamaa@gmail.com" />
                <ContactItem icon={<MapPin size={20} />} text="Bouira, Algeria" />
                <a
                  href="#"
                  className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <span>/in/Brahimi Oussama</span>
                </a>
              </div>
            </div>

            <div className="md:w-1/2 w-full bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Let's discuss maintenance strategies..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 py-8 border-t border-slate-200 text-center">
        <p className="text-slate-500 flex items-center justify-center gap-2">
          © 2025 Brahimi Oussama. Engineered with <Code size={14} /> and <Wrench size={14} />
        </p>
      </footer>
    </div>
  );
};

// Sub-components

const SkillBar = ({ name, level, color }: { name: string; level: number; color: string }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-slate-600">{name}</span>
      <span className="text-xs text-slate-500 font-mono">{level}%</span>
    </div>
    <div className="w-full bg-slate-200 rounded-full h-2">
      <div
        className={`${color} h-2 rounded-full transition-all duration-1000 ease-out`}
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const TimelineItem = ({
  year,
  title,
  company,
  desc,
  icon,
  side,
}: {
  year: string;
  title: string;
  company: string;
  desc: string;
  icon: React.ReactNode;
  side: 'left' | 'right';
}) => (
  <div
    className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-8`}
  >
    {/* Icon/Dot */}
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white group-hover:border-orange-500 group-hover:bg-orange-50 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10 text-slate-500 group-hover:text-orange-600">
      {icon}
    </div>

    {/* Card */}
    <div
      className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-all shadow-sm hover:shadow-md ${
        side === 'left' ? 'mr-auto' : 'ml-auto'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-orange-600 font-mono">{year}</span>
        {company.includes('Sonatrach') && (
          <span className="text-[10px] px-2 py-0.5 bg-slate-100 rounded text-slate-500">
            Oil & Gas
          </span>
        )}
      </div>
      <h3 className="font-bold text-slate-900 text-lg mb-1">{title}</h3>
      <h4 className="text-sm text-blue-600 mb-3 font-medium">{company}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ProjectCard = ({
  title,
  tag,
  desc,
  award,
  color,
  icon,
}: {
  title: string;
  tag: string;
  desc: string;
  award?: string;
  color: string;
  icon: React.ReactNode;
}) => (
  <div
    className={`bg-white p-6 rounded-xl border ${color} hover:bg-slate-50 transition-all group h-full flex flex-col shadow-sm`}
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-slate-50 rounded-lg group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-xs font-mono text-slate-500 border border-slate-200 px-2 py-1 rounded">
        {tag}
      </span>
    </div>

    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
      {title}
    </h3>

    <p className="text-sm text-slate-600 mb-4 flex-grow">{desc}</p>

    {award && (
      <div className="flex items-center gap-2 text-yellow-600 text-xs font-bold mt-auto pt-4 border-t border-slate-100">
        <Award size={14} />
        {award}
      </div>
    )}

    {!award && (
      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 group-hover:text-slate-800 transition-colors cursor-pointer">
        <span>View Details</span>
        <ChevronRight size={14} />
      </div>
    )}
  </div>
);

const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-4 text-slate-600 hover:text-slate-900 transition-colors">
    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
      {icon}
    </div>
    <span>{text}</span>
  </div>
);

export default FounderCVPage;
