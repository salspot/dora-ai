import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Navbar className="navbar-fixed-top white-page"/>
      <header className="header legal">
        <div className="container">
          <div className="row headline">
            <div className="col-lg-9 col-md-10 col-sm-12 col-centered">
              <div className="row">
                <div className="title">Dora
                </div>
                <h1 className="page-type">Whitepaper</h1>
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
                <h3>Introduction to $Dora token<br/>&nbsp;</h3>
                <p>
                  Welcome to the world of Dora, where cutting-edge AI technologies meet blockchain innovation to
                  revolutionize the way we interact with artificial intelligence. Dora introduces its native token,
                  designed to serve as the backbone of our ecosystem, facilitating seamless access to AI services,
                  incentivizing user participation, and driving growth and innovation in the AI industry.
                </p>
                <p>
                  The $Dora token ($DORA) is an ERC-20 utility token built on the BSC blockchain, designed to
                  power our AI platform and reward users for their contributions. The token serves as a medium of
                  exchange, enabling users to access AI services, pay for transactions, and participate in our staking
                  program to earn rewards.
                </p>


                <h3>Purpose and Vision<br/>&nbsp;</h3>
                <p>At Dora, our mission is to democratize access to AI technologies and empower individuals and
                  businesses to leverage the power of artificial intelligence for various applications. We envision a
                  future where AI solutions are accessible, affordable, and adaptable to diverse needs and industries.
                  With the $Dora token, we aim to create a decentralized ecosystem that fosters collaboration,
                  innovation, and value creation in the AI space.
                </p>
                <p>Leveraging our experience providing AI services for businesses in real use case scenarios, we want to
                  enable everyone to harness the power of AI. Our mission is to bring AI technology to everyone's use,
                  ensuring that individuals and businesses of all sizes can benefit from the transformative capabilities
                  of artificial intelligence.
                </p>

                <h3>Token Overview<br/>&nbsp;</h3>

                <p>The $Dora token operates on the Binance Smart Chain (BSC), chosen for its robust infrastructure,
                  high transaction throughput, low fees, and extensive network of projects and users.
                  Leveraging BSC's liquidity and market capitalization, $Dora aims to achieve widespread adoption and
                  liquidity, ensuring seamless integration into the broader blockchain ecosystem.</p>

                <p>Our ERC-20 compliant token features a simple and efficient contract design, ensuring compatibility
                  with existing wallets, exchanges, and DeFi protocols. Upon launch, ownership of the token contract
                  will be renounced, providing transparency and decentralization.
                  Integration with Pancakeswap allows for seamless liquidity provisioning and trading on decentralized
                  exchanges.</p>


                <h3>Tokenomics<br/>&nbsp;</h3>
                <p>The $Dora tokenomics model is designed to balance the interests of stakeholders while fostering
                  long-term sustainability and growth. Token distribution includes allocations for token sale, ecosystem
                  growth, team members, listings on decentralized and centralized exchanges, staking rewards, community
                  incentives, marketing initiatives, and advisor partnerships. Vesting mechanisms ensure responsible
                  token
                  distribution and alignment of incentives among team members and stakeholders.</p>
                <ul>
                  <li>Number of total tokens: 1 billion</li>
                  <li>Buy/Sell tax: 1% (check our tokenomics page where we go into detail on how we're going to use this
                    tax)</li>
                  <li>No minting, no mining and no inflation.</li>
                </ul>

                <p>We have a dedicated public document for our tokenomics, make sure to visit it for more details: <Link
                  to="/tokenomics/">Tokenomics</Link></p>
                <br/>
                <StaticImage src={"../assets/images/token-allocation.png"}></StaticImage>
                <br/>
                <br/>

                <h3>Utility and Use Cases<br/>&nbsp;</h3>
                <p>
                  The $Dora token serves as a utility token within our ecosystem, providing holders with access to a
                  range of AI services and platform features. Token holders may utilize $Dora tokens for AI
                  translation
                  services, customer support solutions, instruction manual assistance, sentiment analysis tools, and
                  cryptocurrency market insights. Additionally, token holders may receive discounts, rewards, and
                  exclusive benefits when utilizing Dora services.
                </p>

                <ul>
                  <li>Access to AI Services: Holders of Dora.ai tokens may use them to access AI services provided by
                    the
                    Dora.ai platform, such as content generation, natural language processing, content translation and
                    data analysis tools.
                  </li>
                  <li>Incentives and Rewards: Dora.ai tokens may be used to incentivize certain behaviors within the
                    ecosystem, such as contributing data, participating in research studies, or providing feedback on AI
                    models. Token holders may receive rewards or incentives in exchange for their contributions.
                  </li>
                  <li>Discounts and Benefits: Holders of Dora.ai tokens may receive discounts or special benefits when
                    using
                    AI services or participating in platform activities. These benefits could include reduced fees,
                    priority
                    access to services, or exclusive access to certain features.
                  </li>
                </ul>

                <p>Overall, utility tokens like Dora.ai serve to align incentives within a blockchain ecosystem,
                  incentivize participation and contribution, and provide tangible benefits to users who engage with the
                  platform.
                </p>

                <h3>Roadmap and Future Initiatives<br/>&nbsp;</h3>
                <p>Our roadmap outlines a strategic vision for the development and expansion of the Dora ecosystem.
                  Planned initiatives include the launch of AI-powered translation services, expansion into new markets
                  and industries, integration with social media platforms, and the development of innovative AI
                  applications. Community feedback and collaboration drive our continuous evolution and improvement,
                  ensuring that Dora remains at the forefront of AI innovation.
                </p>

                <p>Below is short list of items we need to accomplish before we tackle our innovative roadmap:</p>
                <ul>
                  <li>Prepare necessary documentation and legal requirements for listing on exchange platforms, ensuring
                    compliance with regulatory standards and guidelines.
                  </li>
                  <li>Establish communication channels with exchange representatives to initiate discussions and express
                    interest in listing the $Dora token.
                  </li>
                  <li>Explore strategic partnerships and collaborations with reputable decentralized exchanges (DEXs)
                    and centralized exchanges (CEXs) to facilitate the listing process.
                  </li>
                  <li>Negotiate with launchpads for a possible public sale of the $Dora token.</li>
                  <li>Create liquidity pools on DEXs.</li>
                </ul>

                {/*<h3>Future Initiatives<br/>&nbsp;</h3>*/}

                <h4>Enhancing Token Utility: Introducing Staking Functionality</h4>
                <p>we are excited to announce that we will be implementing staking functionality for the Dora.ai token.
                  Staking provides an opportunity for token holders to earn rewards by participating in network
                  validation or governance activities, thereby contributing to the security and decentralization of the
                  ecosystem. This initiative aligns with our commitment to enhancing token utility and incentivizing
                  community engagement. Stay tuned for updates as we work towards implementing staking and further
                  enhancing the value proposition of the Dora.ai token.</p>


                <h4>Generate AI Videos with SORA</h4>
                <p>Generate AI Videos with SORA: Leveraging the power of AI and the $Dora token, we will collaborate
                  with
                  SORA to enable users to generate AI videos seamlessly. Users can utilize $Dora tokens to access
                  SORA's
                  advanced video generation technology, creating engaging and personalized videos for various
                  purposes.</p>


                <h4>Public Dora Translator</h4>
                <p> With the $Dora token, users can unlock the public Dora translator,
                  allowing them to translate their website content into multiple languages simultaneously. This feature
                  enables businesses and individuals to expand their reach and engage with a global audience
                  effectively.</p>

                <p>Below you can see a diagram for the Dora AI Content Translator and how the translation process
                  works</p>
                <StaticImage src={"../assets/images/dora-ai-translator-diagram.png"}></StaticImage>

                <h4>Public Dora Book Translator</h4>
                <p>We are working on the concept of the Public Dora Book Translator, which will enable users to
                  translate books into multiple languages using $Dora tokens. By uploading text-based books, users can
                  receive token-cost estimates for translation, promoting literature accessibility on a global
                  scale.</p>


                <h4>Version 1.0 of Dora Twitter Agent </h4>
                <p>We are planning the development of Version 1.0 of the Twitter Agent Dora, aimed at promoting our
                  services through crypto, use case, and blockchain content on Twitter. This agent, powered by AI, aims
                  to drive awareness and adoption of our platform.</p>

                <p>Below you can see a diagram for the Dora AI Twitter agent and how it will work:</p>
                <StaticImage src={"../assets/images/dora-twitter-agent.png"}></StaticImage>

                <h4>Dora Smarter Everyday Agent</h4>
                <p>We aspire to create the Dora Smarter Everyday Agent, an AI companion that shares motivational
                  quotes and insights from self-development books. This initiative, aims to
                  increase our reach into more spheres of interest while inspiring and empowering users to achieve their
                  goals.</p>

                <p>We want to enable this agent to create content for other platforms like instagram and facebook to
                  expand our reach and increase the community size</p>

                <h4>Chatbot Integrations</h4>
                <p>As part of our future initiatives, we are excited to unveil our plans for chatbot integrations across
                  various platforms. Leveraging AI technology and the Dora.ai token, we aim to create a chatbot agent
                  accessible on multiple platforms:
                  <ul>
                    <li>Shopify</li>
                    <li>Wix.com</li>
                    <li>Telegram</li>
                    <li>Whatsapp</li>
                    <li>Facebook Messenger</li>
                    <li>Wordpress</li>
                    <li>Slack</li>
                  </ul>
                  By integrating chatbots into these platforms, we aim to expand the reach and impact of Dora.ai,
                  bringing AI-powered solutions to a
                  broader audience and driving innovation in the AI space.
                </p>

                <h4>Ongoing Exploration: Investing in Token Adoptability</h4>
                <p>We are actively exploring opportunities to enhance token adoptability through partnerships, use case
                  development, and community engagement. While these initiatives are still in the early stages, we are
                  committed to driving token utility and accessibility in the future.</p>

                <p>The best use cases are the ones needed the most. That's why we will add a page on our website where
                  token holders can add and vote
                  project ideas for the future.</p>
                <p>Based on these ideas we will create different channels for collaborating on existing platforms like:
                  slack or discord to facilitate colaboration
                  and progress sharing. We will incentivise this behaviour with rewards from our Community Rewards pool
                  and to ensure project success we will assign "champions" for the project. The role of a "champion" is
                  not to work the hardest, but to oversee the big picture, to check on progress and to maintain
                  everyone in sync with the project's roadmap.</p>


                <h4>Roadmap Note</h4>
                <p>Based on our experience developing AI services we've learned a lot and we know that what is on our
                  current roadmap is
                  achievable and not something that we are strangers of. Based on the things we've done in the past we
                  are confident we can deliver them iteratively.</p>
                <p>While these projects are currently in the early stages and have not yet been deployed, they
                  represent our commitment to leveraging AI technology and $Dora tokens to empower users and drive
                  innovation in the AI industry.</p>

                <p>
                  Join us on our journey to unlock the full potential of artificial intelligence with the $Dora token.
                  Together, we can shape a future where AI is accessible, inclusive, and transformative for all.
                </p>
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
