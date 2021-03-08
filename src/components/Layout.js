import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

const Layout = ({children}) => {
    return (
        <div>
            <Head>
                //Google Icon Font
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                //Compiled and minified CSS
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
                //Materialize js
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
                //jQuery
                <script src="https://code.jquery.com/jquery-3.1.0.js" integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk=" crossorigin="anonymous"></script>
            </Head>
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script></div>
    );
}

export default Layout