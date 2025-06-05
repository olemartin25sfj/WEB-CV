// Footer med kontaktinfo, sosiale medier og ©-tekst
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full glass bg-white/30 py-6 mt-12 text-center text-gray-600 border-t border-white/30 backdrop-blur">
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-2">
      <span className="hidden md:inline">|</span>
      <a
        href="https://github.com/olemartin25sfj"
        target="_blank"
        rel="noopener"
        className="flex items-center gap-2 hover:text-primary"
      >
        <FaGithub /> GitHub
      </a>
      <span className="hidden md:inline">|</span>
      <a
        href="https://linkedin.com/in/brukernavn"
        target="_blank"
        rel="noopener"
        className="flex items-center gap-2 hover:text-primary"
      >
        <FaLinkedin /> LinkedIn
      </a>
    </div>
    <div className="text-xs">
      © {new Date().getFullYear()} Ole Martin Snuggerud. Alle rettigheter
      reservert.
    </div>
  </footer>
);

export default Footer;
