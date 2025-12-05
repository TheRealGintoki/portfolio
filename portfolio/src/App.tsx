
import './App.css'
import { FaGithub, FaEnvelope, FaJs, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiCplusplus, SiVercel, SiPython } from 'react-icons/si'
import type { IconType } from 'react-icons'

import ProjectImage from './assets/portfolioImage.png'


function App() {

  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}

export default App

function Navbar() {

  return (
    <nav  className="bg-gray-950 p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">James Stevenson</div>
        <div className="hidden md:flex">
          <a href="#about-me"  className="text-gray-300 hover:text-white px-6 lg:px-10">About Me</a>
          <a href="#skills" className="text-gray-300 hover:text-white px-6 lg:px-10">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-white px-6 lg:px-10">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white px-6 lg:px-10">Contact</a>
        </div>
        <div className="md:hidden flex flex-col gap-1">
          <a href="#about-me"  className="text-gray-300 hover:text-white text-sm">About</a>
          <a href="#skills" className="text-gray-300 hover:text-white text-sm">Skills</a>
        </div>
      </div>
    </nav>
  )
}

// Entry point for main page content.
function Main () { 
  return ( 
    <main className="min-h-screen flex flex-col justify-center ">
      <AboutMe />
      <Skills />
      <Projects />

    </main>
  )
}

// About me, contains name, links, and brief description.
function AboutMe() {
  return (
    <section id="about-me" className="min-h-[100vh] flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center pb-4">
        <span className="block">James</span>
        <span className="block">Stevenson</span>
      </h1>

      <Links />

      <p className="text-center text-lg sm:text-xl md:text-2xl text-gray-200 mt-4 max-w-xl mx-auto px-4">
          Future software engineer passionate about learning new technologies and programming.
      </p>

    </section>
  )
}

function SocialLink({ href, icon: Icon, alt, className = "" }: { 
  href: string; 
  icon: IconType; 
  alt: string;  
  className?: string 
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`text-3xl hover:scale-110 transition-transform ${className}`} aria-label={alt}>
      <Icon aria-hidden="true" />
    </a>
  )
}

function Links() {
  return (
    <div className="flex gap-4 md:gap-6 items-center justify-center">
      <SocialLink 
        href="https://github.com/yourusername" 
        icon={FaGithub} 
        alt="GitHub Profile"
        className="text-white hover:text-gray-300" 
      />

      <SocialLink 
        href="mailto:your.email@gmail.com" 
        icon={FaEnvelope} 
        alt="Send Email"
        className="text-gray-300 hover:text-white" 
      />
    </div>
  )
}
function SkillIcon({ icon: Icon, name, className = "" }: { 
  icon: IconType; 
  name: string;  
  className?: string 
}) {
  return (
    <div className={`flex flex-col items-center hover:scale-110 transition-transform ${className}`}>
      <Icon className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2" aria-hidden="true" />
      <span className="text-gray-300 text-xs sm:text-sm">{name}</span>
    </div>
  )
}

function ProgrammingLanguages() {
  return (
    <div className="px-4">
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6">Languages</h3>
      <div className="flex gap-4 sm:gap-6 md:gap-8 items-center justify-center flex-wrap mb-8 sm:mb-12">
        <SkillIcon icon={FaHtml5} name="HTML" className="text-orange-500" />
        <SkillIcon icon={FaCss3Alt} name="CSS" className="text-blue-500" />
        <SkillIcon icon={FaJs} name="JavaScript" className="text-yellow-400" />
        <SkillIcon icon={SiTypescript} name="TypeScript" className="text-blue-400" />
        <SkillIcon icon={SiCplusplus} name="C++" className="text-blue-600" />
        <SkillIcon icon={SiPython} name="Python" className="text-yellow-600" />
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6">Frameworks & Tools</h3>
      <div className="flex gap-4 sm:gap-6 md:gap-8 items-center justify-center flex-wrap">
        <SkillIcon icon={FaReact} name="React" className="text-cyan-400" />
        <SkillIcon icon={SiTailwindcss} name="Tailwind" className="text-teal-400" />
        <SkillIcon icon={SiVercel} name="Vercel" className="text-white" />
      </div>
    </div>
  )
}

function Skills() {
  return (

    <section id="skills" className="text-center min-h-[60vh] flex flex-col justify-center items-center px-4">

      <h2 className="text-3xl sm:text-4xl font-bold pb-8 sm:pb-10 text-white">My Skills</h2>
      <ProgrammingLanguages />

    </section>

  )

}


function ProjectCard({Image, title, description, link}: {
  Image: string,
  title: string,
  description: string,
  link: string
}) { 
  return (
    <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg m-2 sm:m-4 bg-zinc-900 border border-gray-500 hover:scale-105 transition-transform">
      {/* Fixed image sizing */}
      <img 
        src={Image} 
        alt={title}
        className="w-full h-48 sm:h-64 object-cover" 
      />
      
      <div className="px-4 sm:px-6 py-4">
        <h3 className="font-bold text-lg sm:text-xl mb-2 text-white">{title}</h3>
        <p className="text-gray-300 text-sm sm:text-base">{description}</p>
      </div>
      
      <div className="px-4 sm:px-6 pt-4 pb-6">

        <SocialLink 
          href={link} 
          icon={FaGithub} 
          alt={`View ${title} on GitHub`} 
          className="text-white hover:text-gray-300" 
        />


      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="text-center min-h-[60vh] flex flex-col justify-center items-center px-4">
      <h2 className="text-3xl sm:text-4xl font-bold pb-8 sm:pb-10 text-white">My Projects</h2>
      <div className="flex flex-wrap justify-center max-w-6xl">
        <ProjectCard
          Image={ProjectImage}
          title="My Portfolio"
          description="Created my personal portfolio website using React and Tailwind CSS."
          link="#"
        />

      </div>
    </section>

  )

}