// Footer med kontaktinfo, sosiale medier og ©-tekst
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full bg-gray-100 py-6 mt-12 text-center text-gray-600">
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-2">
      <a
        href="mailto:epost@eksempel.no"
        className="flex items-center gap-2 hover:text-primary"
      >
        <FaEnvelope /> epost@eksempel.no
      </a>
      <span className="hidden md:inline">|</span>
      <a
        href="tel:+4712345678"
        className="flex items-center gap-2 hover:text-primary"
      >
        <FaPhone /> +47 12 34 56 78
      </a>
      <span className="hidden md:inline">|</span>
      <a
        href="https://github.com/brukernavn"
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
      © {new Date().getFullYear()} Mitt Navn. Alle rettigheter reservert.
    </div>
  </footer>
);

export default Footer;
