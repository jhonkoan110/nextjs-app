import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>My First NextJS App</title>
            </head>
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
