import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens",
      skills: [
        { name: "Python", level: 70 },
        { name: "JavaScript", level: 70 },
        { name: "TypeScript", level: 65 },
        { name: "Java", level: 70 },
        { name: "C/C++", level: 70 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Next.js", level: 70 },
        { name: "React", level: 65 },
        { name: "Node.js", level: 75 },
        { name: "Spring Boot", level: 65 },
        { name: "Django/Flask", level: 65 }
      ]
    },
    {
      title: "Banco de Dados",
      skills: [
        { name: "PostgreSQL", level: 75 },
        { name: "MySQL", level: 75 },
        { name: "SQLite", level: 60 }
      ]
    },
    {
      title: "Ferramentas & DevOps",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 50 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Habilidades & Tecnologias</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;