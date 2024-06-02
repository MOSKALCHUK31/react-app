import { useState } from 'react'

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchHandler = async (...args) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch(err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [fetchHandler, isLoading, error]
}
