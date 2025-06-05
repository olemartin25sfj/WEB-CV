// Hero-seksjon med navn, tittel, profiltekst, profilbilde og knapper
import Image from "next/image";

const Hero = () => (
  <section
    id="hjem"
    className="glass flex flex-col items-center justify-center text-center py-12 px-4 mt-8 mb-8 mx-auto max-w-2xl"
  >
    <Image
      src="/OleMartin-bnw.jpg"
      alt="Profilbilde"
      width={200}
      height={200}
      className="rounded-lg mb-4 border-4 border-primary"
    />
    <h1 className="text-3xl md:text-4xl font-bold mb-2">Mitt Navn</h1>
    <h2 className="text-lg md:text-xl text-primary font-semibold mb-4">
      Developer under development
    </h2>
    <p className="max-w-xl text-gray-700 mb-6">
      Kort beskrivelse/profiltekst. Skriv noen linjer om deg selv, din erfaring
      og hva du brenner for.
    </p>
    <div className="flex gap-4">
      <a
        href="#kontakt"
        className="px-6 py-2 bg-primary text-white rounded shadow hover:bg-primary-dark transition"
      >
        Kontakt meg
      </a>
      <button className="px-6 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition">
        Last ned CV
      </button>
    </div>
  </section>
);

export default Hero;
