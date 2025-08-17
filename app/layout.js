export const metadata = {
  title: "XJD Financial",
  description: "Insurance. Discipline. Data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
