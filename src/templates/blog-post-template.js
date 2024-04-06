import React from 'react'
import {graphql} from "gatsby"
import {Link} from "gatsby"
import Navbar from "../components/App/Navbar";
import Layout from "../components/App/Layout";
import HowCanWeHelpBanner from "../components/Index/HowCanWeHelpBanner";
import Footer from '../components/App/Footer'
import SecondaryPageHeader from "../components/SecondaryPageHeader";
import '../assets/css/blog-homepage.css';
import BlogPostCard from "../components/BlogPostCard";
import {MDXProvider} from "@mdx-js/react";
import {MDXRenderer} from "gatsby-plugin-mdx";
import CaseStudyAside from "../components/case-study-aside";

const shortcodes = {Link} // Provide common components that will be available in the MDX files

export default function BlogHomepage({data, children}) {
  return (
    <>
      <Layout>
        <Navbar className="navbar-fixed-top white-page"/>
        <SecondaryPageHeader smallTitle='Blog' title='Ideas are great. Results are better.' classNames='blog'
                             headlineClassNames='col-xl-8 col-md-8 col-sm-8 col-xs-12 row flex-column'
                             subtext="We're turning our experience into actionable insights on engineering, design, process and strategy."/>

        <section className="case-studies-template post-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 post-block">
                <article className="post">
                  <MDXProvider components={shortcodes}>
                    <MDXRenderer
                      frontmatter={data.mdx.frontmatter}>
                      {data.mdx.body}
                    </MDXRenderer>
                  </MDXProvider>
                </article>
              </div>
              <CaseStudyAside objectives={data.mdx.frontmatter.objectives}
                              technologies={data.mdx.frontmatter.technologies}/>
            </div>
          </div>
        </section>
        <HowCanWeHelpBanner message={"Want to invest in $Dora?"} url={"/tokenomics"} ctaMessage={"start here"}/>
        <Footer/>
      </Layout>
    </>
  )
}
export const query = graphql`
    query($id: String!){
        mdx(id: { eq: $id } frontmatter: { key: { eq: "blog-post" } } ) {
            id
            body
            frontmatter {
                title
                objectives
                technologies
                headerImage {
                    childImageSharp {
                        gatsbyImageData(width: 800)
                    }
                }
            }
        }
    }
`


