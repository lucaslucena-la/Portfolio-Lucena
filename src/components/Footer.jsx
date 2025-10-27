import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const handleDownloadCV = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: "O download do currículo estará disponível em breve! Você pode solicitar essa implementação no próximo prompt! 🚀",
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">Lucas Lucena</h3>
            <p className="text-gray-400">
              Desenvolvedor Fullstack apaixonado por criar soluções digitais inovadoras.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Conecte-se</h4>
            <div className="flex gap-4 mb-4">
              <a 
                href="https://github.com/lucaslucena-la"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/lucaslucenadev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:lucaslucena.dev123@gmail.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <a
              href="/public/assets/cv/Curriculo Lucena.pdf" // O caminho no diretório 'public'
              download // Atributo para forçar o download
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Download className="h-4 w-4" />
              Baixar Currículo
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lucas de Andrade Lucena. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;