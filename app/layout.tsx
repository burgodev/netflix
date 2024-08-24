import { ClerkProvider } from "@clerk/nextjs";
import "../src/globals.css";
import { Header } from "../src/components/atomic/Header";

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
          <main>{children}</main>
        </body>
      </ClerkProvider>
    </html>
  );
}
