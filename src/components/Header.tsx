export default function Header() {
  return (
    <nav className="flex flex-row justify-center gap-10 p-8 border-b-2 border-orange-400">
      <a
        href="https://github.com/petdios9"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-orange-400 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
      >
        Github
      </a>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-orange-400 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
      >
        Resume
      </a>
      <a
        href="#projects"
        className="text-white hover:text-orange-400 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
      >
        Projects
      </a>
      <a
        href="#contact"
        className="text-white hover:text-orange-400 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
      >
        Contact
      </a>
    </nav>
  );
}
