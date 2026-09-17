'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Code, Lock } from 'lucide-react'
import Image from 'next/image'

// Your expanded artifacts of creation
const projects = [
  {
    title: "EnerGreen",
    category: "AI & IoT System",
    description: "An AI-powered and IoT-based green energy monitoring system. Enables real-time tracking of household electricity and green energy consumption, predicts future costs, and provides data-driven insights for sustainable energy adoption.",
    tech: ["Python", "IoT", "AI Models", "GCP"],
    github: "https://github.com/CryoYohan/EnerGreen-AI-Powered-and-IoT-Based-Green-Energy-Consumption-Monitoring-System",
    isPrivate: false,
    image: "/projects/energreen.JPEG", // Create a 'projects' folder in 'public'
    portalColor: "from-emerald-500/20 to-emerald-900/20",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] border-emerald-500/30"
  },
  {
    title: "CurrenSee",
    category: "AI & IoT Assistive Device",
    description: "A smart, low-cost device designed to help visually impaired individuals identify paper money and coins. Features real-time AI inference via a camera module, processed by an ESP32 microcontroller to provide instant audio feedback.",
    tech: ["ESP32-CAM", "AI Inference", "Hardware", "Audio Feedback"],
    github: "#",
    isPrivate: true,
    image: "/projects/currensee.JPEG", // Don't forget to add currensee.jpg to your public/projects folder!
    portalColor: "from-yellow-500/20 to-yellow-900/20",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] border-yellow-500/30"
  },
  {
    title: "Lamoy",
    category: "Full-Stack Web App",
    description: "A fun and easy food ordering system built for speed and simplicity. Combines modern frontend interactivity with a robust backend to create a smooth ordering experience from menu to checkout.",
    tech: ["React.js", "ASP.NET Core", "PostgreSQL"],
    github: "https://github.com/CryoYohan/Lamoy-Simple-Food-Ordering-System",
    isPrivate: false,
    image: "/projects/lamoy.JPEG",
    portalColor: "from-orange-500/20 to-orange-900/20",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(249,115,22,0.3)] border-orange-500/30"
  },
  {
    title: "Automated Rain Alert",
    category: "Python Automation",
    description: "An automated Python script that integrates with the OpenWeather API to check forecasts and send a nightly notification to my girlfriend to bring an umbrella if rain is expected the next morning.",
    tech: ["Python", "OpenWeather API", "Automation"],
    github: "#",
    isPrivate: true,
    image: "/projects/rain-alert.jpg",
    portalColor: "from-blue-500/20 to-blue-900/20",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] border-blue-500/30"
  },
  {
    title: "Snake Game Python",
    category: "Game Development",
    description: "A classic Snake game implemented using Python's Turtle module and Object-Oriented Programming (OOP) principles. A fun, engaging experience built entirely from scratch.",
    tech: ["Python", "Turtle", "OOP"],
    github: "https://github.com/CryoYohan/Snake-Game-Python",
    isPrivate: false,
    image: "/projects/snake.png",
    portalColor: "from-green-500/20 to-green-900/20",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] border-green-500/30"
  },
  {
    title: "EnerGreen v1 (Early Release)",
    category: "Simulation Web App",
    description: "A simulation-based web application that allows users to monitor simulated energy consumption, track solar energy production, and calculate carbon footprint reduction through interactive dashboards.",
    tech: ["Web Tech", "Data Analytics", "Simulation"],
    github: "https://github.com/CryoYohan/GreenEnergyConsumptionMonitoringWebApp",
    isPrivate: false,
    image: "/projects/energreen-v1.png",
    portalColor: "from-teal-500/20 to-teal-900/20",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(20,184,166,0.3)] border-teal-500/30"
  },
  {
    title: "Lodge Finder",
    category: "Java Application",
    description: "A desktop system application designed to help users find the nearest lodging, inns, and hotels in their designated locations using a prompted manual combo box selection system.",
    tech: ["Java", "Desktop App", "UI/UX"],
    github: "https://github.com/CryoYohan/LodgeFinder",
    isPrivate: false,
    image: "/projects/lodge-finder.png",
    portalColor: "from-indigo-500/20 to-indigo-900/20",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] border-indigo-500/30"
  },
  {
    title: "Fixed Partition Simulation",
    category: "C# / OS Algorithm",
    description: "A C# application simulating a fixed memory partitioning algorithm for operating systems. Visualizes allocation, analyzes memory usage, and helps users understand the concept of memory fragmentation.",
    tech: ["C#", "OS Concepts", "Algorithms"],
    github: "https://github.com/CryoYohan/Fixed-Partition-Simulation",
    isPrivate: false,
    image: "/projects/partition.png",
    portalColor: "from-purple-500/20 to-purple-900/20",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] border-purple-500/30"
  },
  {
    title: "ParkWise",
    category: "System Application",
    description: "A dynamic parking system designed to calculate fees based on vehicle type, parking duration, and additional minutes. Utilizes core Object-Oriented principles like polymorphism to flexibly handle different vehicle types such as Motorbikes, Sedans, and SUVs.",
    tech: ["OOP", "Polymorphism", "Software Design"],
    github: "https://github.com/CryoYohan/ParkWise-Parking_System_Application",
    isPrivate: false,
    image: "/projects/park-wise.png",
    portalColor: "from-rose-500/20 to-rose-900/20",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(244,63,94,0.3)] border-rose-500/30"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="realm-section" aria-labelledby="projects-title">
      
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto mb-16 w-full max-w-6xl"
      >
        <p className="section-kicker">The works</p>
        <h2 id="projects-title" className="section-title">Things made for<br /><span className="text-amber-300">the living world.</span></h2>
        <div className="section-rule" />
      </motion.div>

      {/* Magical Portals Grid */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`group relative flex flex-col overflow-hidden border border-amber-200/15 bg-[#15251a] transition-all duration-500 hover:-translate-y-1 hover:border-amber-300/45 hover:shadow-[0_22px_60px_rgba(0,0,0,.25)] ${index === 0 ? 'md:col-span-2 lg:col-span-2 lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-8' : ''}`}
          >
            {/* The swirling mist inside the portal */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/5 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" />

            {/* Scrying Window (Project Image) */}
            <div className={`relative w-full overflow-hidden border-b border-amber-200/15 bg-[#0b1710] ${index === 0 ? 'h-full min-h-64 border-b-0 lg:border-r' : 'mb-6 h-48'}`}>
              {/* Fallback pattern in case image is missing */}
              <Code size={48} className="absolute text-amber-200/10" />
              <Image
                src={project.image} 
                alt={project.title} 
                fill
                className="relative z-10 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                onError={(e) => {
                  // Hide broken image icon if image doesn't exist yet
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Overlay shadow for blending */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0b1710]/85 via-transparent to-transparent" />
            </div>

            <div className="relative z-30 flex-grow p-6 pt-0 lg:p-7">
              <span className="mb-2 block font-sans text-[11px] uppercase tracking-[.2em] text-amber-300/60">
                {project.category}
              </span>
              <h3 className="mb-3 font-serif text-2xl leading-snug text-amber-100 transition-colors duration-300 group-hover:text-amber-300">
                {project.title}
              </h3>
              <p className="mb-6 font-sans text-sm leading-relaxed text-amber-50/60">
                {project.description}
              </p>
            </div>

            <div className="relative z-30 mt-auto">
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="border border-amber-200/15 bg-[#0b1710]/60 px-2.5 py-1 font-sans text-[11px] text-amber-50/65">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto flex gap-4 border-t border-amber-200/10 pt-4">
                {project.isPrivate ? (
                    <span className="flex cursor-not-allowed items-center gap-2 font-sans text-sm text-amber-50/35">
                    <Lock size={16} /> Private Vault
                  </span>
                ) : (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="ink-link flex items-center gap-2 font-sans text-sm text-amber-50/55">
                    <Code size={16} /> Source Runes
                  </a>
                )}
                {!project.isPrivate && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="ink-link ml-auto flex items-center gap-2 font-sans text-sm text-amber-200/70">
                    Enter Portal <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
