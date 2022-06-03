import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { useState } from 'react'

import { Box, Button } from 'react-bulma-components'
import { CircleLoader } from 'react-spinners'

import { fakeDelay } from '../utils/fakeDelay'
import GenericModal from './GenericModal'

const BibViewer = ({ bib, title, description }) => {
  const BIB_BASE_PATH = './bibtex/'
  const MIN_LOAD_TIME = 1000
  const [showModal, setShowModal] = useState(false)
  const [bibContent, setBibContent] = useState('')
  const [confirmation, setConfirmation] = useState(<></>)

  const copyToClipboard = (data) => {
    navigator.clipboard
      .writeText(data)
      .then(() => {
        setConfirmation(
          <b>
            <FontAwesomeIcon
              icon={['fas', 'check']}
              style={{ color: 'green' }}
            />{' '}
            Copied to clipboard
          </b>,
        )
      })
      .catch(() => {
        setConfirmation(
          <b>
            <FontAwesomeIcon
              icon={['fas', 'exclamation-triangle']}
              style={{ color: 'red' }}
            />{' '}
            Could not copy to clipboard
          </b>,
        )
      })
  }

  const download = (file) => {
    window.open(BIB_BASE_PATH + file, '_blank').focus()
  }

  React.useEffect(() => {
    if (showModal) {
      const minDelay = fakeDelay(MIN_LOAD_TIME)

      const fetchPromise = fetch(BIB_BASE_PATH + bib)

      Promise.all([fetchPromise, minDelay])
        .then((res) => {
          res = res[0]
          if (res.ok) return res.text()
          else throw res
        })
        .then((data) => {
          setBibContent(data)
        })
        .catch((err) => {
          setBibContent(
            `😖 Error fetching BibTex "${bib}".\n\nSorry about that. Please see the contact section for how to report this to me.`,
          )
        })
    } else {
      setBibContent('')
      setConfirmation(<></>)
    }
  }, [showModal])

  if (!bib) return <></>

  return (
    <>
      <Button onClick={() => setShowModal(true)}>View</Button>
      <GenericModal
        showModal={showModal}
        setShowModal={setShowModal}
        title={title}
      >
        <p>{description}</p>
        {!!bibContent ? (
          <>
            <Box style={{ backgroundColor: '#282f2f', padding: '0.1rem' }}>
              <pre>
                <code>{bibContent}</code>
              </pre>
            </Box>
            <hr />
            <Button.Group>
              <Button
                color="primary"
                onClick={() => copyToClipboard(bibContent)}
              >
                Copy BibTex to Clipboard
              </Button>
              <Button color="secondary" onClick={() => download(bib)}>
                Download BibTex
              </Button>
              <div style={{ paddingBottom: '10px' }}>{confirmation}</div>
            </Button.Group>
          </>
        ) : (
          <div
            className="columns is-centered"
            style={{ paddingBottom: '25px' }}
          >
            <CircleLoader color={"#1abc9c"} loading={true} />
          </div>
        )}
      </GenericModal>
    </>
  )
}

export default BibViewer
