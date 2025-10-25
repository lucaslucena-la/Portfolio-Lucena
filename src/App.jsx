import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import EventGallery from '@/components/EventGallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Lucas Lucena - Desenvolvedor</title>
        <meta name="description" content="Portfólio de Lucas Lucena, desenvolvedor fullstack e estudante de Ciência da Computação. Especializado em Next.js, React, Node.js, Python e Java." />
        <meta property="og:title" content="Lucas Lucena - Desenvolvedor" />
        <meta property="og:description" content="Desenvolvedor fullstack com experiência em aplicações web modernas e sistemas backend robustos." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <EventGallery />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;