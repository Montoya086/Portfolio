export const metadata = {
  title: 'Montoya\'s Portfolio',
  description: 'Web Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
