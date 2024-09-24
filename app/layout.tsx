import "tailwindcss/tailwind.css";

// import { ClerkProvider } from "@clerk/nextjs";
import "../src/globals.css";
import { Header } from "../src/components/Header";
import { Footer } from "@/src/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <ClerkProvider> */}
      <body>
        <Header />
        <main className="min-h-[calc(100vh-85px)] flex flex-col items-center overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
      {/* </ClerkProvider> */}
    </html>
  );
}
