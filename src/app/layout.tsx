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
  title: 'Zcruitment | Guaranteed Cleaning Staff Recruitment',
  description: 'Guaranteed placement of cleaning staff within 7 days. Zcruitment specializes in recruiting exceptional cleaning teams through expert vetting and perfect cultural matches.',
  keywords: 'cleaning recruitment agency, cleaning staff recruitment, cleaning team building, cleaning business staffing, professional cleaners recruitment, cleaning staff hiring, Zcruitment',
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