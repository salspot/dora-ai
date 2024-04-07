import React from 'react'
import { Helmet } from "react-helmet"
import favicon from '../../assets/images/dora-ai-logo.png'
const SEO = () => {
    return (
        <div>
            <Helmet link={[
                { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
            ]}>
                <title>Dora AI - $DORA </title>
                <meta name="description" content="Dora AI - Using AI to build a better future" />
                <meta name="og:title" property="og:title" content="Dora AI - Using AI to build a better future"></meta>
                <meta name="twitter:card" content="Dora AI - Using AI to build a better future"></meta>
                <link rel="canonical" href="https://dora-ai.xyz"></link>
                <meta property="og:image" content={favicon} />
            </Helmet>
        </div>
    )
}

export default SEO
