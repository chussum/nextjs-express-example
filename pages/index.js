import Link from 'next/link'
import Layout from '../components/Layout';
import Head from 'next/head';

const Index = () => (
    <Layout>
        <Head>
            <title>
                index
            </title>
        </Head>
        <h1>
            next.js
        </h1>
        <h2>
            <Link href="/about">
                <a style={{background: 'black', color: 'white'}}>about</a>
            </Link>
        </h2>
    </Layout>
)

export default Index