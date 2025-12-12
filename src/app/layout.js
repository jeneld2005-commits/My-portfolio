import './globals.css';

export const metadata = {
  title: "Jenelle's Portfolio",
  description: "Portfolio of Jenelle Asilo Delloro, aspiring UI/UX Designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
