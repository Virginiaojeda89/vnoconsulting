export default function Home() {
  const services = [
    {
      icon: "✦",
      title: "ADMINISTRACIÓN",
      text: "Planificación, organización y optimización de procesos administrativos.",
    },
    {
      icon: "◉",
      title: "CONTABILIDAD",
      text: "Gestión contable, impuestos, monotributo y asesoramiento financiero.",
    },
    {
      icon: "◆",
      title: "MERCADO DE CAPITALES",
      text: "Educación financiera, inversiones y estrategias de crecimiento.",
    },
  ];

  const benefits = [
    {
      title: "CONFIANZA",
      text: "Trabajamos con transparencia, compromiso y atención personalizada.",
    },
    {
      title: "EXPERIENCIA",
      text: "Soluciones adaptadas a emprendedores, profesionales y PyMEs.",
    },
    {
      title: "CERCANÍA",
      text: "Acompañamiento constante en cada etapa del proceso.",
    },
    {
      title: "RESULTADOS",
      text: "Enfoque práctico orientado al crecimiento y la organización.",
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
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          background: "rgba(2,6,23,0.92)",
          padding: "20px 40px",
          zIndex: 1000,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                border: "2px solid #fbbf24",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fbbf24",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              V
            </div>

            <div>
              <h1 style={{ margin: 0, fontSize: "30px" }}>VNO</h1>

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
          </div>

          <div style={{ display: "flex", gap: "30px" }}>
            {["Inicio", "Servicios", "Nosotros", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="inicio"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(to right, rgba(2,6,23,0.96), rgba(2,6,23,0.7)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "140px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              lineHeight: "1.1",
              marginBottom: "25px",
              maxWidth: "900px",
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
              lineHeight: "1.7",
              maxWidth: "760px",
              marginBottom: "40px",
            }}
          >
            Soluciones estratégicas para emprendedores, profesionales y PyMEs
            que buscan crecimiento, organización y respaldo profesional.
          </p>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/543416657721"
              style={{
                background: "#fbbf24",
                color: "#000",
                padding: "16px 34px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
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
          padding: "120px 40px",
          background: "#081225",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "58px",
              marginBottom: "70px",
            }}
          >
            <span style={{ color: "#fbbf24" }}>NUESTROS</span> SERVICIOS
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
                  background: "#111c33",
                  padding: "45px",
                  borderRadius: "28px",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    fontSize: "70px",
                    color: "#fbbf24",
                    marginBottom: "20px",
                  }}
                >
                  {service.icon}
                </div>

                <h3
                  style={{
                    fontSize: "32px",
                    marginBottom: "20px",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "#d1d5db",
                    lineHeight: "1.8",
                    fontSize: "20px",
                  }}
                >
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section
        id="nosotros"
        style={{
          background: "#f8fafc",
          color: "#020617",
          padding: "120px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "58px",
              marginBottom: "70px",
            }}
          >
            ¿POR QUÉ ELEGIRNOS?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(240px,1fr))",
              gap: "40px",
            }}
          >
            {benefits.map((item, index) => (
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
                    marginBottom: "20px",
                  }}
                >
                  ✦
                </div>

                <h3
                  style={{
                    fontSize: "30px",
                    marginBottom: "18px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#475569",
                    lineHeight: "1.8",
                    fontSize: "19px",
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
          padding: "120px 40px",
          background: "#020617",
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
            color: "#d1d5db",
            fontSize: "20px",
          }}
        >
          <span>📩 consultingvno@gmail.com</span>
          <span>📲 +54 9 341 665 7721</span>
          <span>📍 Rosario, Santa Fe</span>
        </div>
      </section>
    </main>
  );
}
