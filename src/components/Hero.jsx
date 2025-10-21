import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Hero = () => {


  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-4">
                Disponível para trabalho remoto
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-gradient">Lucas Lucena</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
              Desenvolvedor Fullstack • Estudante de Ciência da Computação
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Desenvolvedor fullstack e estudante de Ciência da Computação. Crio aplicações e soluções digitais com foco em experiência do usuário e código de qualidade.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={scrollToProjects}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
              >
                Ver Projetos
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>

              <Button 
                asChild // Faz o Button renderizar o seu filho (o <a>)
                variant="outline"
                size="lg"
                className="border-2 border-600 text-blue-600 hover:bg-blue-50"
              >
                <a 
                  href="/assets/cv/lucas_lucena_cv.pdf" // O caminho no diretório 'public'
                  download // Atributo para forçar o download
                  target="_blank" // Boa prática para links de download
                >
                  <Download className="mr-2 h-4 w-4" />
                  Baixar Currículo
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/lucaslucena" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
              >
                <Github className="h-6 w-6 text-gray-700" />
              </a>
              <a 
                href="https://linkedin.com/in/lucaslucena" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-gray-700" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />
              <img 
                className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl border-8 border-white"
                alt="Lucas de Andrade Lucena - Desenvolvedor Fullstack"
               src="https://images.unsplash.com/photo-1618927376995-a721da8c11db" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="h-8 w-8 text-blue-600" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;