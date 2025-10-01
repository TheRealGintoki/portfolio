
import './App.css'

function App() {

  return (
    <>
      <Navbar />
    </>
  )
}

export default App

function Navbar() {

  return (
    <nav id="navbar" className="bg-gray-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">James Stevenson</div>
        <div>
          <a href="#home"  className="navlink text-gray-300 hover:text-white px-10">About Me</a>
          <a href="#about" className="navlink text-gray-300 hover:text-white px-10">Skills</a>
          <a href="#projects" className="navlink text-gray-300 hover:text-white px-10">Projects</a>
          <a href="#contact" className="navlink text-gray-300 hover:text-white px-10">Contact</a>
        </div>
      </div>
    </nav>


  )

}

export { Navbar }