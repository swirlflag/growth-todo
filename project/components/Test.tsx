import React from "react";

import styled from "styled-components";
import { useCallback , useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { media } from "@/styles/index.ts";
import { requestQuizList } from "@/store/quiz.ts";
import { COUNTER_UP } from "@/store/counter.ts";

const StyledWrap = styled.div`
    color: var(--color);
    @media ${media.md} {
        background-color: #ac1;
    }
`;

const TestComp = () => {
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
        <StyledWrap>
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
                (() => {
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
                })()
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
        </StyledWrap>
    );
};

export default TestComp;