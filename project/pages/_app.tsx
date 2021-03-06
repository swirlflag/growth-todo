import "@/styles/test.scss";
import "@/styles/globals.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import { useCallback , useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import init from "@/core/init.ts";
import wrapper from "@/store/index.ts";
import { requestQuizList } from "@/store/quiz.ts";
import { COUNTER_UP } from "@/store/counter.ts";

init();
const render = (jsx: Function): JSX => {
    return jsx();
};

const MyApp = ({ Component, pageProps, }: AppProps) => {
    const dispatch = useDispatch();

    const count = useSelector(state => state.counter.value);
    const [ quizList , quizList_status ] = useSelector(state => [state.quiz.quizList, state.quiz.quizList_status]);
    const [inputv, setInputv] = useState(1);

    const upupClick = useCallback(() => {
        dispatch(COUNTER_UP(inputv));
    }, [count, inputv]);

    const quiztest = useCallback(() => {
        dispatch(requestQuizList());
    }, []);

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
            <div>
                hey
                <button onClick={upupClick}>+++</button>
                <p>{count}</p>
                <input type="number" value={inputv} onChange={(e) => setInputv(parseInt(e.target.value) || 0)} />

            </div>
            <button onClick={quiztest}>
                new quiz
            </button>
            {
                render(() => {
                    if (quizList_status.isLoading) {
                        return <div>로딩중...</div>;
                    }
                    if (quizList_status.isFailure) {
                        return (
                            <>
                                <div>로딩 실패</div>
                                <div>Error : {quizList_status.error}</div>
                            </>
                        )
                    }
                })

            }
            {
                quizList.map((quiz) => {
                    return (
                        <div key={ quiz.question}>
                            { quiz.question }
                        </div>
                    )
                })
            }
            {/* <Component {...pageProps} /> */}

        </>
    );
};

export default wrapper.withRedux(MyApp);
