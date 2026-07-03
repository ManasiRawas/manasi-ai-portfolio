export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
          <h1 className="text-xl font-bold tracking-wide">
            Manasi Rawas
          </h1>
  
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
  
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
  
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
  
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>
  
          <button className="rounded-full bg-cyan-400 px-5 py-2 text-black font-semibold hover:bg-cyan-300 transition">
            Resume
          </button>
        </div>
      </nav>
    );
  }