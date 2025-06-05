import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Seksjoner for Profil, Erfaring, Utdanning, Ferdigheter, Prosjekter, Kontaktinformasjon kommer her */}
      <section
        id="erfaring"
        className="glass max-w-3xl mx-auto py-12 px-4 mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Erfaring</h2>
        {/* Erfaring-liste */}
      </section>
      <section
        id="utdanning"
        className="glass max-w-3xl mx-auto py-12 px-4 mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Utdanning</h2>
        {/* Utdanning-liste */}
      </section>
      <section
        id="ferdigheter"
        className="glass max-w-3xl mx-auto py-12 px-4 mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Ferdigheter</h2>
        {/* Ferdigheter-liste */}
      </section>
      <section
        id="prosjekter"
        className="glass max-w-3xl mx-auto py-12 px-4 mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Prosjekter</h2>
        {/* Prosjekt-liste */}
      </section>
      <section id="kontakt" className="glass max-w-3xl mx-auto py-12 px-4 mb-8">
        <h2 className="text-2xl font-bold mb-4">Kontaktinformasjon</h2>
        {/* Kontaktinfo eller skjema */}
      </section>
    </>
  );
}
