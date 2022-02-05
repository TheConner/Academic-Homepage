import * as React from "react"
import { useEffect, useState } from 'react'

import { Button } from "react-bulma-components";
import GenericModal from "./GenericModal";

const BibViewer = ({ bib, title, description }) => {
  const [showModal, setShowModal] = useState(false);

  if (!bib) return <></>

  return (
    <>
      <Button onClick={() => setShowModal(true)}>View</Button>
      <GenericModal
        showModal={showModal}
        setShowModal={setShowModal}
        title={title}>
        <h1>Hey ho</h1>
      </GenericModal>
    </>
  )
}


export default BibViewer;