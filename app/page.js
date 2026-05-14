export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#0f172a",
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* HERO */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #0f172a 0%, #111827 50%, #1e3a8a 100%)",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          VNO Consulting Group
        </h1>

        <h2
          style={{
            color: "#fbbf24",
            fontSize: "28px",
            marginBottom: "30px",
          }}
        >
          Administración · Contabilidad · Mercado de Capitales
        </h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "22px",
            lineHeight: "1.6",
            color: "#d1d5db",
          }}
        >
          Soluciones estratégicas para emprendedores, profesionales y PyMEs
          que buscan crecimiento, organización y respaldo profesional.
        </p>

        <div style={{ marginTop: "40px" }}>
          <a
            href="https://wa.me/543416657721"
            style={{
              backgroundColor: "#fbbf24",
              color: "#000",
              padding: "16px 32px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              marginRight: "15px",
              display: "inline-block",
            }}
          >
            WhatsApp
          </a>

          <a
            href="https://instagram.com/consultingvno"
            style={{
              border: "1px solid #fbbf24",
              color: "#fbbf24",
              padding: "16px 32px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
            Instagram
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#111827",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "60px",
            color: "#fbbf24",
          }}
        >
          Nuestros Servicios
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* CARD */}
          <div
            style={{
              backgroundColor: "#1f2937",
              padding: "35px",
              borderRadius: "20px",
            }}
          >
            <h3 style={{ fontSize: "28px", color: "#fbbf24" }}>
              Administración
            </h3>

            <p style={{ marginTop: "20px", color: "#d1d5db" }}>
              Organización de procesos, control de gestión, costos,
              presupuestos y optimización administrativa.
            </p>
          </div>

          {/* CARD */}
          <div
            style={{
              backgroundColor: "#1f2937",
              padding: "35px",
              borderRadius: "20px",
            }}
          >
            <h3 style={{ fontSize: "28px", color: "#fbbf24" }}>
              Contabilidad
            </h3>

            <p style={{ marginTop: "20px", color: "#d1d5db" }}>
              Monotributo, impuestos, registraciones contables y asesoramiento
              integral para emprendedores y PyMEs.
            </p>
          </div>

          {/* CARD */}
          <div
            style={{
              backgroundColor: "#1f2937",
              padding: "35px",
              borderRadius: "20px",
            }}
          >
            <h3 style={{ fontSize: "28px", color: "#fbbf24" }}>
              Mercado de Capitales
            </h3>

            <p style={{ marginTop: "20px", color: "#d1d5db" }}>
              Educación financiera, inversiones, planificación y herramientas
              para potenciar tus finanzas.
            </p>
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "30px",
            color: "#fbbf24",
          }}
        >
          ¿Por qué elegirnos?
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "22px",
            lineHeight: "1.7",
            color: "#d1d5db",
          }}
        >
          En VNO Consulting Group trabajamos con una visión moderna y cercana,
          ayudando a nuestros clientes a transformar información en decisiones
          estratégicas. Nuestro objetivo es brindar soluciones claras,
          eficientes y adaptadas a cada necesidad.
        </p>
      </section>

      {/* CONTACTO */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#111827",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            color: "#fbbf24",
            marginBottom: "20px",
          }}
        >
          Contactanos
        </h2>

        <p style={{ fontSize: "22px", color: "#d1d5db" }}>
          📩 consultingvno@gmail.com
        </p>

        <p style={{ fontSize: "22px", color: "#d1d5db" }}>
          📲 +54 9 341 665 7721
        </p>

        <p style={{ fontSize: "22px", color: "#d1d5db" }}>
          📸 @consultingvno
        </p>

        <div style={{ marginTop: "40px" }}>
          <a
            href="https://wa.me/543416657721"
            style={{
              backgroundColor: "#fbbf24",
              color: "#000",
              padding: "18px 36px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Solicitar Asesoramiento
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "30px",
          textAlign: "center",
          backgroundColor: "#020617",
          color: "#9ca3af",
        }}
      >
        © 2026 VNO Consulting Group · Hacemos simple lo que parece complicado.
      </footer>
    </div>
  );
}
