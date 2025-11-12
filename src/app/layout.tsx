import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Digital logic simulator',
  description:
    'This is a digital logic simulator allowing you to place logic gates and simulate the interaction between them.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
