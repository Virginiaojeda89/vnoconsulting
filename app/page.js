export default function Home() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#020617",
        color: "white",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 60px",
          backgroundColor: "#020617",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div>
          <h1
            style={{
              color: "#fbbf24",
              margin: 0,
              fontSize: "38px",
            }}
          >
            VNO
          </h1>

          <p
            style={{
              margin: 0,
              color: "white",
              letterSpacing: "3px",
            }}
          >
            CONSULTING GROUP
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "35px",
            fontSize: "18px",
          }}
        >
          <span>Inicio</span>
          <span>Servicios</span>
          <span>Sobre nosotros</span>
          <span>Contacto</span>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 60px",
          background:
            "linear-gradient(to right, rgba(2,6,23,0.95), rgba(15,23,42,0.7)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          <h1
            style={{
              fontSize: "90px",
              lineHeight: "1",
              marginBottom: "20px",
            }}
          >
            VNO
            <br />
            <span style={{ color: "#fbbf24" }}>CONSULTING GROUP</span>
          </h1>

          <h2
            style={{
              color: "#fbbf24",
              fontSize: "28px",
              marginBottom: "30px",
            }}
          >
            Administración • Contabilidad • Mercado de Capitales
          </h2>

          <p
            style={{
              fontSize: "24px",
              color: "#e5e7eb",
              lineHeight: "1.7",
              marginBottom: "40px",
            }}
          >
            Soluciones estratégicas para emprendedores, profesionales y PyMEs
            que buscan crecimiento, organización y respaldo profesional.
          </p>

          <div style={{ display: "flex", gap: "20px" }}>
            <a
              href="https://wa.me/543416657721"
              style={{
                backgroundColor: "#fbbf24",
                color: "#000",
                padding: "18px 38px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              WhatsApp
            </a>

            <a
              href="https://instagram.com/consultingvno"
              style={{
                border: "1px solid #fbbf24",
                color: "#fbbf24",
                padding: "18px 38px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        style={{
          padding: "100px 60px",
          backgroundColor: "#0f172a",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#fbbf24",
            fontSize: "52px",
            marginBottom: "70px",
          }}
        >
          Nuestros Servicios
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              title: "Administración",
              text: "Organización de procesos, costos, presupuestos y optimización administrativa.",
            },
            {
              title: "Contabilidad",
              text: "Monotributo, impuestos y asesoramiento integral para emprendedores y PyMEs.",
            },
            {
              title: "Mercado de Capitales",
              text: "Educación financiera, inversiones y herramientas para potenciar tus finanzas.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background:
                  "linear-gradient(145deg, #111827, #1e293b)",
                padding: "40px",
                borderRadius: "25px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                style={{
                  color: "#fbbf24",
                  fontSize: "32px",
                  marginBottom: "20px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#d1d5db",
                  fontSize: "20px",
                  lineHeight: "1.7",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section
        style={{
          backgroundColor: "white",
          color: "#020617",
          padding: "100px 60px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "52px",
            marginBottom: "70px",
          }}
        >
          ¿Por qué elegirnos?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
            textAlign: "center",
          }}
        >
          {[
            "Confianza",
            "Experiencia",
            "Cercanía",
            "Resultados",
          ].map((item, index) => (
            <div key={index}>
              <h3
                style={{
                  color: "#fbbf24",
                  fontSize: "32px",
                }}
              >
                {item}
              </h3>

              <p
                style={{
                  marginTop: "15px",
                  fontSize: "19px",
                  color: "#374151",
                }}
              >
                Atención personalizada y soluciones profesionales adaptadas a cada cliente.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section
        style={{
          padding: "100px 60px",
          background:
            "linear-gradient(to right, #020617, #0f172a)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#fbbf24",
            fontSize: "52px",
            marginBottom: "30px",
          }}
        >
          Estamos para ayudarte
        </h2>

        <p
          style={{
            fontSize: "24px",
            color: "#e5e7eb",
            marginBottom: "50px",
          }}
        >
          Hacemos simple lo que parece complicado.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            flexWrap: "wrap",
            fontSize: "20px",
            color: "#d1d5db",
          }}
        >
          <span>📩 consultingvno@gmail.com</span>
          <span>📲 +54 9 341 665 7721</span>
          <span>📍 Rosario, Santa Fe</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "30px",
          textAlign: "center",
          backgroundColor: "#020617",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          color: "#9ca3af",
        }}
      >
        © 2026 VNO Consulting Group · Todos los derechos reservados.
      </footer>
    </div>
  );
}
