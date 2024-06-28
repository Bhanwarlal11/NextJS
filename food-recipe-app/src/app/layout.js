
import "./globals.css";
import Loading from "./loading";
import { Suspense } from "react";

export const metadata = {
  title: "Food Recipe App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Suspense fallback={<Loading/>}>{children}</Suspense>
      </body>
    </html>
  );
}
