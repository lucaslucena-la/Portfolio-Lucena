import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "2º Lugar HackaMT 2024",
      description: "Reconhecimento em competição de inovação"
    },
    {
      icon: Users,
      title: "Líder de Startup",
      description: "Renda Verde - Programa de pré-aceleração"
    },
    {
      icon: Zap,
      title: "Proativo & Autogerenciável",
      description: "Trabalho em equipe e entrega de resultados"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Sobre Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12" />
        </motion.div>

        <div className="flex flex-col gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-4xl"
          >
            <div className="aspect-video w-full rounded-2xl shadow-2xl overflow-hidden">
            <img
              class="w-full h-full object-cover"
              alt=""
             src="/assets/images/about.jpeg" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Sou Lucas de Andrade Lucena, estudante de Ciência da Computação (UFMT) e desenvolvedor fullstack. Tenho experiência prática em Python, Java, C/C++, JavaScript e TypeScript, e já trabalhei em projetos que abrangem desde aplicações web a sistemas desktop.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Participei de hackathons, workshops e eventos de inovação — obtendo o 2º lugar no HackaMT 2024 — e liderei a startup Renda Verde em programas de pré-aceleração.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid gap-4 pt-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;