import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Elite Cleaning Staff Agency | Premium Recruitment Services',
  description: 'Specialized recruitment agency for cleaning businesses. We build exceptional cleaning teams through expert recruitment, thorough vetting, and perfect cultural matches.',
  keywords: 'cleaning recruitment agency, cleaning staff agency, cleaning team building, cleaning business staffing, professional cleaners recruitment, cleaning staff hiring',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
} 