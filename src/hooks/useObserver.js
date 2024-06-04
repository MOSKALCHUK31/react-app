import { useEffect, useRef } from 'react'

export const useObserver = (target, canLoad, isLoading, callback) => {
    const observer = useRef(null)

    useEffect(() => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver((entries, observer) => {
            if (!entries[0].isIntersecting || !canLoad) return

            callback()
        })

        observer.current.observe(target.current)
    }, [isLoading])
}
