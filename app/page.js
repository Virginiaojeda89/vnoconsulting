export default function Home() {const services = [{icon: "📊",title: "ADMINISTRACIÓN",text: "Organización estratégica de procesos, control de gestión y optimización administrativa.",},{icon: "📑",title: "CONTABILIDAD",text: "Impuestos, monotributo, registraciones y asesoramiento contable integral.",},{icon: "📈",title: "MERCADO DE CAPITALES",text: "Análisis financiero, inversiones y herramientas para potenciar tu capital.",},];

return (<mainstyle={{background: "#020617",color: "white",fontFamily: "Arial, sans-serif",margin: 0,padding: 0,overflowX: "hidden",}}>{/* NAVBAR /}<navstyle={{position: "fixed",top: 0,width: "100%",zIndex: 1000,background: "rgba(2,6,23,0.92)",backdropFilter: "blur(10px)",borderBottom: "1px solid rgba(255,255,255,0.08)",}}><divstyle={{maxWidth: "1400px",margin: "0 auto",padding: "18px 40px",display: "flex",justifyContent: "space-between",alignItems: "center",}}>{/ LOGO */}<divstyle={{display: "flex",alignItems: "center",gap: "16px",}}><divstyle={{width: "68px",height: "68px",borderRadius: "50%",border: "2px solid #fbbf24",display: "flex",justifyContent: "center",alignItems: "center",flexDirection: "column",background: "#020617",boxShadow: "0 0 18px rgba(251,191,36,0.25)",}}><spanstyle={{color: "#fbbf24",fontSize: "30px",fontWeight: "bold",lineHeight: "1",}}>V

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
          <h1
            style={{
              margin: 0,
              fontSize: "34px",
              lineHeight: "1",
            }}
          >
            VNO
          </h1>

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
          gap: "35px",
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
                fontSize: "17px",
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
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      backgroundImage:
        "linear-gradient(to right, rgba(2,6,23,0.95), rgba(2,6,23,0.65)), url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "160px 40px 100px",
    }}
  >
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "80px",
        flexWrap: "wrap",
      }}
    >
      {/* LOGO GRANDE */}
      <div
        style={{
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          border: "3px solid #fbbf24",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "rgba(2,6,23,0.72)",
          backdropFilter: "blur(6px)",
          boxShadow: "0 0 40px rgba(251,191,36,0.25)",
          flexShrink: 0,
        }}
      >
        <h2
          style={{
            color: "#fbbf24",
            fontSize: "86px",
            margin: 0,
            lineHeight: "1",
          }}
        >
          V
        </h2>

        <h3
          style={{
            margin: 0,
            fontSize: "62px",
            lineHeight: "1",
          }}
        >
          VNO
        </h3>

        <p
          style={{
            margin: 0,
            color: "#fbbf24",
            letterSpacing: "4px",
            fontSize: "15px",
          }}
        >
          CONSULTING GROUP
        </p>
      </div>

      {/* TEXTO */}
      <div style={{ maxWidth: "760px" }}>
        <h1
          style={{
            fontSize: "78px",
            lineHeight: "1.1",
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
            lineHeight: "1.7",
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
    </div>
  </section>

  {/* SERVICIOS */}
  <section
    id="servicios"
    style={{
      padding: "120px 40px",
      background:
        "linear-gradient(to bottom,#020617,#081225)",
    }}
  >
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "64px",
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
            "repeat(auto-fit,minmax(340px,1fr))",
          gap: "35px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              background:
                "linear-gradient(145deg,#081225,#162338)",
              borderRadius: "34px",
              padding: "55px",
              border:
                "1px solid rgba(255,255,255,0.06)",
              boxShadow:
                "0 15px 40px rgba(0,0,0,0.35)",
              transition: "0.3s",
            }}
          >
            <div
              style={{
                fontSize: "78px",
                marginBottom: "28px",
              }}
            >
              {service.icon}
            </div>

            <h3
              style={{
                fontSize: "36px",
                marginBottom: "22px",
              }}
            >
              {service.title}
            </h3>

            <div
              style={{
                width: "80px",
                height: "4px",
                background: "#fbbf24",
                borderRadius: "999px",
                marginBottom: "25px",
              }}
            />

            <p
              style={{
                color: "#d1d5db",
                fontSize: "22px",
                lineHeight: "1.8",
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
          fontSize: "60px",
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

{title: "CONFIANZA",text: "Trabajamos con transparencia, compromiso y atención personalizada.",},{title: "EXPERIENCIA",text: "Soluciones estratégicas adaptadas a emprendedores y PyMEs.",},{title: "CERCANÍA",text: "Acompañamiento profesional constante en cada etapa del proceso.",},{title: "RESULTADOS",text: "Enfoque práctico orientado al crecimiento y la organización financiera.",},

        ].map((item, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "56px",
                color: "#fbbf24",
                marginBottom: "20px",
              }}
            >
              ✦
            </div>

            <h3
              style={{
                fontSize: "30px",
              }}
            
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
    </div>
  </section>

  {/* CONTACTO */}
  <section
    id="contacto"
    style={{
      padding: "120px 40px",
      background:
        "linear-gradient(to right,#020617,#0f172a)",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "64px",
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
      padding: "35px",
      textAlign: "center",
      color: "#94a3b8",
    }}
  >
    © 2026 VNO Consulting Group · Todos los derechos reservados.
  </footer>
</main>

);}
