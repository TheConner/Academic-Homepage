import { useState, useEffect } from "react/cjs/react.development"

function ResearchComponent() {
  const [researchData, setResearchData] = useState(null)

  let researchBody = <p>Loading</p>;

  useEffect(() => {
    if (researchData == null) {
      const promises = [
        fetch("json/research.json").then(res => res.json()),
        fetch("json/authors.json").then(res => res.json())
      ]
      Promise.all(promises)
        .then((data) => {
          setResearchData({
            research: data[0],
            authors: data[1]
          })
        })
    }
  }, [researchData])

  if (researchData != null) {
    researchBody = <table className="table">
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
      {researchData.research.map((research, i) => (
        <tr>
          <th>{research.title}</th>
          <td>{research.authors.map((author, i) => {
            const authorData = researchData.authors[author];
            return authorData.firstName + " " + authorData.lastName
          })}</td>
          <td>{research.date}</td>
          <td>{research.href}</td>
          <td>{research.for}</td>
          <td>{research.bib}</td>
        </tr>
      /*  */))}
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