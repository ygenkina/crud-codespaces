/* eslint-disable @next/next/no-page-custom-font */
import React, { useState } from "react";
import Head from "next/head";
import { SessionProvider } from "@inrupt/solid-ui-react";
import { Container } from "reactstrap";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const [containerUrl, setContainerUrl] = useState("");

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SessionProvider>
        <Navbar containerUrl={containerUrl} />
        <Container className="flex-shrink-0">
          <Component
            {...pageProps}
            containerUrl={containerUrl}
            setContainerUrl={setContainerUrl}
          />
        </Container>
        <Footer />
      </SessionProvider>
    </>
  );
}

export default MyApp;
