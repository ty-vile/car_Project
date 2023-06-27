import { Footer, Header } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Car Lookup App",
  description: "Car lookup app created with NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
