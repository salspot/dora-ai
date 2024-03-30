import React from 'react'
import { Helmet } from "react-helmet"
import image from '../../assets/images/dora.ai.png'
const SEO = () => {
    return (
        <div>
            <Helmet>
                <title>Dora AI - $DORA </title>
                <meta name="description" content="Dora AI - Using AI to build a better future" />
                <meta name="og:title" property="og:title" content="Dora AI - Using AI to build a better future"></meta>
                <meta name="twitter:card" content="Dora AI - Using AI to build a better future"></meta>
                <link rel="canonical" href="https://dora-ai.xyz"></link>
                <meta property="og:image" content={image} />
            </Helmet>
        </div>
    )
}

export default SEO
