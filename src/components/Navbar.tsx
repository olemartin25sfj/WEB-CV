import Link from "next/link";

const Navbar = () => (
  <nav className="w-full flex items-center justify-between py-4 px-6 glass shadow-md sticky top-0 z-50 border-b border-white/30 backdrop-blur">
    <div className="font-bold text-xl tracking-tight">OMS</div>
    <ul className="flex gap-6 text-sm font-medium">
      <li>
        <Link href="#hjem">Hjem</Link>
      </li>
      <li>
        <Link href="#erfaring">Erfaring</Link>
      </li>
      <li>
        <Link href="#utdanning">Utdanning</Link>
      </li>
      <li>
        <Link href="#prosjekter">Prosjekter</Link>
      </li>
      <li>
        <Link href="#kontakt">Kontakt</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
