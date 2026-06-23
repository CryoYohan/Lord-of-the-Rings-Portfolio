'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Brain } from 'lucide-react'

// The magical artifacts representing the tech stack
const skills = [
  {
    title: "Tome of Python",
    description: "Scripting, data manipulation, and crafting logic.",
    icon: <Code2 size={32} className="text-emerald-500" />,
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] border-emerald-500/20"
  },
  {
    title: "Ancient SQL Tablet",
    description: "Complex window functions, data auditing, and database architecture.",
    icon: <Database size={32} className="text-yellow-500" />,
    glow: "hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] border-yellow-500/20"
  },
  {
    title: "Skyforge Cloud",
    description: "Architecting pipelines and infrastructure across AWS and GCP.",
    icon: <Cloud size={32} className="text-blue-400" />,
    glow: "hover:shadow-[0_0_30px_rgba(96,165,250,0.4)] border-blue-400/20"
  },
  {
    title: "Arcane Intelligence",
    description: "Training models and integrating AI systems for real-world impact.",
    icon: <Brain size={32} className="text-purple-500" />,
    glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] border-purple-500/20"
  }
]

export default function Skills() {
  return (
    <section className="relative min-h-screen w-full bg-[#020617] py-32 px-6 flex flex-col items-center justify-center z-10">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-slate-200 mb-4">
          Artifacts of <span className="text-emerald-500">Power</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`relative group p-8 rounded-xl bg-slate-900/50 backdrop-blur-md border ${skill.glow} transition-all duration-500 overflow-hidden cursor-default`}
          >
            {/* Background ambient glow inside the card */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex items-center mb-4">
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 mr-4">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-serif text-slate-200">{skill.title}</h3>
            </div>
            
            <p className="relative z-10 text-slate-400 font-sans text-lg">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}