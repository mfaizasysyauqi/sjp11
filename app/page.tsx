"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    nama: "",
    noWa: "",
    kota: "",
    usia: "",
    pekerjaan: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pesan = `Halo, saya ingin mendaftar!%0A%0A*Nama:* ${form.nama}%0A*No WA:* ${form.noWa}%0A*Kota/Kecamatan:* ${form.kota}%0A*Usia:* ${form.usia}%0A*Pekerjaan/Kegiatan:* ${form.pekerjaan}`;
    const targetWa = "6281932800707";
    window.open(`https://wa.me/${targetWa}?text=${pesan}`, "_blank");
  };

  const isValid =
    form.nama && form.noWa && form.kota && form.usia && form.pekerjaan;

  return (
    <main className="min-h-screen bg-[#1a1a1a] flex flex-col items-center">
      {/* Top banner */}
      <div className="w-full bg-red-600 text-white text-center py-3 text-sm font-bold tracking-wide">
        🚀 100% GRATIS - Tanpa Biaya Apapun
      </div>

      {/* Hero section */}
      <div className="w-full max-w-md px-5 py-6 text-white">
        <p className="text-base leading-relaxed">
          📌 <strong>100% Gratis!</strong> Cocok untuk pemula maupun yang ingin
          naik level dalam bisnis.
        </p>
        <p className="mt-2 text-base leading-relaxed">
          📌 <strong>Bimbingan langsung</strong> dari mentor sukses dan
          berpengalaman.
        </p>
      </div>

      {/* Sub banner */}
      <div className="w-full bg-red-600 text-center py-3">
        <span className="text-yellow-300 font-bold text-lg">[GRATIS]</span>
        <span className="text-white font-bold text-lg">
          {" "}
          Daftar Sekarang Juga..
        </span>
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-8 py-6">
        {[0, 1, 2].map((i) => (
          <svg
            key={i}
            width="40"
            height="56"
            viewBox="0 0 40 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <path
              d="M20 0 L20 38 M6 24 L20 42 L34 24"
              stroke="#dc2626"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </div>

      {/* Form card */}
      <div className="w-full max-w-md mx-4 mb-10 bg-[#dce6f0] rounded-2xl shadow-2xl px-6 py-8">
        <h2 className="text-center text-[#1a6bbf] text-xl font-bold mb-6">
          Form Pendaftaran
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Nama */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">Nama</label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              placeholder="Nama Anda"
              className="w-full border border-blue-400 rounded-lg px-4 py-3 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* No WA */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              No Whatsapp
            </label>
            <input
              type="tel"
              name="noWa"
              value={form.noWa}
              onChange={handleChange}
              placeholder="0856XXXXXXXX"
              className="w-full border border-blue-400 rounded-lg px-4 py-3 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* Kota */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Kota / Kecamatan
            </label>
            <input
              type="text"
              name="kota"
              value={form.kota}
              onChange={handleChange}
              placeholder="Kota / Kecamatan"
              className="w-full border border-blue-400 rounded-lg px-4 py-3 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* Usia */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">Usia</label>
            <input
              type="number"
              name="usia"
              value={form.usia}
              onChange={handleChange}
              placeholder="Usia Anda"
              min={1}
              max={100}
              className="w-full border border-blue-400 rounded-lg px-4 py-3 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* Pekerjaan */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Pekerjaan/Kegiatan
            </label>
            <input
              type="text"
              name="pekerjaan"
              value={form.pekerjaan}
              onChange={handleChange}
              placeholder="Pekerjaan/Kegiatan Saat Ini"
              className="w-full border border-blue-400 rounded-lg px-4 py-3 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isValid}
            className="mt-2 w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 text-lg transition-all duration-200 active:scale-95 shadow-lg"
          >
            {/* WhatsApp icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Daftar Sekarang!
          </button>
        </form>
      </div>

      <style jsx>{`
        .arrow-bounce {
          animation: bounce 0.8s ease-in-out infinite alternate;
        }
        @keyframes bounce {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(10px);
          }
        }
      `}</style>
    </main>
  );
}
