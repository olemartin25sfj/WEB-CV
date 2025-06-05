"use client";
import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="glass flex flex-col gap-4 max-w-lg mx-auto p-6"
      onSubmit={() => setStatus("Takk for din henvendelse!")}
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
      >
        Send melding
      </button>
      {status && (
        <div className="text-green-700 font-semibold mt-2">{status}</div>
      )}
    </form>
  );
};

export default ContactForm;
