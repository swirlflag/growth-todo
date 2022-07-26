import type { NextPage } from 'next'
import Link from "next/link";

const Hello: NextPage = () => {
    return (
        <div>
            hello page
            <br />
            <br />
            <Link href="/"><a>go HOME</a></Link>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    // console.log(process.env.MYDATA);
    return {
        props: {  }
    }
}

export default Hello;