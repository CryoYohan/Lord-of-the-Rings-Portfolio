'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Brain, Database, Code, Terminal } from 'lucide-react'

// The collected seals and credentials
const certifications = [
  {
    title: "Networking Basics",
    issuer: "Cisco",
    date: "Issued Jul 2026",
    icon: <Shield size={24} className="text-orange-400" />,
    glow: "border-orange-400/30 group-hover:shadow-[0_0_30px_rgba(251,146,60,0.2)]"
  },
  {
    title: "Learning Linux Basics Course & Labs",
    issuer: "KodeKloud",
    date: "Issued Jul 2026",
    credentialId: "862ac7cb-fe5e-4c5b-a3ce-b062c2a1859c",
    icon: <Terminal size={24} className="text-emerald-500" />,
    glow: "border-emerald-500/30 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
  },
  {
    title: "KodeKloud Engineer - Linux (Level 1)",
    issuer: "KodeKloud",
    date: "Issued Jul 2026",
    credentialId: "a806fac7-5a52-408b-8f7e-8aa0a0b30f8c",
    icon: <Terminal size={24} className="text-slate-300" />,
    glow: "border-slate-400/30 group-hover:shadow-[0_0_30px_rgba(148,163,184,0.2)]"
  },
  {
    title: "GIT for Beginners",
    issuer: "KodeKloud",
    date: "Issued Jul 2026",
    credentialId: "b824680c-74f7-4839-aacf-888418492d79",
    icon: <Code size={24} className="text-orange-400" />,
    glow: "border-orange-400/30 group-hover:shadow-[0_0_30px_rgba(251,146,60,0.2)]"
  },
  {
    title: "KodeKloud Engineer - Git (Level 1)",
    issuer: "KodeKloud",
    date: "Issued Jul 2026",
    credentialId: "090781b3-7952-4185-985a-6f70da943267",
    icon: <Code size={24} className="text-purple-400" />,
    glow: "border-purple-400/30 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
  },
  {
    title: "Python Basics",
    issuer: "KodeKloud",
    date: "Issued Jul 2026",
    credentialId: "b4bbf0ee-8226-421f-9558-eff7b6be20a8",
    icon: <Code size={24} className="text-yellow-400" />,
    glow: "border-yellow-400/30 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]"
  },
  {
    title: "Docker Training Course for the Absolute Beginner",
    issuer: "KodeKloud",
    date: "Issued Jul 2026",
    credentialId: "f4be9b56-207d-4fc3-9e68-1669ca8683b5",
    icon: <Database size={24} className="text-blue-400" />,
    glow: "border-blue-400/30 group-hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]"
  },
  {
    title: "KodeKloud Engineer - Docker (Level 1)",
    issuer: "KodeKloud",
    date: "Issued Aug 2026",
    credentialId: "8f9080ac-0524-4c1c-8ec6-7b7d902473e9",
    icon: <Database size={24} className="text-cyan-400" />,
    glow: "border-cyan-400/30 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
  },
  {
    title: "KodeKloud Engineer - Cloud (AWS) (Level 1)",
    issuer: "KodeKloud",
    date: "Issued Aug 2026",
    credentialId: "abe87b1d-7c59-49af-8dca-857157e2144d",
    icon: <Award size={24} className="text-yellow-500" />,
    glow: "border-yellow-500/30 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]"
  },
  {
    title: "KodeKloud Engineer - Kubernetes (Level 1)",
    issuer: "KodeKloud",
    date: "Issued Aug 2026",
    credentialId: "7303d6c2-4382-41e9-8b6c-216d4d45c42d",
    icon: <Database size={24} className="text-blue-400" />,
    glow: "border-blue-400/30 group-hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]"
  },
  {
    title: "AWS EKS",
    issuer: "KodeKloud",
    date: "Issued Aug 2026",
    credentialId: "7b58ee7c-932a-4892-abec-ab27cbfa6c67",
    icon: <Award size={24} className="text-orange-400" />,
    glow: "border-orange-400/30 group-hover:shadow-[0_0_30px_rgba(251,146,60,0.2)]"
  },
  {
    title: "IT Passport",
    issuer: "PhilNITS",
    date: "Issued Jun 2026",
    credentialId: "IP4600097",
    icon: <Award size={24} className="text-yellow-500" />,
    glow: "border-yellow-500/30 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]"
  },
  {
    title: "TOPCIT Level 3",
    issuer: "Ministry of Science and ICT",
    date: "Issued Jan 2026",
    icon: <Terminal size={24} className="text-emerald-500" />,
    glow: "border-emerald-500/30 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
  },
  {
    title: "Data Manipulation with pandas",
    issuer: "DataCamp",
    date: "Issued Jan 2026",
    credentialId: "DMP0016232841395",
    icon: <Database size={24} className="text-blue-400" />,
    glow: "border-blue-400/30 group-hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]"
  },
  {
    title: "Intermediate Python",
    issuer: "DataCamp",
    date: "Issued Dec 2025",
    credentialId: "IPY0012444032256",
    icon: <Code size={24} className="text-purple-400" />,
    glow: "border-purple-400/30 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    date: "Issued Aug 2025",
    credentialId: "AQXE56SW334O",
    icon: <Database size={24} className="text-red-400" />,
    glow: "border-red-400/30 group-hover:shadow-[0_0_30px_rgba(248,113,113,0.2)]"
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    date: "Issued Jul 2025",
    credentialId: "fbdf66e8-39f0-4f53-98f3-831a46a601fb",
    icon: <Brain size={24} className="text-cyan-400" />,
    glow: "border-cyan-400/30 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "Issued Mar 2025",
    icon: <Shield size={24} className="text-orange-400" />,
    glow: "border-orange-400/30 group-hover:shadow-[0_0_30px_rgba(251,146,60,0.2)]"
  },
  {
    title: "Riot IQ (Level 115)",
    issuer: "Riot IQ",
    date: "Issued Jun 2026",
    icon: <Brain size={24} className="text-pink-400" />,
    glow: "border-pink-400/30 group-hover:shadow-[0_0_30px_rgba(244,114,182,0.2)]"
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="realm-section" aria-labelledby="certifications-title">
      
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto mb-16 w-full max-w-6xl"
      >
        <p className="section-kicker">The seals</p>
        <h2 id="certifications-title" className="section-title">Marks left by<br /><span className="text-amber-300">the learning.</span></h2>
        <div className="section-rule" />
      </motion.div>

      {/* Certifications Grid */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-px border border-amber-200/15 bg-amber-200/15 md:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`group relative flex h-full flex-col bg-[#142219] p-5 transition-all duration-300 hover:bg-[#1b2b1f] ${cert.glow}`}
          >
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-200/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="relative z-10 flex items-center mb-4">
              <div className="mr-4 border border-amber-200/15 bg-[#0b1710] p-3 text-amber-200">
                {cert.icon}
              </div>
            </div>
            
            <div className="relative z-10 flex-grow">
              <h3 className="mb-1 font-serif text-lg leading-snug text-amber-100">{cert.title}</h3>
              <p className="mb-3 font-sans text-sm text-emerald-200/70">{cert.issuer}</p>
            </div>

            <div className="relative z-10 mt-auto border-t border-amber-200/10 pt-4">
              <span className="block font-sans text-xs tracking-wider text-amber-50/45">
                {cert.date}
              </span>
              {cert.credentialId && (
                <span className="mt-1 block truncate font-sans text-xs text-amber-50/30">
                  ID: {cert.credentialId}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
