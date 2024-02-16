import { Nunito_Sans } from 'next/font/google';
import '@/shared/styles/globals.css'

const nunito = Nunito_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--nunito-sans',
});

export const metadata = {
  title: 'Movies Recomendations',
  icons: [{ type: 'image/png', url: '/favicon.png' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={nunito.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}