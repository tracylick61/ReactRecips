import { Header } from "../components/Header";
import "./globals.css";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "My project recipes",
  description: "Tasty and simple recipes on every day",
  icons: {
    icon: "/logo1.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main className="container mx-auto my-10 content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
