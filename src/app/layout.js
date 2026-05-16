import App_Wrapper from "./_components/App_Wrapper";

import "./globals.css";

export const metadata = {
  title: "Pet Bodega",
  description: "SEO business information here",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <App_Wrapper>{children}</App_Wrapper>
      </body>
    </html>
  );
}
