import { useEffect, useState } from 'react'

import { Box, Button, Heading } from 'react-bulma-components'
import CircleLoader from 'react-spinners/CircleLoader'

import { fakeDelay } from '../../utils/fakeDelay'
import { GenericModal } from '../GenericModal'

import {
  faCheck,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons'
import { RIcon } from '../Icon/RIcon'


export const BibViewer = ({ bib, title, description }) => {
  const BIB_BASE_PATH = `${import.meta.env.BASE_URL}/bibtex/`
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
            <RIcon faIcon={faCheck} style={{ color: 'green' }} />
            {' '}
            Copied to clipboard
          </b>,
        )
      })
      .catch(() => {
        setConfirmation(
          <b>
            {/*<FontAwesomeIcon
              icon={['fas', 'exclamation-triangle']}
              style={{ color: 'red' }}
        />*/}{' '}
          <RIcon faIcon={faExclamationTriangle} style={{ color: 'red' }} />
            Could not copy to clipboard
          </b>,
        )
      })
  }

  const download = (file) => {
    window.open(BIB_BASE_PATH + file, '_blank').focus()
  }

  useEffect(() => {
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

  const footerComponents = (
    <>
      {!!bibContent && (
        <Button.Group>
          <Button color="primary" onClick={() => copyToClipboard(bibContent)}>
            Copy BibTex to Clipboard
          </Button>
          <Button color="secondary" onClick={() => download(bib)}>
            Download BibTex
          </Button>
          <div style={{ paddingBottom: '10px' }}>{confirmation}</div>
        </Button.Group>
      )}
    </>
  )

  return (
    <>
      <Button onClick={() => setShowModal(true)}>View</Button>
      <GenericModal
        showModal={showModal}
        setShowModal={setShowModal}
        title={title}
        footer={footerComponents}
      >
        <Heading subtitle={true}>BibTeX</Heading>
        <p>{description}</p>
        {!!bibContent ? (
          <>
            <Box style={{ backgroundColor: '#282f2f', padding: '0.1rem' }}>
              <pre>
                <code>{bibContent}</code>
              </pre>
            </Box>
          </>
        ) : (
          <div
            className="columns is-centered"
            style={{ paddingBottom: '25px' }}
          >
            <CircleLoader color={'#1abc9c'} loading={true} />
          </div>
        )}
      </GenericModal>
    </>
  )
}
