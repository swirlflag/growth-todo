import type { NextPage } from 'next'
import Head from 'next/head';
import Link from "next/link";
import Image from 'next/image'
import TestComp from '@/components/Test.tsx';

import styled from ""

const Home: NextPage = () => {
    return (
        <div >
            index page
            <br />
            <br />
            <Link href="/hello">
                <a>GO HELLO</a>
            </Link>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    // console.log(process.env.MYDATA);
    return {
        props: {  }
    }
}

export default Home;
