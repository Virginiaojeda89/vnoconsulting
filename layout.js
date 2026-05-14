export const metadata = {
  title: "VNO Consulting Group",
  description: "Asesoría integral en administración, contabilidad y mercado de capitales",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
