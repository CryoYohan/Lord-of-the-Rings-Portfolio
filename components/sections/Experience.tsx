'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Users } from 'lucide-react'

// The Milestones of Your Journey
const experiences = [
  {
    role: "Data Scientist Intern",
    entity: "Talleco",
    date: "Jan 2026 - May 2026 · Hybrid",
    icon: <Briefcase size={20} className="text-yellow-500" />,
    description: "Developing robust data solutions with a primary focus on Python, Databases, and advanced SQL. Responsibilities include optimizing QuickSight calculations strictly within existing query datasets, architecting efficient data reconciliation processes utilizing targeted row count comparisons, and enforcing strict data audit logic to ensure January-based current-year consistency.",
    glow: "border-yellow-500/30 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]"
  },
  {
    role: "Alliance Jumpstart Program Student Trainee",
    entity: "Alliance Software Inc.",
    date: "Aug 2025 - Dec 2025 · On-site",
    icon: <Award size={20} className="text-blue-400" />,
    description: "Participated in the highly selective Jumpstart Program at the University of Cebu Main Campus. Graduated and was selected as one of only three trainees across all UC campuses to receive the Outstanding Performance Award for excellence in software development and programming.",
    glow: "border-blue-400/30 group-hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]"
  },
  {
    role: "Chief Volunteer",
    entity: "Philippine Society of Information Technology Students",
    date: "Jan 2023 - May 2024",
    icon: <Users size={20} className="text-purple-400" />,
    description: "Spearheaded and managed a dedicated team of volunteers to successfully execute extracurricular events within the university's College of Computer Studies, fostering strong leadership and team management capabilities.",
    glow: "border-purple-400/30 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
  },
  {
    role: "Bachelor of Science in Information Technology",
    entity: "University of Cebu - Main Campus",
    date: "2022 - 2026",
    icon: <GraduationCap size={20} className="text-emerald-500" />,
    description: "Graduated Magna Cum Laude. Consistently recognized as the top-ranked student in the IT program. Architected the EnerGreen capstone project—an AI-powered green energy consumption monitoring system.",
    glow: "border-emerald-500/30 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
  }
]

export default function Experience() {
  return (
    <section className="relative min-h-screen w-full bg-[#020617] py-32 px-6 flex flex-col items-center z-10 overflow-hidden">
      
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-24 w-full max-w-4xl"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-slate-200 mb-4">
          The Road <span className="text-emerald-500">Traveled</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto" />
      </motion.div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl w-full">
        {/* The Glowing Center Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-slate-700 to-transparent transform md:-translate-x-1/2" />

        {/* Timeline Items */}
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative flex flex-col md:flex-row items-center justify-between mb-16 w-full ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* The Glowing Waypoint Marker */}
            <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center transform -translate-x-1/2 md:-translate-x-1/2 z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              {exp.icon}
            </div>

            {/* Empty space for the alternating layout on desktop */}
            <div className="hidden md:block w-[45%]" />

            {/* The Experience Card */}
            <div className="w-full pl-12 md:pl-0 md:w-[45%]">
              <div className={`group relative p-6 rounded-xl bg-slate-900/50 backdrop-blur-md border ${exp.glow} transition-all duration-500`}>
                {/* Inner ambient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                
                <div className="relative z-10">
                  <span className="text-sm font-sans tracking-widest uppercase text-slate-400 mb-2 block">
                    {exp.date}
                  </span>
                  <h3 className="text-2xl font-serif text-slate-100 mb-1">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg font-sans text-emerald-400 mb-4">
                    {exp.entity}
                  </h4>
                  <p className="text-slate-300 font-sans leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}