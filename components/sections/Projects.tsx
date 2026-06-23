'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Code, Lock } from 'lucide-react'

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
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen w-full bg-[#020617] py-32 px-6 flex flex-col items-center z-10">
      
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-20 w-full max-w-6xl"
      >
        <h2 className="text-4xl md:text-6xl font-serif text-slate-200 mb-4">
          The Hall of <span className="text-yellow-500">Achievements</span>
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto" />
      </motion.div>

      {/* Magical Portals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`group relative flex flex-col p-6 rounded-2xl bg-gradient-to-b ${project.portalColor} backdrop-blur-xl border ${project.glowColor} transition-all duration-500 overflow-hidden`}
          >
            {/* The swirling mist inside the portal */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Scrying Window (Project Image) */}
            <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden border border-slate-700/50 bg-slate-900 flex items-center justify-center">
              {/* Fallback pattern in case image is missing */}
              <Code size={48} className="absolute text-slate-800" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="relative z-10 object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                onError={(e) => {
                  // Hide broken image icon if image doesn't exist yet
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Overlay shadow for blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-20" />
            </div>

            <div className="relative z-30 flex-grow">
              <span className="text-xs font-sans tracking-widest uppercase text-slate-400 mb-2 block">
                {project.category}
              </span>
              <h3 className="text-2xl font-serif text-slate-100 mb-3 group-hover:text-yellow-400 transition-colors duration-300 leading-snug">
                {project.title}
              </h3>
              <p className="text-slate-300 font-sans leading-relaxed text-sm mb-6">
                {project.description}
              </p>
            </div>

            <div className="relative z-30 mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-sans px-3 py-1 bg-slate-950/80 border border-slate-700 rounded-full text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 border-t border-slate-800/60 pt-4 mt-auto">
                {project.isPrivate ? (
                  <span className="flex items-center gap-2 text-sm font-sans text-slate-500 cursor-not-allowed">
                    <Lock size={16} /> Private Vault
                  </span>
                ) : (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-sans text-slate-400 hover:text-white transition-colors">
                    <Code size={16} /> Source Runes
                  </a>
                )}
                {!project.isPrivate && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-sans text-slate-400 hover:text-yellow-400 transition-colors ml-auto">
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