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
    <section id="contact" className="realm-section border-t border-amber-200/10" aria-labelledby="contact-title">
      
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto mb-16 w-full max-w-6xl"
      >
        <p className="section-kicker">The last page</p>
        <h2 id="contact-title" className="section-title">Let&apos;s make the<br /><span className="text-amber-300">next thing useful.</span></h2>
        <div className="section-rule" />
      </motion.div>

        <div className="mx-auto grid w-full max-w-6xl items-start gap-14 md:grid-cols-2">
        
        {/* Left Column: The Summoning Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="manuscript-panel p-8 md:p-10"
        >
          <h3 className="mb-6 font-serif text-2xl text-amber-100">Send a message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="font-sans text-xs uppercase tracking-[.18em] text-amber-200/55">Name</label>
              <input 
                type="text" 
                required
                className="w-full border border-amber-200/15 bg-[#0b1710]/65 px-4 py-3 font-sans text-amber-50 outline-none transition-all duration-300 placeholder:text-amber-50/25 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/30"
                placeholder="Enter your name"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-sans text-xs uppercase tracking-[.18em] text-amber-200/55">Email</label>
              <input 
                type="email" 
                required
                className="w-full border border-amber-200/15 bg-[#0b1710]/65 px-4 py-3 font-sans text-amber-50 outline-none transition-all duration-300 placeholder:text-amber-50/25 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/30"
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <label className="font-sans text-xs uppercase tracking-[.18em] text-amber-200/55">Message</label>
              <textarea 
                required
                rows={5}
                className="w-full resize-none border border-amber-200/15 bg-[#0b1710]/65 px-4 py-3 font-sans text-amber-50 outline-none transition-all duration-300 placeholder:text-amber-50/25 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/30"
                placeholder="Speak your mind..."
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting || isSent}
              className={`w-full py-4 rounded-lg flex items-center justify-center gap-2 font-serif tracking-wider transition-all duration-500 ${
                isSent 
                ? "border border-emerald-300/50 bg-emerald-300/15 text-emerald-200" 
                : "border border-amber-300/70 bg-amber-300 px-4 text-[#172016] hover:bg-amber-100"
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
            <p className="mb-10 font-sans text-lg leading-relaxed text-amber-50/65">
            Prefer a direct path? The portals below are open for new quests, thoughtful collaborations, and technical discussions.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center justify-center border border-amber-200/15 bg-[#142219]/70 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/55 ${link.border}`}
              >
                <div className={`mb-4 text-amber-200/55 transition-colors duration-300 ${link.color}`}>
                  {link.icon}
                </div>
                <span className="font-serif text-sm uppercase tracking-[.18em] text-amber-100/80">
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
