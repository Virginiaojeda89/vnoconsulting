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
              marginBottom: "18px",
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
  </div>
</section>
