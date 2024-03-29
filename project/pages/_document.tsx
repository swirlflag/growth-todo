import Document, { Html, Head, Main, NextScript, } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Nav from "@/components/template/Nav.tsx";

class MyDocument extends Document {
    static async getInitialProps(context) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = context.renderPage;
        try {
            context.renderPage = () => originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props}/>)
            })
            const initialProps = await Document.getInitialProps(context);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            };
        }catch(err) {
            console.error(err);
        }finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                </Head>
                <body>
                    <div id="app">
                        <div id="plate--nav">
                            {/* <Nav/> */}
                        </div>
                        <div id="plate--modal">
                            {/* modal */}
                        </div>
                        <div id="plate--page" >
                            <Main></Main>
                        </div>
                    </div>
                    {/* <script src="https://polyfill.io/v3/polyfill.min.js?features=default%2Ces2015%2Ces2016%2Ces2017%2Ces2018%2Ces2019%2Ces2020%2Ces2021%2Ces2022"/> */}
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;