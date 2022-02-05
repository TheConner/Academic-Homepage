import * as React from "react"

// Use the JS for the particles system
import { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './LicenceViewer.scss'

const licenceURL = 'json/vendor-license.json';

const customStyles = {
  content: {
    backgroundColor: 'rgb(53, 53, 53)',
    zIndex: 100,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    maxHeight: '75%',
    maxWidth: '25%'
  },
  overlay: {
    zIndex: 100
  }
};

// First screen that the users will see
function LicenceViewer() {
  const [licences, setLicences] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const appRoot = document.getElementById('root');

  // empty array as second argument equivalent to componentDidMount
  useEffect(() => {
    if (showModal) {
      async function fetchLicence() {
        const response = await fetch(licenceURL);
        const json = await response.json();
        setLicences(json);
      }
      fetchLicence();
    }
  }, [showModal]);

  let RenderedLicences;

  if (licences == null) {
    RenderedLicences = <p>Loading</p>
  } else {
    RenderedLicences = licences.map((val, i) => {
      const licenceURLHttp = val.link.replace('git+https://','https://');
      return (
        <div key={"dep-" + i}>
          <h2>{val.name} {val.installedVersion}</h2>
          <p key={"dep-l-" + i}>
            <b key={"dep-l-auth-" + i}>Author: </b> {val.author}
            <br />
            <b key={"dep-l-liv-" + i}>Licence: </b> {val.licenseType}
            <br />
            <b key={"dep-l-pkg-" + i}>Package Link: </b> <a href={licenceURLHttp} target="_blank" rel="noreferrer" >{licenceURLHttp}</a>
          </p>
        </div>
      )
    })
     /*
        {
          "department": "kessler",
          "relatedTo": "stuff",
          "name": "@fortawesome/fontawesome-svg-core",
          "licensePeriod": "perpetual",
          "material": "material",
          "licenseType": "MIT",
          "link": "git+https://github.com/FortAwesome/Font-Awesome.git",
          "remoteVersion": "1.2.36",
          "installedVersion": "1.2.36",
          "author": "Dave Gandy"
        }
      */
  }


  return (
    <>
      <button className="fakehref" onClick={() => setShowModal(true)}>View OSS Licences</button>
      <Modal
        isOpen={showModal}
        appElement={appRoot}
        style={customStyles}>
          <h1>Open Source Dependencies and Licences</h1>
          <p className={"wrap"}>These OSS projects are great, and I highly recommend supporting them 😊 -- if it weren't for these amazing projects, my website would look pretty bad!</p>
          <button className="fakehref" onClick={() => setShowModal(false)}>
            <FontAwesomeIcon className={"closeIcon"}
              icon={['fas', 'window-close']} size={'2x'}></FontAwesomeIcon>
          </button>
          {RenderedLicences}
      </Modal>
    </>
  )
}

export default LicenceViewer
