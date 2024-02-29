import "./globals.css";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        <main className="mt-40">{children}</main>
      </body>
    </html>
  );
}
