
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layouts";
const Index=()=>(
    <Layout mainTitle="my title" footer={`Copyright ${ new Date().getFullYear()}`}>
    <Head>
        <title>homepage</title>
    </Head>
        
        <h1>hellow</h1>
        <Link href="/about">
        <a>About</a>
        </Link>
        <p>
            Do sint magna et est velit eu. Cillum aute sunt eiusmod eu sit voluptate do ut dolor. Labore et in veniam irure magna ad laboris veniam pariatur non enim aliqua. Cupidatat eu sit aliquip in.
        </p>
    </Layout>
);
export default Index;