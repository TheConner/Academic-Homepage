import { lazy, Suspense, useState, useTransition } from 'react';

// Use the JS for the particles system
const LazyLicenceViewer = lazy(() => import('./LazyLicenceViewer'))

// First screen that the users will see
export const LicenceViewer = () => {
  const [showModal, setShowModal] = useState(false)
  const [, startTransition] = useTransition();
  return (
    <>
      <button onClick={() => {
        startTransition(() => {
          setShowModal(true)
        })
      }} className="fake-href-button">
        View OSS Licences
      </button>
      {showModal && <Suspense>
          <LazyLicenceViewer showModal={showModal} setShowModal={setShowModal} />
        </Suspense>}
    </>
  )
}