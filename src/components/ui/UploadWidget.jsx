import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

export function UploadWidget ({ setUserFiels, _updateProfile }) {
  const cloudinaryRef = useRef(null)
  const widgetRef = useRef(null)
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dimvf1zl2',
      uploadPreset: 'ngp3nkgu'
    }, (error, result) => {
      if (!error && result && result.event === 'success') {
        console.log('Done! Here is the image info: ', result.info, result.info.secure_url)
        _updateProfile({ photoURL: result.info.secure_url })
        setUserFiels({ photoURL: result.info.secure_url })
      }
    })
  }, [])
  return (
    <button onClick={() => widgetRef.current.open()}>
      Upload
    </button>
  )
}

UploadWidget.propTypes = {
  _updateProfile: PropTypes.func,
  setUserFiels: PropTypes.func
}
