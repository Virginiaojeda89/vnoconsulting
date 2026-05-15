export default function Home() {
  const services = [
    {
      icon: "📊",
      title: "ADMINISTRACIÓN",
      text: "Organización estratégica de procesos, control de gestión y optimización administrativa.",
    },
    {
      icon: "📑",
      title: "CONTABILIDAD",
      text: "Impuestos, monotributo, registraciones y asesoramiento contable integral.",
    },
    {
      icon: "📈",
      title: "MERCADO DE CAPITALES",
      text: "Análisis financiero, inversiones y herramientas para potenciar tu capital.",
    },
  ];

  return (
    <main
      style={{
        background: "#020617",
        color: "white",
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
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
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "18px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* LOGO */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                border: "2px solid #fbbf24",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                background: "#020617",
                boxShadow: "0 0 14px rgba(251,191,36,0.2)",
              }}
            >
              <span
                style={{
                  color: "#fbbf24",
                  fontSize: "26px",
                  fontWeight: "bold",
                  lineHeight: "1",
                }}
              >
                V
              </span>

              <span
                style={{
                  color: "white",
                  fontSize: "9px",
                }}
              >
                VNO
              </span>
            </div>

            <div>
              <h1
                style={{
                  margin: 0,
                  fontSize: "30px",
                  lineHeight: "1",
                }}
              >
                VNO
              </h1>

              <p
                style={{
                  margin: 0,
                  color: "#fbbf24",
                  letterSpacing: "3px",
                  fontSize: "11px",
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
            }}
          >
            {["Inicio", "Servicios", "Nosotros", "Contacto"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="inicio"
        style={{
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(to right, rgba(2,6,23,0.96), rgba(2,6,23,0.68)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "140px 40px 80px",
        }}
      >
        <div
          style={{
            maxWidth: "1350px",
            margin: "0 auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          {/* LOGO GRANDE */}
          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              border: "3px solid #fbbf24",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              background: "rgba(2,6,23,0.70)",
              backdropFilter: "blur(6px)",
              boxShadow: "0 0 35px rgba(251,191,36,0.18)",
              flexShrink: 0,
            }}
          >
            <h2
              style={{
                color: "#fbbf24",
                fontSize: "58px",
                margin: 0,
                lineHeight: "1",
              }}
            >
              V
            </h2>

            <h3
              style={{
                margin: 0,
                fontSize: "44px",
                lineHeight: "1",
              }}
            >
              VNO
            </h3>

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

          {/* TEXTO */}
          <div style={{ maxWidth: "760px" }}>
            <h1
              style={{
                fontSize: "62px",
                lineHeight: "1.15",
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
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        style={{
          padding: "110px 40px",
          background:
            "linear-gradient(to bottom,#020617,#081225)",
        }}
      >
        <div
          style={{
            maxWidth: "1350px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "54px",
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
                "repeat(auto-fit,minmax(300px,1fr))",
              gap: "30px",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  background:
                    "linear-gradient(145deg,#081225,#162338)",
                  borderRadius: "28px",
                  padding: "42px",
                  border:
                    "1px solid rgba(255,255,255,0.06)",
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.28)",
                }}
              >
                <div
                  style={{
                    fontSize: "60px",
                    marginBottom: "22px",
                  }}
                >
                  {service.icon}
                </div>

                <h3
                  style={{
                    fontSize: "30px",
                    marginBottom: "18px",
                  }}
                >
                  {service.title}
                </h3>

                <div
                  style={{
                    width: "70px",
                    height: "4px",
                    background: "#fbbf24",
                    borderRadius: "999px",
                    marginBottom: "22px",
                  }}
                />

                <p
                  style={{
                    color: "#d1d5db",
                    fontSize: "20px",
                    lineHeight: "1.7",
                  }}
                >
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section
        id="nosotros"
        style={{
          background: "#f8fafc",
          color: "#020617",
          padding: "110px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "52px",
              marginBottom: "65px",
            }}
          >
            ¿POR QUÉ ELEGIRNOS?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "35px",
            }}
          >
            {[
  {
    title: "CONFIANZA",
    text: "Trabajamos con transparencia, compromiso y atención personalizada.",
  },
  {
    title: "EXPERIENCIA",
    text: "Soluciones estratégicas adaptadas a emprendedores y PyMEs.",
  },
  {
    title: "CERCANÍA",
    text: "Acompañamiento profesional constante en cada etapa del proceso.",
  },
  {
    title: "RESULTADOS",
    text: "Enfoque práctico orientado al crecimiento y la organización financiera.",
  },
].map((item, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "52px",
                    color: "#fbbf24",
                    marginBottom: "16px",
                  }}
                >
                  ✦
                </div>

                <h3
                  style={{
                    fontSize: "28px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#475569",
                    fontSize: "18px",
                    lineHeight: "1.7",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        style={{
          padding: "110px 40px",
          background:
            "linear-gradient(to right,#020617,#0f172a)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "56px",
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
          padding: "30px",
          textAlign: "center",
          color: "#94a3b8",
        }}
      >
        © 2026 VNO Consulting Group · Todos los derechos reservados.
      </footer>
    </main>
  );
}
