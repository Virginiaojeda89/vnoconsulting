export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial',
      padding: '60px',
      background: '#0f172a',
      color: 'white',
      minHeight: '100vh'
    }}>
      <h1 style={{fontSize:'60px'}}>
        VNO Consulting Group
      </h1>

      <h2 style={{color:'#fbbf24'}}>
        Administración · Contabilidad · Mercado de Capitales
      </h2>

      <p style={{marginTop:'30px', fontSize:'22px'}}>
        Soluciones profesionales para PyMEs,
        emprendedores y particulares.
      </p>

      <div style={{marginTop:'40px'}}>
        <a
          href="https://wa.me/543416657721"
          style={{
            background:'#fbbf24',
            color:'#000',
            padding:'15px 30px',
            borderRadius:'10px',
            textDecoration:'none',
            fontWeight:'bold'
          }}
        >
          WhatsApp: 341 665 7721
        </a>
      </div>
    </div>
  )
}
