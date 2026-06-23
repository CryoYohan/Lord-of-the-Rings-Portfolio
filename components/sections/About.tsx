'use client'

import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Server } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative min-h-screen w-full bg-[#020617] py-32 px-6 flex flex-col items-center justify-center z-10">
      
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16 w-full max-w-4xl"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-slate-200 mb-4">
          The Tale of the <span className="text-emerald-500">Developer</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto" />
      </motion.div>

      <div className="max-w-6xl w-full grid lg:grid-cols-[1fr_2fr] gap-16 items-center">
        
        {/* The Portrait with Heavy Magical Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative mx-auto w-64 h-64 md:w-80 md:h-80 group"
        >
          {/* Ambient Outer Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-yellow-500 to-blue-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
          
          {/* The Heavy Border Frame */}
          <div className="relative w-full h-full p-1.5 rounded-3xl bg-gradient-to-br from-emerald-400 via-yellow-500 to-blue-500 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-[#020617] bg-slate-800">
              {/* NOTE: Replace 'profile.jpg' with your actual image filename! */}
              <img 
                src="/profile.JPEG" 
                alt="Cyril John T. Ypil" 
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* The Lore & Stats */}
        <div className="flex flex-col gap-8">
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="p-8 md:p-10 rounded-2xl bg-slate-900/40 border border-slate-700/50 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:border-emerald-500/30 transition-colors duration-500"
          >
            <h3 className="text-3xl md:text-4xl font-serif text-yellow-500 mb-2">Cyril John T. Ypil</h3>
            <p className="text-emerald-400 font-sans mb-6 flex items-center gap-2">
              <MapPin size={18} /> Balamban, Cebu, Philippines
            </p>
            <p className="text-slate-300 leading-relaxed font-sans mb-4">
              A Magna Cum Laude Information Technology graduate, data-driven strategist, and proactive problem solver. I am a highly adaptable learner who thrives on new challenges and critical thinking.
            </p>
            <p className="text-slate-300 leading-relaxed font-sans mb-6">
              Known for being responsible and articulate, I combine a strong work ethic with a creative approach to data-driven solutions.
            </p>
            <p className="text-slate-300 leading-relaxed font-sans font-semibold text-emerald-100">
              My quest is driven by a deep interest in Cloud Technologies, Data Science, Data Analytics, Software Engineering, and AI Automation.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 gap-6"
          >
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-slate-900 border border-slate-700 rounded-xl text-yellow-500 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all duration-300">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="text-lg font-serif text-slate-200 mb-1">Academic Excellence</h4>
                <p className="text-sm text-slate-400 font-sans leading-relaxed">
                  Graduated Magna Cum Laude. Consistently recognized as the top-ranked student in the IT program.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-slate-900 border border-slate-700 rounded-xl text-emerald-500 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300">
                <Server size={24} />
              </div>
              <div>
                <h4 className="text-lg font-serif text-slate-200 mb-1">Cloud & Data Mastery</h4>
                <p className="text-sm text-slate-400 font-sans leading-relaxed">
                  Extensive experience engineering data pipelines utilizing AWS and Google Cloud Platform.
                </p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}