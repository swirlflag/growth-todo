import { useState, useEffect, useCallback } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';
import Link from "next/link";
import Image from 'next/image'
import styled from "styled-components";

import TestComp from '@/components/Test.tsx';
import Checkbox from "@/components/atom/Checkbox.tsx";

const StyledPageHome = styled.div`
    height: 100%;
`;

interface TodoItem {
    solved: boolean,
    title: string,
    content?: string,
    date?: string,
}

interface TodoDay extends Array<TodoItem> {}

const fakeData:TodoDay = [
    {
        solved: true,
        title: "UI 만들기",
    },
    {
        solved: false,
        title: "컴포넌트 나누기",
    },
    {
        solved: false,
        title: "데이터를 api로 변경하기",
    },
];


const PageHome: NextPage = () => {
    const [data, setData] = useState(fakeData);

    const toggleSolved = useCallback((value, index) => {
        const newData = [...data];
        newData[index].solved = value;
        setData(newData);
    }, [data]);

    return (
        <StyledPageHome className="page page--home layout">
            <div className="tododay">
                <div>
                    Clear :&nbsp;
                    {
                        (() => {
                            const clearData = data.filter((c) => c.solved);
                            const percentage = parseInt(clearData.length / data.length * 100,10);
                            return `${clearData.length}/${data.length} (${percentage}%)`;
                        })()
                    }
                </div>
                <div className="tododay__list">
                    {
                        fakeData.map((data,idx) => {
                            const { solved, title } = data;
                            return (
                                <Checkbox
                                    key={`${idx}-${title}`}
                                    solved={solved}
                                    title={title}
                                    onChange={(value) => { toggleSolved(value,idx)} }
                                />
                            );
                        })
                    }
                </div>
            </div>
        </StyledPageHome>
    );
};

export const getServerSideProps = async (context) => {
    // console.log(process.env.MYDATA);
    return {
        props: {  }
    }
}

export default PageHome;
