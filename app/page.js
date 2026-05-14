export default function Home() {
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
  
