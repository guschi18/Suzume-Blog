import '../../../styles/globals.css';


export const metadata = {
  title: 'Shita-Kiri-Suzume Blog',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="mx-auto">
        {children}
        </body>
    </html>
  )
}
