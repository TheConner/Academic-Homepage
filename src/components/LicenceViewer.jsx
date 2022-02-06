import * as React from 'react'

// Use the JS for the particles system
import { useState } from 'react'
import GenericModal from './GenericModal'
import { ThreeCircles } from 'react-loader-spinner'
import { fakeDelay } from '../utils/fakeDelay'

// First screen that the users will see
function LicenceViewer() {
  const LICENCE_FETCH_ENDPOINT = './json/Licence.json'
  const [showModal, setShowModal] = useState(false)
  const [licences, setLicences] = useState({})

  React.useEffect(() => {
    if (showModal) {
      const minDelay = fakeDelay(1000)
      const fetchPromise = fetch(LICENCE_FETCH_ENDPOINT)

      Promise.all([fetchPromise, minDelay])
        .then((res) => {
          res = res[0]
          if (res.ok) return res.json()
          else throw res
        })
        .then((data) => {
          setLicences(data)
        })
        .catch((err) => {
          setLicences(
            `😖 Error fetching Licence data.\n\nSorry about that. Please see the contact section for how to report this to me.`,
          )
        })
    } else {
      setLicences({})
    }
  }, [showModal])

  const LicenceRenderer = ({ licences }) => {
    // Error pass-through
    if (typeof licences === 'string') {
      return <b>{licences}</b>
    }

    // Actual renderer
    return (
      <>
        <h4 className="subtitle is-4">Package Listing</h4>
        {licences.map((val, i) => {
          const licenceURLHttp = val.link.replace('git+https://', 'https://')
          return (
            <div key={'dep-' + i}>
              {i > 0 ? <hr /> : <></>}
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
        })}
      </>
    )
  }

  const LicenceSummaryRenderer = ({ licences }) => {
    // Get unique licences
    let summary = {}
    for (const { licenseType } of licences) {
      summary[licenseType] = {
        licenseType,
        count: summary[licenseType] ? summary[licenseType].count + 1 : 1
      }
    }
    summary = Object.values(summary)
    return (
      <>
        <h4 className="subtitle is-4">Summary of Licences</h4>
        <ul>
          {summary.map((licence, i) => {
            return (
              <li key={"licence-" + i}>
                <span><b>{licence.licenseType}</b>: {licence.count} packages</span>
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  return (
    <>
      <button onClick={() => setShowModal(true)} className="fake-href-button">
        View OSS Licences
      </button>
      <GenericModal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Open Source Dependencies and Licences"
      >
        <p className={'wrap'} style={{ paddingBottom: '20px' }}>
          These OSS projects are great, and I highly recommend supporting them
          😊 -- if it weren't for these amazing projects, my website would look
          pretty bad!
        </p>
        <div style={{ paddingTop: '10px', paddingBottom: '25px' }}>
          {Object.keys(licences).length === 0 ? (
            <div className="columns is-centered is-mobile">
              <ThreeCircles
                color="#1abc9c"
                height={64}
                width={64}
                ariaLabel="three-circles-rotating"
              />
            </div>
          ) : (
            <>
              <LicenceSummaryRenderer licences={licences}></LicenceSummaryRenderer>
              <br />
              <br />
              <LicenceRenderer licences={licences}></LicenceRenderer>
            </>
          )}
        </div>
      </GenericModal>
    </>
  )
}

export default LicenceViewer
