'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, PerspectiveCamera } from '@react-three/drei'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import MagicalRing from '@/components/3d/MagicalRing'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden border-b border-amber-200/10" aria-label="Introduction">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 1.5]}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <ambientLight intensity={0.2} />
          {/* Emerald point light to match your theme */}
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#c7a44d" />
          <Environment preset="night" />
          {/* Mist/Fog effect fading into the background color */}
          <fog attach="fog" args={['#0b1710', 5, 15]} />
          <MagicalRing />
        </Canvas>
      </div>

      {/* Foreground UI Overlay */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pt-24 md:px-12 pointer-events-none">
        <div className="max-w-3xl text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="max-w-3xl font-serif text-5xl leading-[1.05] text-amber-50 drop-shadow-2xl md:text-8xl"
        >
          Digital craft for<br/>
          <span className="text-amber-300">the road ahead.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-7 max-w-xl border-l border-amber-300/50 pl-5 font-sans text-base leading-relaxed text-amber-100/65 md:text-lg"
        >
          I&apos;m Cyril John T. Ypil, a data-driven developer and problem solver building useful systems across cloud, software, and intelligent automation.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="mt-10 flex flex-wrap gap-4 pointer-events-auto"
        >
          <a href="#projects" className="gold-button">Explore the works <ArrowRight size={16} /></a>
          <a href="#about" className="ghost-button">Read the story</a>

        </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-6 z-10 flex items-center gap-3 text-xs uppercase tracking-[.25em] text-amber-200/50 md:left-12"
      >
        <ArrowDown size={18} /> Scroll to wander
      </motion.div>
    </section>
  )
}
