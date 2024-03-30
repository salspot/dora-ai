import React from 'react';

const NewCaseStudyContainer = ({children}) => {
  return (
    <div className="services">
      <section className="approach ">
        <div className="study-cases">
          <div className="title-block">
            {/*<h6>What we've implemented previously for businesses</h6>*/}
            <h5>case studies</h5>
          </div>
          {children}
        </div>
      </section>
    </div>
  )
}

export default NewCaseStudyContainer;
