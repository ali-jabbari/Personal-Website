import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en" className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
            <Head/>
            <body>
            <div id="full_nav_portal"></div>
            <div id="backdrop"></div>
            <div id="modal"></div>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
