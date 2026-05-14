export default function Home() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#020617",
        color: "white",
        scrollBehavior: "smooth",
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
          padding: "20px 50px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              border: "2px solid #fbbf24",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              background: "#020617",
            }}
          >
            <span
              style={{
                color: "#fbbf24",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              V
            </span>

            <span
              style={{
                color: "white",
                fontSize: "12px",
                letterSpacing: "2px",
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

        <div
          style={{
            display: "flex",
            gap: "35px",
            alignItems: "center",
            fontSize: "18px",
          }}
        >
          <a href="#inicio" style={linkStyle}>
            Inicio
          </a>

          <a href="#servicios" style={linkStyle}>
            Servicios
          </a>

          <a href="#nosotros" style={linkStyle}>
            Sobre nosotros
          </a>

          <a href="#contacto" style={linkStyle}>
            Contacto
          </a>

          <a
            href="https://instagram.com/consultingvno"
            style={socialStyle}
          >
            IG
          </a>

          <a
            href="https://linkedin.com"
            style={socialStyle}
          >
            in
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
          padding: "140px 60px 80px",
          backgroundImage:
            "linear-gradient(to right, rgba(2,6,23,0.96), rgba(2,6,23,0.70)), url('https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ maxWidth: "720px" }}>
          {/* LOGO HERO */}
          <div
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              border: "3px solid #fbbf24",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              background: "rgba(2,6,23,0.65)",
              marginBottom: "40px",
              boxShadow: "0 0 30px rgba(251,191,36,0.3)",
            }}
          >
            <h1
              style={{
                color: "#fbbf24",
                fontSize: "72px",
                margin: 0,
              }}
            >
              V
            </h1>

            <h2
              style={{
                margin: 0,
                fontSize: "50px",
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
              fontSize: "68px",
              lineHeight: "1.2",
              marginBottom: "25px",
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
              fontSize: "26px",
              color: "#d1d5db",
              lineHeight: "1.8",
              marginBottom: "45px",
            }}
          >
            Soluciones estratégicas para emprendedores, profesionales y PyMEs
            que buscan crecimiento, organización y respaldo profesional.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
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
            "linear-gradient(to bottom, #020617, #081225)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "58px",
            marginBottom: "70px",
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
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "35px",
          }}
        >
          {[
            {
              icon: "💼",
              title: "ADMINISTRACIÓN",
              text: "Organización de procesos, control de gestión, costos, presupuestos y optimización administrativa.",
            },
            {
              icon: "🧾",
              title: "CONTABILIDAD",
              text: "Monotributo, impuestos, registraciones contables y asesoramiento integral.",
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
                borderRadius: "28px",
                padding: "45px",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  "0 10px 35px rgba(0,0,0,0.4)",
              }}
            >
              <div
                style={{
                  fontSize: "55px",
                  marginBottom: "25px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontSize: "30px",
                  marginBottom: "20px",
                  color: "#fff",
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

      {/* NOSOTROS */}
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
            fontSize: "56px",
            marginBottom: "70px",
          }}
        >
          ¿POR QUÉ ELEGIRNOS?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px,1fr))",
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
              text: "Trayectoria en administración, contabilidad y finanzas.",
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
                  fontSize: "54px",
                  marginBottom: "20px",
                  color: "#fbbf24",
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
                  fontSize: "20px",
                  lineHeight: "1.8",
                  color: "#475569",
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
            marginBottom: "15px",
          }}
        >
          ESTAMOS PARA AYUDARTE
        </h2>

        <p
          style={{
            fontSize: "28px",
            color: "#fbbf24",
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
          padding: "45px 60px",
          textAlign: "center",
          color: "#94a3b8",
        }}
      >
        © 2026 VNO Consulting Group · Todos los derechos reservados.
      </footer>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
};

const socialStyle = {
  color: "#fbbf24",
  textDecoration: "none",
  border: "1px solid #fbbf24",
  borderRadius: "50%",
  width: "42px",
  height: "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
