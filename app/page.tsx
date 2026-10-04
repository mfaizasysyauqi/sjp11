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

  const formatPhoneNumber = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 14);
    if (digits.length <= 4) return digits;
    if (digits.length <= 8) return `${digits.slice(0, 4)}-${digits.slice(4)}`;
    if (digits.length <= 12) return `${digits.slice(0, 4)}-${digits.slice(4, 8)}-${digits.slice(8)}`;
    return `${digits.slice(0, 4)}-${digits.slice(4, 8)}-${digits.slice(8, 12)}-${digits.slice(12)}`;
  };

  const formatAge = (val: string) => {
    return val.replace(/\D/g, "").slice(0, 3);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "noWa") {
      setForm((prev) => ({ ...prev, noWa: formatPhoneNumber(value) }));
    } else if (name === "usia") {
      setForm((prev) => ({ ...prev, usia: formatAge(value) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger Facebook Pixel Lead Event
    try {
      if (typeof window !== "undefined" && typeof (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq === "function") {
        (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("track", "Lead", {
          content_name: "Pendaftaran Sebulan Jadi Pengusaha Batch 11",
          status: "completed",
        });
      }
    } catch {
      // ignore
    }

    const textMessage = 
`Assalamualaikum 🙏🏻
Saya ingin mendaftar di Program Kuliah "Sebulan Jadi Pengusaha Batch #11" 🙏

Perkenalkan saya:
✅ Nama : ${form.nama}
✅ Asal Kota : ${form.kota}
✅ Usia : ${form.usia} Tahun
✅ Pekerjaan : ${form.pekerjaan}

Saya siap belajar sungguh-sungguh &
mohon bantuanya wasilah ikut program ini saya bisa Makin Kaya, Makin Takwa 😊🤲

Terimakasih`;

    const msg = encodeURIComponent(textMessage);
    window.open(`https://api.whatsapp.com/send?phone=6281932800707&text=${msg}`, "_blank");
  };

  const isValid =
    form.nama.trim() && form.noWa.trim() && form.kota.trim() &&
    form.usia.trim() && form.pekerjaan.trim();

  return (
    <>
      <style>{`
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html, body { font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif; background:#111; }

        @keyframes arrowBounce {
          from { transform: translateY(0); }
          to   { transform: translateY(12px); }
        }
        .arrow { animation: arrowBounce 0.85s ease-in-out infinite alternate; }
        .arrow:nth-child(2) { animation-delay: 0.15s; }
        .arrow:nth-child(3) { animation-delay: 0.30s; }

        /* ── Page wrapper: always single column, centered ── */
        .page {
          min-height: 100vh;
          background: #1a1a1a;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Full-width elements */
        .sub-banner {
          width: 100%;
        }

        .top-banner {
          background: #cc0000;
          color: #fff;
          text-align: center;
          font-weight: 700;
          font-size: 15px;
          padding: 12px 16px;
        }

        /* Content column — constrained width on larger screens */
        .col {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }

        /* Promo Text Box (Image 1) */
        .promo-box {
          background: #181818;
          color: #fff;
          text-align: center;
          padding: 24px 20px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        .promo-batch {
          font-size: 17px;
          font-weight: 700;
          font-style: italic;
          color: #ffffff;
        }
        .promo-batch .highlight {
          color: #e53935;
          font-style: normal;
          font-weight: 800;
          margin-left: 4px;
        }

        .promo-slogan {
          color: #ffd700;
          font-size: 21px;
          font-weight: 800;
          font-style: italic;
          line-height: 1.35;
          margin: 4px 0;
        }

        .promo-speaker-label {
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .promo-speaker-name {
          color: #ffd700;
          font-size: 27px;
          font-weight: 900;
          line-height: 1.1;
          margin-top: 2px;
        }

        .promo-speaker-title {
          color: #ffd700;
          font-size: 16px;
          font-weight: 700;
          margin-top: -6px;
        }

        .promo-desc {
          color: #f0f0f0;
          font-size: 14px;
          line-height: 1.6;
          max-width: 540px;
          margin-top: 8px;
        }
        .promo-desc p + p {
          margin-top: 6px;
        }

        .promo-free-badge {
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 4px;
        }

        /* Poster Image Wrap (Image 2) */
        .poster-wrap {
          width: 100%;
          background: #111;
        }
        .poster-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .hero-points {
          background: #1a1a1a;
          color: #fff;
          padding: 20px 22px;
          font-size: 15px;
          line-height: 1.7;
        }
        .hero-points p + p { margin-top: 8px; }

        .sub-banner {
          background: #cc0000;
          text-align: center;
          font-weight: 800;
          font-size: 17px;
          padding: 12px 20px;
          color: #fff;
        }
        .sub-banner .yellow { color: #ffe44d; }

        .arrows-area {
          background: #1a1a1a;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 32px;
          padding: 28px 20px;
        }
        .arrow { width: 52px; }

        .form-wrap {
          padding: 0 14px 32px;
          background: #1a1a1a;
        }

        .form-card {
          background: #d6e4f0;
          border-radius: 16px;
          box-shadow: 0 6px 28px rgba(0,0,0,0.45);
          padding: 24px 20px 28px;
        }

        .form-title {
          color: #1565c0;
          font-size: 20px;
          font-weight: 800;
          text-align: center;
          margin-bottom: 22px;
        }

        .field { margin-bottom: 14px; }
        .field label {
          display: block;
          color: #1a1a1a;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .field input {
          width: 100%;
          background: #fff;
          border: 1.8px solid #5b9bd5;
          border-radius: 8px;
          padding: 13px 14px;
          font-size: 15px;
          color: #333;
          outline: none;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        .field input::placeholder { color: #9fb8cc; }
        .field input:focus { border-color: #1565c0; }

        .btn-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          margin-top: 20px;
          padding: 15px;
          background: #27ae60;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
          font-family: inherit;
          box-shadow: 0 4px 14px rgba(39,174,96,0.4);
          transition: background 0.2s, transform 0.1s;
        }
        .btn-submit:hover  { background: #219150; }
        .btn-submit:active { transform: scale(0.97); }
        .btn-submit:disabled {
          background: #8bc4a3;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        /* ── TABLET ≥ 640px ── */
        @media (min-width: 640px) {
          .top-banner { font-size: 16px; padding: 13px 24px; }

          .col { max-width: 640px; align-self: center; }

          .promo-box { padding: 32px 28px 26px; gap: 16px; }
          .promo-batch { font-size: 19px; }
          .promo-slogan { font-size: 24px; }
          .promo-speaker-label { font-size: 17px; }
          .promo-speaker-name { font-size: 32px; }
          .promo-speaker-title { font-size: 18px; }
          .promo-desc { font-size: 15px; }
          .promo-free-badge { font-size: 16px; }

          .hero-points { padding: 26px 36px; font-size: 16px; }
          .sub-banner { font-size: 19px; padding: 14px 36px; }

          .arrows-area { gap: 48px; padding: 36px 36px; }
          .arrow { width: 64px; }

          .form-wrap  { padding: 0 24px 40px; }
          .form-card  { padding: 28px 28px 34px; }
          .form-title { font-size: 22px; margin-bottom: 26px; }
          .field label  { font-size: 15px; }
          .field input  { padding: 14px 15px; font-size: 16px; }
          .btn-submit   { padding: 17px; font-size: 17px; }
        }

        /* ── DESKTOP ≥ 1024px ── */
        @media (min-width: 1024px) {
          .top-banner { font-size: 17px; padding: 14px 40px; }

          .col { max-width: 720px; }

          .promo-box { padding: 40px 36px 32px; gap: 18px; }
          .promo-batch { font-size: 21px; }
          .promo-slogan { font-size: 27px; }
          .promo-speaker-label { font-size: 18px; }
          .promo-speaker-name { font-size: 36px; }
          .promo-speaker-title { font-size: 20px; }
          .promo-desc { font-size: 16px; }
          .promo-free-badge { font-size: 17px; }

          .hero-points { padding: 32px 48px; font-size: 17px; }
          .sub-banner { font-size: 22px; padding: 16px 56px; }

          .arrows-area { gap: 64px; padding: 44px 56px; }
          .arrow { width: 80px; }

          .form-wrap  { padding: 0 40px 52px; }
          .form-card  { padding: 36px 36px 40px; }
          .form-title { font-size: 24px; margin-bottom: 28px; }
          .field { margin-bottom: 16px; }
          .field label  { font-size: 15px; margin-bottom: 7px; }
          .field input  { padding: 15px 16px; font-size: 16px; }
          .btn-submit   { padding: 18px; font-size: 18px; margin-top: 24px; }
        }
      `}</style>

      <div className="page">
        {/* Centered content column */}
        <div className="col">
          {/* 100% GRATIS Top Header */}
          <div className="top-banner">🚀 100% GRATIS - Tanpa Biaya Apapun</div>

          {/* Promo Text Section (Image 1) */}
          <div className="promo-box">
            <div className="promo-batch">
              🚀 Program Kuliah Online #BATCH 11 <span className="highlight">[Gratis]</span>
            </div>

            <div className="promo-slogan">
              &ldquo;Ayo, Wujudkan Mimpi Jadi Pengusaha&rdquo;
            </div>

            <div className="promo-speaker-label">
              🎙️ Bersama Pembicara Nasional
            </div>

            <div className="promo-speaker-name">
              Jamil Azzaini
            </div>

            <div className="promo-speaker-title">
              (Inspirator Sukses Mulia)
            </div>

            <div className="promo-desc">
              <p>*Program yang telah diikuti ribuan peserta dari seluruh Indonesia.</p>
              <p>Dirancang khusus untuk kamu yang ingin naik kelas secara mindset &amp; penghasilan.</p>
            </div>

            <div className="promo-free-badge">
              🎁 100% GRATIS – TERBUKA UNTUK UMUM
            </div>
          </div>

          {/* Poster Image Section (Image 2) */}
          <div className="poster-wrap">
            <img
              src="/poster.jpg"
              alt="Program Kuliah Sebulan Jadi Pengusaha Batch 11"
              className="poster-img"
            />
          </div>

          {/* Red Banner Below Image */}
          <div className="top-banner">🚀 100% GRATIS - Tanpa Biaya Apapun</div>

          {/* Bullet points info below image */}
          <div className="hero-points">
            <p>📌 <strong>100% Gratis!</strong> Cocok untuk pemula maupun yang ingin naik level dalam bisnis.</p>
            <p>📌 <strong>Bimbingan langsung</strong> dari mentor sukses dan berpengalaman.</p>
          </div>

          {/* Sub-Banner */}
          <div className="sub-banner">
            <span className="yellow">[GRATIS]</span>
            {" "}Daftar Sekarang Juga..
          </div>

          {/* Animated Arrows */}
          <div className="arrows-area">
            {[0, 1, 2].map((i) => (
              <svg key={i} className="arrow" style={{ animationDelay: `${i * 0.15}s` }} viewBox="0 0 100 120" fill="none">
                <path d="M 35 0 L 65 0 L 65 60 L 100 60 L 50 120 L 0 60 L 35 60 Z" fill="#cc0000" />
              </svg>
            ))}
          </div>

          {/* Registration Form */}
          <div className="form-wrap">
            <div className="form-card">
              <h2 className="form-title">Form Pendaftaran</h2>
              <form onSubmit={handleSubmit}>
                {[
                  { label: "Nama",               name: "nama",      type: "text", inputMode: "text",    ph: "Nama Anda" },
                  { label: "No Whatsapp",         name: "noWa",      type: "tel",  inputMode: "numeric", ph: "0856-XXXX-XXXX" },
                  { label: "Kota / Kecamatan",    name: "kota",      type: "text", inputMode: "text",    ph: "Kota / Kecamatan" },
                  { label: "Usia",                name: "usia",      type: "text", inputMode: "numeric", ph: "Contoh: 25" },
                  { label: "Pekerjaan/Kegiatan",  name: "pekerjaan", type: "text", inputMode: "text",    ph: "Pekerjaan/Kegiatan Saat Ini" },
                ].map(({ label, name, type, inputMode, ph }) => (
                  <div className="field" key={name}>
                    <label>{label}</label>
                    <input
                      type={type}
                      inputMode={inputMode as "text" | "numeric" | "tel"}
                      name={name}
                      value={form[name as keyof typeof form]}
                      onChange={handleChange}
                      placeholder={ph}
                      required
                    />
                  </div>
                ))}

                <button type="submit" className="btn-submit" disabled={!isValid}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Daftar Sekarang!
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
