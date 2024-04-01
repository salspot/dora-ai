import React from "react";
import infoBannerDefaultImg from '../../assets/images/info-banner-default.jpg'

const InfoBanner = () => {
    return (
        <section className="module dark whatwecreate ">
            <div className="container">
                <div className="block text-left">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 left">
                            <div className="title">What we're creating</div>
                            <h3 className="">Bringing our AI experience to the blockchain</h3>
                            <div className="blurb">
                                We are bringing new use cases to the crypto community through our utility token $Dora: AI generated content, AI chatbots, AI translation services and more.

                                <br/>
                                <br/>
                                Leveraging latest software design practices we plan to build chatbot integrations with well known platforms:
                                Shopify, Slack, Facebook Messenger, Whatsapp, X.com and more.
                            </div>
                            {/*<div className="cta-button">*/}
                            {/*    <a className="btn action-btn row" aria-label="Our Contact Page" href="/whitepaper">Let's*/}
                            {/*        Inspire</a>*/}
                            {/*</div>*/}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 right">
                            <div>&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-container">
                <div>
                    <div className="bg-overlay"></div>
                    <img className="hero-image" alt="Scalio Creative"
                         src={infoBannerDefaultImg}/>
                </div>
            </div>
        </section>
    )
}

export default InfoBanner

