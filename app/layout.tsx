import "tailwindcss/tailwind.css";

import { ClerkProvider } from "@clerk/nextjs";
import "../src/globals.css";
import { Header } from "../src/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>
          <Header />
          <main className="flex min-h-[calc(100vh-85px)] flex-col items-center justify-between overflow-hidden">
            {children}
          </main>
        </body>
      </ClerkProvider>
    </html>
  );
}
