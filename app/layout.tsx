import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Jayesh - Full Stack Developer",
  description: "I Build Scalable Systems, Automate Workflows and Deliver Seamless User Experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jayesh Sarvaiya",
              url: "https://devjayesh.com",
              sameAs: [
                "https://github.com/jayesh6442",
                "https://linkedin.com/in/devjayesh"
              ],
              description: "I Build Scalable Systems, Automate Workflows and Deliver Seamless User Experiences.",
              KnowsAbout: [
                "Go", "Python", "JavaScript", "TypeScript", "Java", "Docker", "Kubernetes", "AWS", "Github Actions", "Jenkins", "Argo CD"
              ],
              jobTitle: "Backend Developer"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
