import { Inter } from "next/font/google"
import "./globals.css" // Your global styles
import Navbar from "@/components/navbar"
import Footer from "@/components/footer" // Assuming you have this
import { Toaster } from "@/components/ui/toaster.jsx" // Import the shadcn/ui Toaster (now .jsx)
import AnimatedCursor from "@/components/animated-cursor"
import StickyChatButtons from "@/components/chat/StickyChatButtons";
import { ThemeProvider } from "@/components/theme-provider" // Ensure this path is correct
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

// Inter for body text, buttons, UI
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap"
})

export const metadata = {
    title: "Tranquility Cybersecurity Services",
    description: "Advanced cybersecurity solutions to protect your business from evolving threats",
    icons: {
        icon: [{ url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trl1-yUkmnxxlWeW3QKX4UWu8CusXl0uQnI.png" }],
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            {/* Hedvig Letters Serif for headlines */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Hedvig+Letters+Serif:opsz@12..24&display=swap" rel="stylesheet" />
            <style
                dangerouslySetInnerHTML={{
                    __html: `
            @font-face {
              font-family: 'Sans Forgetica';
              src: url('/fonts/sans-forgetica.woff2') format('woff2');
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }
          `,
                }}
            />
        {/* Google tag (gtag.js) */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-424BTVQ529"></script>
            <script>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-424BTVQ529');
              `}
            </script>
        </head>
        <body
            className={`${inter.variable} font-sans min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
        >
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <Toaster />
            {/*<AnimatedCursor />*/}
            <StickyChatButtons />
        </ThemeProvider>
        <SpeedInsights/>
        <Analytics/>
        </body>
        </html>
    )
}
