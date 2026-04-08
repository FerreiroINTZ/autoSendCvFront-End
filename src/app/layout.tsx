import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "./(components)/general/main"

export const metadata: Metadata = {
  title: "CV HUB",
  description: "Paginda de listagem das vagas captadas",
  icons: {
    icon: {url: "/icon.png", sizes: "16x16", type: "image/png"}
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
