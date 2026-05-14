export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-amber-400 text-lg mb-4 tracking-wide">
              Asesoría Integral
            </p>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              HACEMOS <span className="text-amber-400">CRECER</span>
              <br />
              TU NEGOCIO
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
              Administración, contabilidad y mercado de capitales para
              emprendedores, PyMEs y profesionales.
            </p>

            <a
              href="https://wa.me/543416657721"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-4 rounded-2xl"
            >
              Hablemos por WhatsApp
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-4xl font-black mb-6">VNO Consulting</h2>

            <div className="space-y-4 text-slate-300 text-lg">
              <p>✔ Administración</p>
              <p>✔ Contabilidad</p>
              <p>✔ Mercado de Capitales</p>
              <p>✔ Atención online y presencial</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            ¿EN QUÉ PODEMOS AYUDARTE?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Administración</h3>
              <p>Procesos, costos, gestión y organización.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Contabilidad</h3>
              <p>Monotributo, IVA, impuestos y consultoría.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Mercado de Capitales</h3>
              <p>Educación financiera e inversiones.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-white py-10 text-center">
        <p>© 2026 VNO Consulting Group</p>
        <p className="mt-2">WhatsApp: 341 665 7721</p>
      </footer>
    </main>
  );
}
