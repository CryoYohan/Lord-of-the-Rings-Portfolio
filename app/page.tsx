import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      {/* Future sections (About, Skills, Projects) will go here */}
      
      {/* Temporary div to allow scrolling so you can feel the smooth scroll */}
      <div className="h-screen w-full bg-[#020617]"></div>
    </main>
  );
}