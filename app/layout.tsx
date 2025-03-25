export const metadata = {
  title: 'Neurodancer',
  description: 'Tu radio electrónica online',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
