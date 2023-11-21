import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import FirebaseAuthProvider from '@/components/FirebaseAuthProvider';
import ClientProvider from '@/components/ClientProvider';
import { Toaster } from '@/components/ui/toaster';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientProvider>
    <html lang="en">
      <body className='flex flex-col min-h-screen'>
        <FirebaseAuthProvider>
          <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
            <Header />
            {children}

            <Toaster />
          </ThemeProvider>
        </FirebaseAuthProvider>
      </body>
    </html>
    </ClientProvider>
  )
};