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
          padding: "18px 50px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              border: "2px solid #fbbf24",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#020617",
            }}
          >
            <span
              style={{
                color: "#fbbf24",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              V
            </span>

            <span
              style={{
                color: "white",
                fontSize: "10px",
              }}
            >
              VNO
            </span>
          </div>

          <div>
            <h2
              style={{
                margin: 0,
                fontSize: "34px",
                lineHeight: "1",
              }}
            >
              VNO
            </h2>

            <p
              style={{
                margin: 0,
                color: "#fbbf24",
                letterSpacing: "4px",
                fontSize: "12px",
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
            gap: "30px",
            alignItems: "center",
            fontSize: "17px",
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
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          padding: "140px 60px 80px",
          backgroundImage:
            "linear-gradient(to right, rgba(2,6,23,0.96), rgba(2,6,23,0.70)), url('https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          {/* LOGO HERO */}
          <div
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              border: "3px solid #fbbf24",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: "35px",
              background: "rgba(2,6,23,0.55)",
              backdropFilter: "blur(5px)",
            }}
          >
            <h1
              style={{
                color: "#fbbf24",
                fontSize: "54px",
                margin: 0,
                lineHeight: "1",
              }}
            >
              V
            </h1>

            <h2
              style={{
                margin: 0,
                fontSize: "42px",
                lineHeight: "1",
              }}
            >
              VNO
            </h2>

            <p
              style={{
                margin: 0,
                color: "#fbbf24",
                letterSpacing: "3px",
                fontSize: "12px",
              }}
            >
              CONSULTING GROUP
            </p>
          </div>

          <h1
            style={{
              fontSize: "58px",
              lineHeight: "1.2",
              marginBottom: "25px",
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
              fontSize: "24px",
              lineHeight: "1.7",
              marginBottom: "40px",
              maxWidth: "650px",
            }}
          >
            Soluciones estratégicas para emprendedores, profesionales y PyMEs
            que buscan crecimiento, organización y respaldo profesional.
          </p>

          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/543416657721"
              style={{
                background: "#fbbf24",
                color: "#000",
                padding: "16px 34px",
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
                padding: "16px 34px",
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
        id="servicios"
        style={{
          padding: "100px 60px",
          background:
            "linear-gradient(to bottom,#020617,#081225)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "52px",
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
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
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
              text: "Monotributo, impuestos y asesoramiento integral.",
            },
            {
              icon: "📈",
              title: "MERCADO DE CAPITALES",
              text: "Educación financiera e inversiones.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background:
                  "linear-gradient(145deg,#0f172a,#1e293b)",
                borderRadius: "24px",
                padding: "40px",
                border:
                  "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: "52px",
                  marginBottom: "20px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "18px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#d1d5db",
                  fontSize: "19px",
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
        id="nosotros"
        style={{
          background: "#f8fafc",
          color: "#020617",
          padding: "100px 60px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "54px",
            marginBottom: "70px",
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
            "CONFIANZA",
            "EXPERIENCIA",
            "CERCANÍA",
            "RESULTADOS",
          ].map((item, index) => (
            <div key={index}>
              <div
                style={{
                  color: "#fbbf24",
                  fontSize: "52px",
                  marginBottom: "15px",
                }}
              >
                ✦
              </div>

              <h3
                style={{
                  fontSize: "28px",
                }}
              >
                {item}
              </h3>

              <p
                style={{
                  color: "#475569",
                  fontSize: "18px",
                  lineHeight: "1.7",
                }}
              >
                Atención personalizada y soluciones profesionales.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        style={{
          padding: "100px 60px",
          background:
            "linear-gradient(to right,#020617,#0f172a)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "20px",
          }}
        >
          ESTAMOS PARA AYUDARTE
        </h2>

        <p
          style={{
            color: "#fbbf24",
            fontSize: "28px",
            marginBottom: "50px",
          }}
        >
          Hacemos simple lo que parece complicado.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
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
          background: "#020617",
          borderTop:
            "1px solid rgba(255,255,255,0.08)",
          padding: "35px",
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
