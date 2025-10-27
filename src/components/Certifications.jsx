import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, BookOpen } from 'lucide-react';

const Certifications = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "2º Lugar - HackaMT 2024",
      issuer: "Hackathon Mato Grosso",
      type: "Competição",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Award,
      title: "Formação Desenvolvedor Web",
      issuer: "COD3R",
      type: "Certificação",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Award,
      title: "Python Completo",
      issuer: "Pystack Week",
      type: "Certificação",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Award,
      title: "Empreendedorismo e Inovação",
      issuer: "SEBRAE",
      type: "Certificação",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: BookOpen,
      title: "Workshops de Inovação",
      issuer: "Diversos Eventos",
      type: "Participação",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Certificações & Eventos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-lg border border-blue-100 card-hover">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>

                <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-semibold text-gray-600 mb-3">
                  {item.type}
                </span>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;