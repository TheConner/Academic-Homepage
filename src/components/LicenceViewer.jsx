import * as React from 'react'

// Use the JS for the particles system
import { useState } from 'react'
import GenericModal from './GenericModal'
import { graphql, StaticQuery } from 'gatsby'

// First screen that the users will see
function LicenceViewer() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button onClick={() => setShowModal(true)}>View OSS Licences</button>
      <GenericModal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Open Source Dependencies and Licences"
      >
        <p className={'wrap'}>
          These OSS projects are great, and I highly recommend supporting them
          😊 -- if it weren't for these amazing projects, my website would look
          pretty bad!
        </p>
        <StaticQuery
          query={graphql`
            {
              allLicencesJson(sort: { fields: [name], order: ASC }) {
                nodes {
                  remoteVersion
                  relatedTo
                  name
                  material
                  link
                  licenseType
                  licensePeriod
                  installedVersion
                  department
                  author
                }
              }
            }
          `}
          render={(data) => {
            const licences = data.allLicencesJson.nodes
            return licences.map((val, i) => {
              const licenceURLHttp = val.link.replace(
                'git+https://',
                'https://',
              )
              return (
                <div
                  key={'dep-' + i}
                  style={{ paddingBottom: '5px', paddingTop: '5px' }}
                >
                  <tt>
                    {val.name} {val.installedVersion}
                  </tt>
                  <p key={'dep-l-' + i}>
                    <b key={'dep-l-auth-' + i}>Author: </b> {val.author}
                    <br />
                    <b key={'dep-l-liv-' + i}>Licence: </b> {val.licenseType}
                    <br />
                    <b key={'dep-l-pkg-' + i}>Package Link: </b>{' '}
                    <a href={licenceURLHttp} target="_blank" rel="noreferrer">
                      {licenceURLHttp}
                    </a>
                  </p>
                </div>
              )
            })
          }}
        ></StaticQuery>
      </GenericModal>
    </>
  )
}

export default LicenceViewer
