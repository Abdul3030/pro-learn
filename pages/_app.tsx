import '../styles/globals.css';
import 'katex/dist/katex.min.css';
import Layout from '../component/Layout';

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp;
