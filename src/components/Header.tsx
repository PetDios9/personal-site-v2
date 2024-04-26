export default function Header() {
  return (
    <nav className="flex flex-row justify-center gap-6 md:gap-10 p-8 border-b-2 border-secondary-color bg-primary-color w-screen text-tetriary-color">
      <a
        href="https://github.com/petdios9"
        target="_blank"
        rel="noopener noreferrer"
        className="text-tetriary-color hover:text-secondary-color relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary-color after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
      >
        Github
      </a>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-tetriary-color hover:text-secondary-color relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary-color after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
      >
        Resume
      </a>
      <a
        href="#projects"
        className="text-tetriary-color hover:text-secondary-color relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary-color after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
      >
        Projects
      </a>
      <a
        href="#contact"
        className="text-tetriary-color hover:text-secondary-color relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary-color after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
      >
        Contact
      </a>
    </nav>
  );
}
