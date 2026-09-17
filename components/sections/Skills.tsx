'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Brain } from 'lucide-react'

// The magical artifacts representing the tech stack
const skills = [
  {
    title: "Tome of Python",
    description: "Scripting, data manipulation, and crafting logic.",
    icon: <Code2 size={28} />,
    glow: "text-emerald-200"
  },
  {
    title: "Ancient SQL Tablet",
    description: "Complex window functions, data auditing, and database architecture.",
    icon: <Database size={28} />,
    glow: "text-amber-200"
  },
  {
    title: "Skyforge Cloud",
    description: "Architecting pipelines and infrastructure across AWS and GCP.",
    icon: <Cloud size={28} />,
    glow: "text-sky-200"
  },
  {
    title: "Arcane Intelligence",
    description: "Training models and integrating AI systems for real-world impact.",
    icon: <Brain size={28} />,
    glow: "text-violet-200"
  }
]

export default function Skills() {
  return (
    <section id="skills" className="realm-section border-y border-amber-200/10" aria-labelledby="skills-title">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto mb-16 w-full max-w-6xl"
      >
        <p className="section-kicker">The craft</p>
        <h2 id="skills-title" className="section-title">The tools of the<br /><span className="text-amber-300">working mage.</span></h2>
        <div className="section-rule" />
      </motion.div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-px border border-amber-200/15 bg-amber-200/15 md:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`group relative overflow-hidden bg-[#122018] p-8 transition-all duration-500 hover:bg-[#1b2b1f] ${skill.glow}`}
          >
            {/* Background ambient glow inside the card */}
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-current opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10" />
            
            <div className="relative z-10 flex items-center mb-4">
              <div className="mr-4 border border-amber-200/20 bg-[#0b1710] p-3">
                {skill.icon}
              </div>
              <h3 className="font-serif text-2xl text-amber-100">{skill.title}</h3>
            </div>
            
            <p className="relative z-10 max-w-md font-sans text-base leading-relaxed text-amber-50/55">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
