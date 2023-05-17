import Chat from "@/components/chat";
import "../styles/globals.css";
import Providers from "@/components/providers";

export const metadata = {
  title: "ChatBot",
  description: "Your ChatBot for fantasy & mistery novels",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <Chat />
        <body>{children}</body>
      </Providers>
    </html>
  );
}
