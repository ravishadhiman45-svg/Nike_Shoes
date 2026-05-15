import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Premium Sneaker Showcase | Next-Gen Footwear',
  description: 'Experience the future of sneaker design with our ultra-premium interactive showcase',
  keywords: 'sneakers, premium footwear, nike, interactive showcase',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-primary text-text-dark overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
