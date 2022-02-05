import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react/cjs/react.development";

import "./Research.scss";
import BibViewer from "./BibViewer";


const ResearchUrl = ({ url }) => {
  if (!!url) {
    return (<a href={url} target="_blank">
      <span className="icon paper-link">
        <FontAwesomeIcon icon={["fas", "link"]}></FontAwesomeIcon>
      </span>
    </a>);
  } else {
    return <></>;
  }
}

function ResearchComponent() {
  return (
    <StaticQuery
      query={graphql`
        {
          allResearchJson(sort: {fields: [order], order: DESC}) {
            nodes {
              authors
              date
              for
              href
              title
              order
              bib
            }
          }
          allAuthorsJson {
            nodes {
              firstName
              lastName
              ref
            }
          }
        }`}
      render={data => {
        const authors = data.allAuthorsJson.nodes;
        const research = data.allResearchJson.nodes;
        console.log(research);
        return (
          <div>
            <h2 className="title">Past Research</h2>
            <div className="table-container">
              <table className="table research-table is-fullwidth">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Authors</th>
                    <th>Date</th>
                    <th>Link</th>
                    <th>Status</th>
                    <th>Bib</th>
                  </tr>
                </thead>
                <tbody>
                  {research.map((research, i) => (
                    <tr key={"research_row_" + i}>
                      <th>{research.title}</th>
                      <td>{research.authors.map((author, i) => {
                        const authorData = authors.find(x => x.ref === author);
                        if (!authorData) return;
                        return authorData.firstName + " " + authorData.lastName
                      }).join(', ')}</td>
                      <td>{research.date}</td>
                      <td>
                        <ResearchUrl url={research.href} />
                      </td>
                      <td>{research.for}</td>
                      <td>
                        <BibViewer 
                          title={research.title}
                          bib={research.bib}></BibViewer>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      }}
    />
  )
}



export default ResearchComponent