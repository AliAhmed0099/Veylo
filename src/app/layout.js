import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ThemeSelector from "@/components/ThemeSelector";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <body className="min-h-full">
        <ClerkProvider>
          <ThemeSelector />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
