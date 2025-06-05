"use client";
import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    setLoading(false);
    if (res.ok) {
      setStatus("Takk for din henvendelse! Jeg svarer deg så fort jeg kan.");
      setShowToast(true);
      form.reset();
      setTimeout(() => setShowToast(false), 4000);
    } else {
      setStatus("Noe gikk galt. Prøv igjen senere.");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    }
  }

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="glass flex flex-col gap-4 max-w-lg mx-auto p-6"
      >
        <input
          type="hidden"
          name="access_key"
          value="162f73c9-2db7-4a4c-bc54-11b989d1d131"
        />
        <label className="text-left font-medium">
          Navn
          <input
            type="text"
            name="name"
            required
            className="mt-1 w-full rounded border px-3 py-2 bg-white/60 text-gray-900"
          />
        </label>
        <label className="text-left font-medium">
          E-post
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded border px-3 py-2 bg-white/60 text-gray-900"
          />
        </label>
        <label className="text-left font-medium">
          Melding
          <textarea
            name="message"
            required
            rows={4}
            className="mt-1 w-full rounded border px-3 py-2 bg-white/60 text-gray-900"
          />
        </label>
        <button
          type="submit"
          className="px-6 py-2 bg-primary text-white rounded shadow hover:bg-primary-dark transition"
          disabled={loading}
        >
          {loading ? "Sender..." : "Send melding"}
        </button>
      </form>
      {showToast && (
        <div
          className="fixed left-1/2 bottom-8 -translate-x-1/2 bg-primary/95 text-white px-6 py-3 rounded shadow-lg z-50 animate-fade-in border border-white/30"
          style={{ backdropFilter: "blur(2px)" }}
        >
          {status}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
