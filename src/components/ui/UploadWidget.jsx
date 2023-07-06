import { useEffect, useRef } from 'react'

export function UploadWidget () {
  const cloudinaryRef = useRef(null)
  const widgetRef = useRef(null)
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dimvf1zl2',
      uploadPreset: 'ngp3nkgu'
    }, (error, result) => { console.log('Error:', error, 'Resultado:', result) })
  }, [])
  return (
    <button onClick={() => widgetRef.current.open()}>
      Upload
    </button>
  )
}
