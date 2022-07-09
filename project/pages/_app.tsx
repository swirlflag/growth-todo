import "@/styles/test.scss";
import "@/styles/globals.scss";
import Head from "next/head";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps, }: AppProps) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="my growth-todo app" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="keywords" content="TODO, Typescript, Next, React, Redux" />
                <title>Growth TODO</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;
