import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TypeClassics — Practice Typing with Classic Literature",
  description: "Improve your typing speed and accuracy by retyping passages from classic public domain books. Real-time metrics, progress tracking, and curated literature.",
  keywords: "typing practice, classic literature, typing speed, WPM, typing test, public domain books",
  openGraph: {
    title: "TypeClassics — Practice Typing with Classic Literature",
    description: "Improve your typing speed and accuracy by retyping passages from classic public domain books.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3fe5c44c-399e-48bc-9e70-02273c288503"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
