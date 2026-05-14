export const metadata = {
  title: 'VNO Consulting Group',
  description: 'Asesoría Integral',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
