
import Head from 'next/head';
import Header from './../Header';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>El Jefe</title>
        </Head>
        <Header />
        {children}
    </>
)

export default Layout;