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
    <section className="relative min-h-screen w-full bg-[#020617] py-32 px-6 flex flex-col items-center justify-center z-10">
      
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16 w-full max-w-4xl"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-slate-200 mb-4">
          Seals of <span className="text-blue-400">Mastery</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto" />
      </motion.div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`group relative p-6 rounded-xl bg-slate-900/50 backdrop-blur-md border ${cert.glow} transition-all duration-300 flex flex-col h-full`}
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
            
            <div className="relative z-10 flex items-center mb-4">
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 mr-4">
                {cert.icon}
              </div>
            </div>
            
            <div className="relative z-10 flex-grow">
              <h3 className="text-xl font-serif text-slate-200 mb-1 leading-snug">{cert.title}</h3>
              <p className="text-sm font-sans text-emerald-400 mb-3">{cert.issuer}</p>
            </div>

            <div className="relative z-10 mt-auto pt-4 border-t border-slate-800/50">
              <span className="text-xs font-sans text-slate-400 block tracking-wider">
                {cert.date}
              </span>
              {cert.credentialId && (
                <span className="text-xs font-sans text-slate-500 block truncate mt-1">
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