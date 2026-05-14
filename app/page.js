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
          padding: "20px 60px",
          background: "#020617",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              border: "2px solid #fbbf24",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "#fbbf24",
              fontWeight: "bold",
              background: "#081225",
            }}
          >
            <div style={{ fontSize: "28px" }}>VNO</div>
            <div style={{ fontSize: "10px", letterSpacing: "2px" }}>
              CONSULTING
            </div>
          </div>

          <div>
            <h1
              style={{
                margin: 0,
                color: "#fff",
                fontSize: "34px",
              }}
            >
              VNO
            </h1>

            <p
              style={{
                margin: 0,
                color: "#fbbf24",
                letterSpacing: "3px",
                fontSize: "13px",
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
            fontSize: "18px",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#fbbf24" }}>Inicio</span>
          <span>Servicios</span>
          <span>Sobre nosotros</span>
          <span>Contacto</span>

          <a
            href="https://instagram.com/consultingvno"
            style={{
              color: "#fbbf24",
              textDecoration: "none",
              border: "1px solid #fbbf24",
              borderRadius: "50%",
              width: "42px",
              height: "42px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            IG
          </a>

          <a
            href="https://linkedin.com"
            style={{
              color: "#fbbf24",
              textDecoration: "none",
              border: "1px solid #fbbf24",
              borderRadius: "50%",
              width: "42px",
              height: "42px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            in
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 60px",
          background:
            "linear-gradient(to right, rgba(2,6,23,0.96), rgba(2,6,23,0.75)), url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          {/* LOGO HERO */}
          <div
            style={{
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              border: "3px solid #fbbf24",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "40px",
              background: "rgba(2,6,23,0.6)",
              backdropFilter: "blur(4px)",
            }}
          >
            <h1
              style={{
                color: "#fbbf24",
                fontSize: "72px",
                margin: 0,
              }}
            >
              VNO
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: "24px",
                letterSpacing: "3px",
              }}
            >
              CONSULTING
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "18px",
                color: "#fbbf24",
                letterSpacing: "5px",
              }}
            >
              GROUP
            </p>
          </div>

          <h2
            style={{
              fontSize: "52px",
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            Administración • Contabilidad
            <br />
            <span style={{ color: "#fbbf24" }}>
              • Mercado de Capitales
            </span>
          </h2>

          <p
            style={{
              fontSize: "24px",
              lineHeight: "1.8",
              color: "#e5e7eb",
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
                padding: "18px 40px",
                borderRadius: "12px",
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
                borderRadius: "12px",
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
        style={{
          padding: "100px 60px",
          background:
            "linear-gradient(to bottom, #020617, #081225)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "56px",
            marginBottom: "70px",
            color: "#fff",
          }}
        >
          <span style={{ color: "#fbbf24" }}>NUESTROS</span> SERVICIOS
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "35px",
          }}
        >
          {[
            {
              title: "ADMINISTRACIÓN",
              text: "Organización de procesos, control de gestión, costos, presupuestos y optimización administrativa.",
            },
            {
              title: "CONTABILIDAD",
              text: "Monotributo, impuestos, registraciones contables y asesoramiento integral para emprendedores y PyMEs.",
            },
            {
              title: "MERCADO DE CAPITALES",
              text: "Educación financiera, inversiones, planificación y herramientas para potenciar tus finanzas.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background:
                  "linear-gradient(145deg, rgba(15,23,42,0.9), rgba(30,41,59,0.95))",
                borderRadius: "28px",
                padding: "45px",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "20px",
                  border: "2px solid #fbbf24",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fbbf24",
                  fontSize: "38px",
                  marginBottom: "30px",
                }}
              >
                ✦
              </div>

              <h3
                style={{
                  color: "#fff",
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
        style={{
          backgroundColor: "#f8fafc",
          color: "#020617",
          padding: "100px 60px",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
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
                  fontSize: "50px",
                  color: "#fbbf24",
                  marginBottom: "20px",
                }}
              >
                ✦
              </div>

              <h3
                style={{
                  fontSize: "32px",
                  marginBottom: "15px",
                }}
              >
                {item}
              </h3>

              <p
                style={{
                  color: "#475569",
                  fontSize: "20px",
                  lineHeight: "1.7",
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
            color: "#fff",
            fontSize: "56px",
            marginBottom: "15px",
          }}
        >
          ESTAMOS PARA AYUDARTE
        </h2>

        <p
          style={{
            fontSize: "30px",
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
            gap: "60px",
            flexWrap: "wrap",
            fontSize: "22px",
            color: "#e5e7eb",
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
          backgroundColor: "#020617",
          padding: "50px 60px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          <div>
            <h2 style={{ color: "#fbbf24", marginBottom: "10px" }}>
              VNO Consulting Group
            </h2>

            <p style={{ color: "#9ca3af", maxWidth: "400px" }}>
              Administración, contabilidad y mercado de capitales con enfoque moderno y estratégico.
            </p>
          </div>

          <div>
            <h3 style={{ color: "#fff" }}>Seguinos</h3>

            <p style={{ color: "#9ca3af" }}>@consultingvno</p>
          </div>
        </div>

        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
            color: "#64748b",
          }}
        >
          © 2026 VNO Consulting Group · Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
