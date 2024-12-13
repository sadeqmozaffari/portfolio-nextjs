import {Geist, Geist_Mono} from 'next/font/google';
import HomeLayoutComponent from '../components/home';
import './globals.css';
import {Metadata} from 'next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// تعریف متا دیتا در اینجا
export const metadata: Metadata = {
  title: 'Sadeq Mozaffari Portfolio Website', // عنوان سایت
  description: 'Welcome to my awesome Next.js app', // توضیحات سایت
  keywords:
    'Welcome to the portfolio website of Sadeq Mozaffari, showcasing web development projects and skills.', // کلمات کلیدی
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div>
          <HomeLayoutComponent child={children} />
        </div>
      </body>
    </html>
  );
}
