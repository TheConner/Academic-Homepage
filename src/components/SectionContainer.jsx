import * as React from "react";

import "./SectionContainer.scss";

const SectionContainer = ({ children, color, className, name }) => {
  let styles = {};

  if (!!color) {
    styles['backgroundColor'] = color;
  }

  return (
    <div id={name} style={{backgroundColor: color}}>
      <div className="container section-container">
        <section className="hero" style={{backgroundColor: color}}>
          <div className={"hero-body hero-container " + className}>
            {children}
          </div>
        </section>
      </div>
    </div>
  );
}

export default SectionContainer;