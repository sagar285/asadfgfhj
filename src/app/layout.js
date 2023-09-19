import * as React from 'react';
import ThemeRegistry from '@/components/themeregistry/ThemeRegistry';
import Navbar from './Youtubecomponent/Navbar';
import "./globals.css"

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <div>
            <Navbar/>
            {children}
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}
