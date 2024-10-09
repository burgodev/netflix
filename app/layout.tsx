import "tailwindcss/tailwind.css";

// import { ClerkProvider } from "@clerk/nextjs";
import "../src/globals.css";
import { Header } from "../src/components/Header";
import { Footer } from "@/src/components/Footer";
import { ReduxProvider } from "@/src/components/ReduxProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Header />
          <main className="min-h-[calc(100vh-85px)] flex flex-col items-center overflow-hidden">
            {children}
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
