import React from 'react'
import Navbar from '../components/App/Navbar'
import Footer from '../components/App/Footer'
import Layout from '../components/App/Layout'
import VideoBanner from '../components/Index/VideoBanner';
import HowCanWeHelpBanner from '../components/Index/HowCanWeHelpBanner';
import InfoBanner from "../components/Index/InfoBanner";
import WhatWeDoModule from "../components/Index/WhatWeDoModule";
import NewCaseStudyDetails, {CaseStudyStyle} from "../components/NewCaseStudyDetails";
import caseStudy from "../content/case-study";
import NewCaseStudyContainer from "../components/NewCaseStudyContainer";
const Home = () => {
  return (
    <Layout>
      <Navbar className="navbar-fixed-top"/>
      <VideoBanner/>
      {/*<HeroBanner/>*/}
      <WhatWeDoModule/>
      <HowCanWeHelpBanner/>

      <NewCaseStudyContainer>
        <NewCaseStudyDetails style={CaseStudyStyle.RIGHT} content={caseStudy.aiTranslator} elementIndex={1}/>
        <NewCaseStudyDetails style={CaseStudyStyle.LEFT} content={caseStudy.supportAgent} elementIndex={2}/>
        <NewCaseStudyDetails style={CaseStudyStyle.RIGHT} content={caseStudy.esap} elementIndex={3}/>
      </NewCaseStudyContainer>
      <InfoBanner/>
      <HowCanWeHelpBanner/>
      <Footer/>
    </Layout>
  )
}

export default Home
