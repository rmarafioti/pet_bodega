import App_Wrapper from "./_components/App_Wrapper";
import localFont from "next/font/local";

import "./globals.css";

const dinosaurBold = localFont({
  src: "/_fonts/DINosaur-Bold.otf",
});

const rocGroteskLight = localFont({
  src: "/_fonts/RocGrotesk-Light.otf",
});

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
      <body className={`${dinosaurBold} ${rocGroteskLight}`}>
        <App_Wrapper>{children}</App_Wrapper>
      </body>
    </html>
  );
}
