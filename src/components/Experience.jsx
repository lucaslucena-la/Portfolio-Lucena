import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Rocket, Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Supervisor de Equipe",
      company: "IBGE",
      period: "2022",
      description: [
        "Coordenação de equipe de campo",
        "Gestão de processos e prazos",
        "Treinamento e supervisão de colaboradores"
      ],
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Rocket,
      title: "Líder de Startup",
      company: "Renda Verde",
      period: "2023 - 2024",
      description: [
        "Liderança em programa de pré-aceleração",
        "Desenvolvimento de produto e estratégia",
        "Gestão de equipe multidisciplinar"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Code,
      title: "Desenvolvedor Independente",
      company: "Projetos Acadêmicos e Freelance",
      period: "2022 - Presente",
      description: [
        "Desenvolvimento de aplicações web e desktop",
        "Participação em hackathons e eventos",
        "Contribuição em projetos open source"
      ],
      color: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Experiência</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${exp.color} shadow-lg`}>
                  <exp.icon className="h-8 w-8 text-white" />
                </div>

                <div className="flex-1 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-lg border border-blue-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <span className="inline-block mt-2 md:mt-0 px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-700 shadow-sm">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;