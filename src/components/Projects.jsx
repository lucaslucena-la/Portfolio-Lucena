import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Convit3 Digital",
      category: "web",
      stack: ["Next.js", "Node.js", "TypeScript"],
      description: [
        "Sistema completo de convites digitais",
        "Interface moderna e responsiva",
        "Gerenciamento de eventos e convidados"
      ],
      github: "https://github.com/lucaslucena-la/convit3-digital",
      demo: null,
      image: "Modern event invitation platform with elegant design"
    },
    {
      title: "FlashFood",
      category: "web",
      stack: ["Node.js", "React", "PostgreSQL"],
      description: [
        "Plataforma de delivery de alimentos",
        "Sistema de pedidos em tempo real",
        "Integração com pagamentos"
      ],
      github: "https://github.com/lucaslucena/flashfood",
      demo: null,
      image: "Food delivery app interface with restaurant listings"
    },
    {
      title: "Blog System",
      category: "backend",
      stack: ["Flask", "SQLAlchemy", "Docker"],
      description: [
        "Sistema de blog com autenticação",
        "CRUD completo de posts",
        "Containerização com Docker"
      ],
      github: "https://github.com/lucaslucena/blog-system",
      demo: null,
      image: "Blog management system dashboard"
    },
    {
      title: "Sistema de Vendas",
      category: "web",
      stack: ["Spring Boot", "Thymeleaf", "PostgreSQL"],
      description: [
        "Sistema completo de gestão de vendas",
        "Controle de estoque e produtos",
        "Relatórios e dashboards"
      ],
      github: "https://github.com/lucaslucena/sistema-vendas",
      demo: null,
      image: "Sales management system with charts and analytics"
    },
    {
      title: "Quiz Educacional",
      category: "desktop",
      stack: ["JavaFX", "MySQL"],
      description: [
        "Aplicação desktop para quizzes",
        "Sistema de pontuação e ranking",
        "Interface gráfica intuitiva"
      ],
      github: "https://github.com/lucaslucena/quiz-educacional",
      demo: null,
      image: "Educational quiz application with colorful interface"
    },
    {
      title: "Data Science Projects",
      category: "datascience",
      stack: ["Python", "Pandas", "Matplotlib"],
      description: [
        "Análises exploratórias de dados",
        "Visualizações interativas",
        "Machine Learning básico"
      ],
      github: "https://github.com/lucaslucena/data-science",
      demo: null,
      image: "Data visualization dashboard with charts and graphs"
    }
  ];

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web' },
    { id: 'backend', label: 'Backend' },
    { id: 'desktop', label: 'Desktop' },
    { id: 'datascience', label: 'Data Science' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handleDemo = () => {
    toast({
      title: "🚧 Demo em desenvolvimento",
      description: "A demonstração ao vivo estará disponível em breve! Você pode solicitar essa implementação no próximo prompt! 🚀",
    });
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Projetos em Destaque</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              variant={filter === cat.id ? "default" : "outline"}
              className={filter === cat.id 
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" 
                : "border-blue-600 text-blue-600 hover:bg-blue-50"
              }
            >
              {cat.label}
            </Button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover"
                  alt={project.title}
                 src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {project.description.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    onClick={handleDemo}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;