import Footer from "@components/Layout/Footer";
import Header from "@components/Layout/Header";
import "@styles/globals.css";
import { Col, Row } from "antd";
import Head from "next/head";

export const metadata = {
  title: {
    default: "Redefining Transportation Together | VPool",
    template: "%s | VPool",
  },
  description:
    "Embark on an innovative journey with VPool to revolutionize transportation, making every ride safer, smarter, and more sustainable form a better tomorrow",
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "google-site-verification": "ZkhL_pKyld4tVcQTvkr5jQdR6HtgrqvgHENQ1Sm-bd8"
  }
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className="max-w-[1365px] my-0 mx-auto">
        <Header />
        <Row justify="center" className="mt-20">
          <Col xs={22}>{children}</Col>
        </Row>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
