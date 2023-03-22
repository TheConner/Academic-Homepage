import { lazy, Suspense } from 'react'

const LazyGenericModal = lazy(() => import('./LazyGenericModal'))

export const GenericModal = (props) => {
  const { showModal } = props

  return (
    <Suspense>
      {showModal && <LazyGenericModal {...props} />}
    </Suspense>
  )
}