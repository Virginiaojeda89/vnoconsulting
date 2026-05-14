export default function Home() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "#020617",
        color: "white",
        fontFamily: "Arial, sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          background: "rgba(2,6,23,0.92)",
          backdropFilter: "blur(8px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 60px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              border: "2px solid #fbbf24",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "#020617",
            }}
          >
            <span
              style={{
                color: "#fbbf24",
                fontSize: "34px",
                fontWeight: "bold",
              }}
            >
              V
            </span>

            <span
              style={{
                color: "white",
                fontSize: "11px",
              }}
            >
              VNO
            </span>
          </div>

          <div>
            <h2
              style={{
                margin: 0,
                fontSize: "42px",
              }}
            >
              VNO
            </h2>

            <p
              style={{
                margin: 0,
                color: "#fbbf24",
                letterSpacing: "4px",
                fontSize: "14px",
              }}
            >
              CONSULTING GROUP
            </p>
          </div>
        </div>

        {/* MENU */}
        <div
          style={{
            display: "flex",
            gap: "35px",
            alignItems: "center",
            fontSize: "18px",
          }}
        >
          <a href="#inicio" style={menuStyle}>
            Inicio
          </a>

          <a href="#servicios" style={menuStyle}>
            Servicios
          </a>

          <a href="#nosotros" style={menuStyle}>
            Sobre nosotros
          </a>

          <a href="#contacto" style={menuStyle}>
            Contacto
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="inicio"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "140px 60px 100px",
          backgroundImage:
            "linear-gradient(to right, rgba(2,6,23,0.96), rgba(2,6,23,0.60)), url('https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ maxWidth: "760px" }}>
          {/* LOGO HERO */}
          <div
            style={{
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              border: "3px solid #fbbf24",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: "45px",
              background: "rgba(2,6,23,0.55)",
              backdropFilter: "blur(6px)",
              boxShadow: "0 0 30px rgba(251,191,36,0.25)",
            }}
          >
            <h1
              style={{
                color: "#fbbf24",
                fontSize: "78px",
                margin: 0,
              }}
            >
              V
            </h1>

            <h2
              style={{
                margin: 0,
                fontSize: "54px",
              }}
            >
              VNO
            </h2>

            <p
              style={{
                margin: 0,
                color: "#fbbf24",
                letterSpacing: "4px",
              }}
            >
              CONSULTING GROUP
            </p>
          </div>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: "1.15",
              marginBottom: "30px",
              fontWeight: "bold",
            }}
          >
            Administración • Contabilidad
            <br />

            <span style={{ color: "#fbbf24" }}>
              • Mercado de Capitales
            </span>
          </h1>

          <p
            style={{
              color: "#d1d5db",
              fontSize: "28px",
              lineHeight: "1.8",
              marginBottom: "45px",
              maxWidth: "700px",
            }}
          >
            Soluciones estratégicas para emprendedores, profesionales y PyMEs
            que buscan crecimiento, organización y respaldo profesional.
          </p>

          <div
            style={{
              display: "flex",
              gap: "22px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/543416657721"
              style={{
                background: "#fbbf24",
                color: "#000",
                padding: "18px 40px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              WhatsApp
            </a>

            <a
              href="https://instagram.com/consultingvno"
              style={{
                border: "1px solid #fbbf24",
                color: "#fbbf24",
                padding: "18px 40px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        style={{
          padding: "120px 60px",
          background:
            "linear-gradient(to bottom,#020617,#081225)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "60px",
            marginBottom: "80px",
          }}
        >
          <span style={{ color: "#fbbf24" }}>
            NUESTROS
          </span>{" "}
          SERVICIOS
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "35px",
          }}
        >
          {[
            {
              icon: "💼",
              title: "ADMINISTRACIÓN",
              text: "Organización de procesos, costos, presupuestos y optimización administrativa.",
            },
            {
              icon: "🧾",
              title: "CONTABILIDAD",
              text: "Monotributo, impuestos, registraciones y asesoramiento integral.",
            },
            {
              icon: "📈",
              title: "MERCADO DE CAPITALES",
              text: "Educación financiera, inversiones y planificación estratégica.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background:
                  "linear-gradient(145deg,#0f172a,#1e293b)",
                borderRadius: "30px",
                padding: "45px",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  "0 10px 35px rgba(0,0,0,0.35)",
              }}
            >
              <div
                style={{
                  fontSize: "60px",
                  marginBottom: "25px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontSize: "32px",
                  marginBottom: "20px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#d1d5db",
                  fontSize: "21px",
                  lineHeight: "1.8",
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
        id="nosotros"
        style={{
          background: "#f8fafc",
          color: "#020617",
          padding: "120px 60px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "60px",
            marginBottom: "80px",
          }}
        >
          ¿POR QUÉ ELEGIRNOS?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "40px",
            textAlign: "center",
          }}
        >
          {[
            {
              title: "CONFIANZA",
              text: "Comprometidos con la confidencialidad y ética profesional.",
            },
            {
              title: "EXPERIENCIA",
              text: "Trayectoria en administración y finanzas.",
            },
            {
              title: "CERCANÍA",
              text: "Atención personalizada y soluciones a medida.",
            },
            {
              title: "RESULTADOS",
              text: "Enfoque en crecimiento y eficiencia empresarial.",
            },
          ].map((item, index) => (
            <div key={index}>
              <div
                style={{
                  color: "#fbbf24",
                  fontSize: "58px",
                  marginBottom: "20px",
                }}
              >
                ✦
              </div>

              <h3
                style={{
                  fontSize: "30px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#475569",
                  fontSize: "20px",
                  lineHeight: "1.8",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        style={{
          padding: "110px 60px",
          background:
            "linear-gradient(to right,#020617,#0f172a)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          ESTAMOS PARA AYUDARTE
        </h2>

        <p
          style={{
            color: "#fbbf24",
            fontSize: "30px",
            marginBottom: "60px",
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
            fontSize: "22px",
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
          background: "#020617",
          borderTop:
            "1px solid rgba(255,255,255,0.08)",
          padding: "40px",
          textAlign: "center",
          color: "#94a3b8",
        }}
      >
        © 2026 VNO Consulting Group · Todos los derechos reservados.
      </footer>
    </div>
  );
}

const menuStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
};
