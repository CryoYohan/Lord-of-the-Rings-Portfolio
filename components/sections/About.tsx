'use client'

import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Server, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="realm-section" aria-labelledby="about-title">
      
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto mb-16 w-full max-w-6xl"
      >
        <p className="section-kicker">The guide</p>
        <h2 id="about-title" className="section-title">A builder with a map,<br /><span className="text-amber-300">not a finish line.</span></h2>
        <div className="section-rule" />
      </motion.div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[.85fr_1.4fr]">
        
        {/* The Portrait with Heavy Magical Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="group relative mx-auto h-72 w-72 md:h-96 md:w-96"
        >
          {/* Ambient Outer Glow */}
          <div className="absolute inset-8 rounded-full bg-amber-300/15 blur-3xl transition-opacity duration-700 group-hover:opacity-80" />
          
          {/* The Heavy Border Frame */}
          <div className="relative h-full w-full rounded-full border border-amber-300/60 p-3 shadow-[0_0_0_10px_rgba(201,165,76,.08),0_25px_70px_rgba(0,0,0,.35)]">
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#0b1710] bg-[#17251a]">
              {/* NOTE: Replace 'profile.jpg' with your actual image filename! */}
              <Image
                src="/profile.JPEG" 
                alt="Cyril John T. Ypil" 
                width={675}
                height={623}
                className="h-full w-full object-cover grayscale-[.35] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
          </div>
          <div className="absolute -bottom-5 -right-2 flex items-center gap-2 border border-amber-300/30 bg-[#0b1710] px-4 py-3 text-xs uppercase tracking-[.18em] text-amber-200/70"><Sparkles size={15} className="text-amber-300" /> Cebu, PH</div>
        </motion.div>

        {/* The Lore & Stats */}
        <div className="flex flex-col gap-8">
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="manuscript-panel p-8 md:p-10"
          >
            <h3 className="mb-2 font-serif text-3xl text-amber-200 md:text-4xl">Cyril John T. Ypil</h3>
            <p className="mb-6 flex items-center gap-2 font-sans text-emerald-200/70">
              <MapPin size={18} /> Balamban, Cebu, Philippines
            </p>
            <p className="mb-4 font-sans leading-relaxed text-amber-50/70">
              A Magna Cum Laude Information Technology graduate, data-driven strategist, and proactive problem solver. I am a highly adaptable learner who thrives on new challenges and critical thinking.
            </p>
            <p className="mb-6 font-sans leading-relaxed text-amber-50/70">
              Known for being responsible and articulate, I combine a strong work ethic with a creative approach to data-driven solutions.
            </p>
            <p className="font-sans font-semibold leading-relaxed text-amber-100">
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
              <div className="border border-amber-300/25 bg-amber-300/5 p-3 text-amber-300 transition-all duration-300 group-hover:border-amber-300/60">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="mb-1 font-serif text-lg text-amber-100">Academic Excellence</h4>
                <p className="font-sans text-sm leading-relaxed text-amber-50/55">
                  Graduated Magna Cum Laude. Consistently recognized as the top-ranked student in the IT program.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="border border-emerald-300/25 bg-emerald-300/5 p-3 text-emerald-200 transition-all duration-300 group-hover:border-emerald-300/60">
                <Server size={24} />
              </div>
              <div>
                <h4 className="mb-1 font-serif text-lg text-amber-100">Cloud & Data Mastery</h4>
                <p className="font-sans text-sm leading-relaxed text-amber-50/55">
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
