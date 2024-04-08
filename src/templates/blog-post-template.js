import React from 'react'
import {graphql} from "gatsby"
import {Link} from "gatsby"
import Navbar from "../components/App/Navbar";
import Layout from "../components/App/Layout";
import HowCanWeHelpBanner from "../components/Index/HowCanWeHelpBanner";
import Footer from '../components/App/Footer'
import SecondaryPageHeader from "../components/SecondaryPageHeader";
import '../assets/css/blog-homepage.css';
import '../assets/css/blog-post.css';
import {MDXProvider} from "@mdx-js/react";
import {MDXRenderer} from "gatsby-plugin-mdx";
import {getImage} from "gatsby-plugin-image";

const shortcodes = {Link} // Provide common components that will be available in the MDX files

export default function BlogHomepage({data, children}) {
  const imageObject = getImage(data.mdx.frontmatter.headerImage.childImageSharp.gatsbyImageData)
  const backgroundImageUrl = imageObject.images.fallback.src;
  const backgroundStyle = {
    backgroundImage: `url("${backgroundImageUrl}")`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'absolute',
    inset: '-150px 0px',
    willChange: 'transform',
    transform: 'translateY(-18.2872px)'
  };


  return (
    <>
      <Layout>
        <Navbar className="navbar-fixed-top"/>
        {/*<SecondaryPageHeader smallTitle='Blog' title={data.mdx.frontmatter.title} classNames='blog'*/}
        {/*                     headlineClassNames='col-xl-8 col-md-8 col-sm-8 col-xs-12 row flex-column'*/}
        {/*                     subtext={data.mdx.frontmatter.shortDescription}/>*/}

        <div style={{position: "relative", overflow: "hidden", width: "100%", minHeight: "750px", height: "100%"}}
             className="ContentFullScreen2_bgImage__4v2g0 contentFullScreen2 react-parallax-content position-relative">
          <div data-testid="layer-0" style={backgroundStyle}></div>
        </div>
        <div className="blog-post-overlay"></div>

        <section className="case-studies-template post-body " style={{marginTop: "-25rem"}}>
          <div className="container blog-post">
            <div className="row post-block">
              <div className="blog-post-header">
                <p className="blog-post-category">{data.mdx.frontmatter.category}</p>
                <h2 className="blog-post-title">{data.mdx.frontmatter.title}</h2>
                <div className="blog-post-meta">
                  <span className="blog-post-meta-item">Author: {data.mdx.frontmatter.author}</span>
                </div>
              </div>
              <hr className="blog-post-horizontal-line"/>
              <article className="post mb-4 mb-lg-5">
                <MDXProvider components={shortcodes}>
                  <MDXRenderer
                    frontmatter={data.mdx.frontmatter}>
                    {data.mdx.body}
                  </MDXRenderer>
                </MDXProvider>
              </article>
            </div>
            {/*<CaseStudyAside objectives={data.mdx.frontmatter.objectives}*/}
            {/*                technologies={data.mdx.frontmatter.technologies}/>*/}
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
  mdx(id:{
    eq: $id
  }
  frontmatter: {
    key: {
      eq: "blog-post"
    }
  }
)
  {
    id
    body
            frontmatter {
                title
                objectives
                technologies
                category
                shortDescription
                author
                headerImage {
                    childImageSharp {
                        gatsbyImageData(width: 800)
                    }
                }
            }
        }
    }
`


