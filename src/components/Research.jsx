import * as React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react/cjs/react.development";

import "./Research.scss";

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
  const [researchData, setResearchData] = useState(null)

  let researchBody = <p>Loading</p>;
  return researchBody;

  useEffect(() => {
    if (researchData == null) {
      const promises = [
        fetch(
          "json/research.json").then(res => res.json()),
        fetch("json/authors.json").then(res => res.json())
      ]
      Promise.all(promises)
        .then((data) => {
          setResearchData({
            research: data[0].sort((a, b) => {
              if (a['id'] < b['id']) return 1;
              if (a['id'] > b['id']) return -1;
              return 0;
            }),
            authors: data[1]
          })
        })
    }
  }, [researchData])

  if (researchData != null) {
    researchBody = <table className="table research-table">
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
        {researchData.research.map((research, i) => (
          <tr>
            <th>{research.title}</th>
            <td>{research.authors.map((author, i) => {
              const authorData = researchData.authors[author];
              return authorData.firstName + " " + authorData.lastName + (i + 1 == research.authors.length ? "" : ", ")
            })}</td>
            <td>{research.date}</td>
            <td>
              <ResearchUrl url={research.href}></ResearchUrl>
            </td>
            <td>{research.for}</td>
            <td>{research.bib}</td>
          </tr>
        /*  */))}
      </tbody>
    </table>
  }

  return (
    <div>
      <h2 className="title">Past Research</h2>
      {researchBody}
    </div>
  )
}

export default ResearchComponent