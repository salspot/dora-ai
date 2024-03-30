import React from 'react'
import { TextScramble } from './TextScramble';
import ClientLogos from './ClientLogos';

const VideoBanner = () => {
    const phrasesToDecode = [
        ' custom trained ai models.',
        ' advanced custom ai support agents.',
        ' ai content translator.',
        ' ai document editor.',
        ' media & content creation.',
        ' machine learning.',
        ' chatbots for online shops & websites.',
        ' crypto & nft marketplaces.',
        ' ai managed twitter accounts.',
    ];

    return (
        <div className="banner video-wrapper">
            <div className="container-fluid">
                <div className="video-blurb">
                    <div className="row">
                        <h1>AI technology. Human focused.</h1>

                        <div className="tagline show-on-desktop ng-isolate-scope">Bringing the power of AI <span className="highlight"> to consumers</span> with
                            <br></br>
                            <span className="textdecode">
                                <TextScramble phrasesToDecode={phrasesToDecode}/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="video-block">
                <div className="video-block-container">
                    <div className="bg-overlay"></div>
                    <video loop autoPlay playsInline muted
                           src="https://scalio-assets.scaliolabs.com/assets/video/scalio-home-hero3-d5d2718c42.mp4"
                           type="video/mp4"
                           reveal="fadeIn"
                           data-sr-id="6"></video>
                </div>
            </div>
        </div>
    )
}

export default VideoBanner
