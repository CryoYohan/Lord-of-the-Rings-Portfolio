'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, PerspectiveCamera } from '@react-three/drei'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import MagicalRing from '@/components/3d/MagicalRing'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <ambientLight intensity={0.2} />
          {/* Emerald point light to match your theme */}
          <pointLight position={[10, 10, 10]} intensity={1} color="#10B981" />
          <Environment preset="night" />
          {/* Mist/Fog effect fading into the background color */}
          <fog attach="fog" args={['#020617', 5, 15]} />
          <MagicalRing />
        </Canvas>
      </div>

      {/* Foreground UI Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20 pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-5xl md:text-7xl font-serif text-slate-200 drop-shadow-2xl"
        >
          One Journey.<br/>
          <span className="text-yellow-500">Endless Possibilities.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-6 text-lg md:text-xl text-slate-400 font-sans max-w-2xl"
        >
          Building digital worlds through code, creativity, and innovation.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="mt-10 flex gap-6 pointer-events-auto"
        >
          <a href="#about">
            <button className="px-8 py-3 bg-emerald-500/10 border border-emerald-500 text-emerald-500 rounded-sm hover:bg-emerald-500 hover:text-slate-950 transition-all duration-300 font-serif tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)]">
            Enter the Journey
          </button>
          </a>

        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-yellow-500 z-10"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  )
}