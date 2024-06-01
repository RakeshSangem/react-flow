import type { Metadata } from "next";
import React from "react";
import Providers from "./providers";
import "@mantine/core/styles.css";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "My App",
  description: "My App is a...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div id="root">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
