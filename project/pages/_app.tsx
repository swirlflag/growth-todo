import "../styles/globals.css";
// import "@/styles/variables.scss";

import "styles/test.scss";


import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    const a = 1;

	return <Component {...pageProps} />;
}

export default MyApp;
