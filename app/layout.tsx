import { Metadata } from "next";

import "#/app/global.css";

export const metadata = {
  title: "Next.js + StyleX playground",
  description: "Hello",
} satisfies Metadata;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
