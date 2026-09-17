'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Users } from 'lucide-react'

// The Milestones of Your Journey
const experiences = [
  {
    role: "Site Reliability Engineer Intern",
    entity: "Opswerks",
    date: "Jun 2026 - September 2026 · Remote",
    icon: <Briefcase size={20} className="text-yellow-500" />,
    description: "Completed a fast-paced weekly training program covering Linux, Git, Python, Docker, AWS, Kubernetes, and AWS EKS—consistently maintaining an 85% passing rate—while successfully leveraging these technical competencies to resolve complex Site Reliability Engineering (SRE) incidents under highly time-constrained, real-life simulator scenarios.",
    glow: "border-yellow-500/30 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]"
  },
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
    <section id="experience" className="realm-section overflow-hidden" aria-labelledby="experience-title">
      
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto mb-20 w-full max-w-6xl"
      >
        <p className="section-kicker">The journey</p>
        <h2 id="experience-title" className="section-title">A trail of<br /><span className="text-amber-300">earned miles.</span></h2>
        <div className="section-rule" />
      </motion.div>

      {/* Timeline Container */}
      <div className="relative mx-auto w-full max-w-5xl">
        {/* The Glowing Center Line */}
        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-transparent via-amber-300/35 to-transparent md:left-1/2 md:-translate-x-1/2" />

        {/* Timeline Items */}
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative mb-12 flex w-full flex-col items-center justify-between md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* The Glowing Waypoint Marker */}
            <div className="absolute left-4 z-20 flex h-9 w-9 -translate-x-1/2 transform items-center justify-center rounded-full border border-amber-300/60 bg-[#0b1710] text-amber-300 shadow-[0_0_20px_rgba(201,165,76,.15)] md:left-1/2 md:-translate-x-1/2">
              {exp.icon}
            </div>

            {/* Empty space for the alternating layout on desktop */}
            <div className="hidden md:block w-[45%]" />

            {/* The Experience Card */}
            <div className="w-full pl-12 md:w-[45%] md:pl-0">
              <div className={`group manuscript-panel relative p-6 transition-all duration-500 hover:-translate-y-1 ${exp.glow}`}>
                {/* Inner ambient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <span className="mb-2 block font-sans text-xs uppercase tracking-[.18em] text-amber-300/60">
                    {exp.date}
                  </span>
                  <h3 className="mb-1 font-serif text-2xl text-amber-100">
                    {exp.role}
                  </h3>
                  <h4 className="mb-4 font-sans text-lg text-emerald-200/75">
                    {exp.entity}
                  </h4>
                  <p className="font-sans leading-relaxed text-amber-50/60">
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
