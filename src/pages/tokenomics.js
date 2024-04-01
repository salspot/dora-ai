import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import {StaticImage} from "gatsby-plugin-image";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Navbar className="navbar-fixed-top white-page"/>
      <header className="header legal">
        <div className="container">
          <div className="row headline">
            <div className="col-lg-9 col-md-10 col-sm-12 col-centered">
              <div className="row">
                <div className="title">Dora.ai
                </div>
                <h1 className="page-type">Tokenomics</h1>
                <div className="skayline"></div>
              </div>
            </div>
          </div>
        </div>
      </header>


      <section className="post-body legal">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-10 col-sm-12 col-centered">
              <div className="version">v1.0.0
              </div>
            </div>
            <div className="col-lg-9 col-md-10 col-sm-12 col-centered">
              <article className="post">
                <p>We provide a detailed overview of ou utility token $DORA, and its distribution.
                  <br/>&nbsp;</p>
                <h3>Total Supply and Token Allocation<br/>&nbsp;</h3>
                <p>
                  <strong>Total Supply:</strong> The total number of $DORA tokens is 1 000 000 000 (one billion), with a
                  circulating supply of one billion tokens.
                </p>
                <p>
                  <strong>Tax:</strong> There is a 1% tax tax on buying and selling $Dora tokens. This tax is used to
                  fill the staking pool making sure there is enough tokens for rewards.
                  <br/>
                  The tax is not applicable when buying and selling tokens on Centralised Exchanges - CEXs.
                </p>
                <p>
                  <strong>Inflation:</strong> No inflation, minting or mining. The total supply of $Dora tokens is
                  fixed.
                </p>

                <h3>
                  <strong>Token Allocation:</strong>
                </h3>
                <br/>


                <StaticImage src={"../assets/images/token-allocation.png"}></StaticImage>

                <br/>

                <ul>
                  <li><strong>Token Sale</strong> - 20% Will be sold in the token sale/IDO</li>
                  <li><strong>Foundation</strong> - 20% This is the company's vault. These funds will be used to invest
                    in the infrastructure of our projects, but also when opportunity presents itself we will use these
                    funds to make possible acquisitions of startups.
                  </li>
                  <li><strong>Team Members</strong> - 20% Will be gradually released to the team members and founders.
                  </li>
                  <li><strong>Exchange Listing</strong> - 10% We will use these funds to offer liquidity to exchanges.
                  </li>
                  <li><strong>Staking Rewards</strong> - 10% These funds will be used to reward the holders of staked
                    tokens.
                  </li>
                  <li><strong>Community Rewards</strong> - 10% Funds used for rewarding the people in our community.
                  </li>
                  <li><strong>Marketing</strong> - 5% These funds will be used to promote the project.</li>
                  <li><strong>Advisors</strong> - 5% These funds will be gradually released to our advisors.</li>
                </ul>

                <p>We are strong believers in using these funds wisely. As we have no minting, mining or inflation in
                  the $Dora token we think of them as precious assets that we value.</p>


                <h3>Projects economy<br/></h3>
                <p>Many of the projects we'll be launching will be generating $Dora tokens, which we will be using as
                  follows:</p>
                <ul>
                  <li>to support our infrastructure costs</li>
                  <li>to maintain the projects</li>
                  <li>to develop and launch new products</li>
                </ul>

                <h3>You can buy $Dora tokens here:<br/></h3>
                <ul>
                  <li>public ido - <strong>to be done</strong></li>
                  <li>uniswap/pancakeswap - <strong>to be done</strong></li>
                  <li>CEXs - <strong>to be done</strong></li>
                </ul>

                Token contract: <strong>0x0</strong>

                TODO update token contract
                TODO update with vesting schedule
              </article>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </Layout>
  )
}

export default PrivacyPolicy;
