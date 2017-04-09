import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server'

export default class extends Document {
    static getInitialProps ({ renderPage }) {
        const {html, head} = renderPage();
        const styles = flush();

        return { html, head, styles };
    }

    render () {
        return (
            <html>
            <Head>
                <style>{`body { margin: 0 } /* custom! */`}</style>
                <title>next.js</title>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        );
    }
}
