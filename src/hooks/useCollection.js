/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { addDocument, deleteDocument, getDocuments } from '../helpers/firebase/cloud-firestore'

export function useCollection (collection) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [refresh, setRefresh] = useState(true)

  const addData = async (payload) => {
    setError(null)
    setIsLoading(true)
    try {
      await addDocument('experiences', payload)
      setRefresh(!refresh)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  const deleteData = async (idDoc, collection) => {
    setError(null)
    setIsLoading(true)
    try {
      await deleteDocument(collection, idDoc)
      setData(data.filter(item => item.idDoc !== idDoc))
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (collection) {
      setError(null)
      setIsLoading(true)
      getDocuments(collection)
        .then((data) => {
          if (!data.length) throw new Error('No hay datos')
          setData(data)
        })
        .catch(setError)
        .finally(() => setIsLoading(false))
    }
  }, [collection, refresh])

  return {
    error,
    isLoading,
    data,
    addData,
    deleteData
  }
}