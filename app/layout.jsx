
import "./globals.css";

export const metadata = {
  title: "JSX Lab — Learn HTML & React",
  description:
    "An interactive reference for HTML elements, JSX syntax, attributes and React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
