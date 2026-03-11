import { Providers } from "./providers";
import { ColorModeProvider } from "@/components/ui/color-modes" // Added curly braces back
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <ColorModeProvider>
            {children}
          </ColorModeProvider>
        </Providers>
      </body>
    </html>
  );
}