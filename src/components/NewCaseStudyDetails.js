import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import {graphql, Link, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image";

const NewCaseStudyDetails = ({style = CaseStudyStyle.LEFT, content = {}, elementIndex}) => {
  const {title, description, accordionList, slug, imgSrc, imgAlt} = content;
  const caseStudyImage = getImage(imgSrc)
  console.log('caseStudyImage', imgSrc, caseStudyImage)


  // styleClasses holds styles for right and left variations. Each list holds a set of classes for different elements in the page.
  const styleClasses = {
    right: ['col-lg-4 order-lg-last top', 'col-lg-8'],
    left: ['col-lg-4 top', 'col-lg-8']
  }

  if (!content.title) {
    return '';
  }

  const accordionItems = accordionList && accordionList.map((item, index) => {
    return (
      <Accordion.Item key={elementIndex?.toString() + index.toString()}
                      eventKey={elementIndex?.toString() + index.toString()}>
        <Accordion.Header>{item.title}</Accordion.Header>
        <Accordion.Body>
          {item.body}
        </Accordion.Body>
      </Accordion.Item>
    );
  })

  return (
    <article className="row discovery">
      <div className={styleClasses[style][0]}>
        <div className={`block-text ${style}`}>
          < h3>< small> < /small>{title}</h3>
          <p>{description}</p>

          <Accordion flush alwaysOpen>
            {accordionItems}
          </Accordion>
          {/*<div className="case-study-item-cta">*/}
          {/*  <Link*/}
          {/*    to={slug}*/}
          {/*    activeClassName="active"*/}
          {/*    className="default-btn">See more</Link>*/}
          {/*</div>*/}
        </div>
      </div>
      <div className={styleClasses[style][1]}>
        <div className="block-image">
          <div className="bg-overlay"></div>
            <img className="case-study-image" alt={imgAlt} src={imgSrc}></img>
        </div>
      </div>
    </article>
  )
}

export const CaseStudyStyle = {
  LEFT: 'left',
  RIGHT: 'right'
}
export default NewCaseStudyDetails
