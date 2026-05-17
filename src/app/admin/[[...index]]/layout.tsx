export const metadata = {
  title: 'Lara Labs Admin',
  description: 'Sanity Studio for Lara Labs',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
