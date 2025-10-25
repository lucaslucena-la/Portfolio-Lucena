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
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* O grid principal agora é dividido em 3 blocos (em vez de 2).
          Em telas MD+, o primeiro bloco (Header) ocupa as 2 colunas, 
          e os blocos Foto e Corpo do Texto ficam lado a lado na linha de baixo.
        */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* ========================================================== */}
          {/* BLOCO 1: NOME E SUBTÍTULO (Ordem 1 em Mobile) */}
          {/* ========================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6 md:col-span-2" // Ocupa a largura total no desktop
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

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200">
              Desenvolvedor • Estudante de Ciência da Computação
            </h2>
          </motion.div>

          {/* ========================================================== */}
          {/* BLOCO 2: FOTO (Ordem 2 em Mobile) */}
          {/* Em Desktop, forçamos para a última coluna (md:order-last) */}
          {/* ========================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative md:order-last"
          >
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />
              <img 
                className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl border-8 border-[#001f3f]"
                alt="Lucas de Andrade Lucena - Desenvolvedor Fullstack"
                src="/assets/images/Lucena.png" 
              />
            </div>
          </motion.div>

          {/* ========================================================== */}
          {/* BLOCO 3: CORPO DO TEXTO E AÇÕES (Ordem 3 em Mobile) */}
          {/* Em Desktop, fica na primeira coluna da segunda linha */}
          {/* ========================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            {/* Parágrafo de descrição */}
            <p className="text-lg text-gray-400 leading-relaxed">
              Desenvolvedor fullstack e estudante de Ciência da Computação. Crio aplicações e soluções digitais com foco em experiência do usuário e código de qualidade.
            </p>

            {/* Botões */}
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
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-400 hover:bg-blue-950/20  hover:text-white "
              >
                <a 
                  href="/assets/cv/lucas_lucena_cv.pdf"
                  download
                  target="_blank"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Baixar Currículo
                </a>
              </Button>
            </div>
            
            {/* Links Sociais */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/lucaslucena-la" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Github className="h-6 w-6 text-gray-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/lucaslucenadev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-gray-300" />
              </a>
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
          <ArrowDown className="h-8 w-8 text-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;