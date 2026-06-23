'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
// Swapped out the banished brand icons for Users and Code
import { Mail, Code, Users, FileText, Send, Feather } from 'lucide-react'

const socialLinks = [
  { name: "Email", icon: <Mail size={24} />, href: "mailto:cyrilypil@gmail.com", color: "group-hover:text-yellow-500", border: "hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]" },
  { name: "LinkedIn", icon: <Users size={24} />, href: "https://linkedin.com/in/cryoyohan", color: "group-hover:text-blue-400", border: "hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]" },
  { name: "GitHub", icon: <Code size={24} />, href: "https://github.com/CryoYohan", color: "group-hover:text-purple-400", border: "hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(192,132,252,0.3)]" },
  { name: "Resume", icon: <FileText size={24} />, href: "/Resume-GL.pdf", color: "group-hover:text-emerald-400", border: "hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]" },
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate the time it takes for the eagles to fly
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSent(true)
      
      // Reset the magic after 5 seconds
      setTimeout(() => setIsSent(false), 5000)
    }, 2000)
  }

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
          The Final <span className="text-yellow-500">Council</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto" />
      </motion.div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: The Summoning Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="p-8 rounded-2xl bg-slate-900/40 border border-slate-700/50 backdrop-blur-md"
        >
          <h3 className="text-2xl font-serif text-slate-200 mb-6">Send a Raven</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-sans text-slate-400 tracking-wider">NAME</label>
              <input 
                type="text" 
                required
                className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 font-sans focus:outline-none focus:border-yellow-500/70 focus:shadow-[0_0_15px_rgba(251,191,36,0.2)] transition-all duration-300"
                placeholder="Enter your name"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-sans text-slate-400 tracking-wider">EMAIL</label>
              <input 
                type="email" 
                required
                className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 font-sans focus:outline-none focus:border-yellow-500/70 focus:shadow-[0_0_15px_rgba(251,191,36,0.2)] transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-sans text-slate-400 tracking-wider">MESSAGE</label>
              <textarea 
                required
                rows={5}
                className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 font-sans focus:outline-none focus:border-yellow-500/70 focus:shadow-[0_0_15px_rgba(251,191,36,0.2)] transition-all duration-300 resize-none"
                placeholder="Speak your mind..."
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting || isSent}
              className={`w-full py-4 rounded-lg flex items-center justify-center gap-2 font-serif tracking-wider transition-all duration-500 ${
                isSent 
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)]" 
                  : "bg-yellow-500/10 border border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-slate-950 hover:shadow-[0_0_25px_rgba(251,191,36,0.5)]"
              }`}
            >
              {isSubmitting ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                  <Send size={20} />
                </motion.div>
              ) : isSent ? (
                <>
                  <Feather size={20} /> Eagles Dispatched!
                </>
              ) : (
                <>
                  Seal & Send
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Right Column: Direct Portals */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col justify-center h-full"
        >
          <p className="text-slate-300 font-sans leading-relaxed mb-10 text-lg">
            Prefer direct channels? The portals below are always open for new quests, alliances, and technical discussions.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center justify-center p-8 rounded-xl bg-slate-900/30 border border-slate-800 transition-all duration-300 ${link.border}`}
              >
                <div className={`mb-4 text-slate-400 transition-colors duration-300 ${link.color}`}>
                  {link.icon}
                </div>
                <span className="font-serif text-slate-200 tracking-widest text-sm uppercase">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}