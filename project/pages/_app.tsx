import "@/styles/reset.scss";
import "@/styles/globals.scss";
import "@/styles/test.scss";
import { useState, useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import init from "@/core/init.ts";
import wrapper from "@/store/index.ts";

init();

const MyApp = ({ Component, pageProps, }: AppProps) => {

    const [showChild, setShowChild] = useState(false);

    // https://stackoverflow.com/questions/71706064/react-18-hydration-failed-because-the-initial-ui-does-not-match-what-was-render
    useEffect(() => {
        setShowChild(true);
        // dispatch(loadMyInfoAction());
    }, []);

    if (!showChild) {
        return null;
    }

    if (typeof window === "undefined") {
        return <>loading..</>;
    }

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

export default wrapper.withRedux(MyApp);
