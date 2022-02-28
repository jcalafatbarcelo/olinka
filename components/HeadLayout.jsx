import Head from 'next/head'

export default function HeadLayout( { children, title, descr  } ) {
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={descr} />
                <link rel="icon" href="/favicon.ico" />
                {children}
        </Head>
        </>
    )
}
