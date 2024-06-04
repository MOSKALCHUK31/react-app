import { useState, useMemo } from 'react'

export const usePagination = (totalCount, limit) => {
    const [page, setPage] = useState(1)

    const totalPages = useMemo(() => {
        return Math.ceil(totalCount / limit)
    }, [totalCount])

    const paginationArr = useMemo(() => {
        const arr = []

        for (let i = 1; i <= totalPages; i++) arr.push(i)

        return arr
    }, [totalPages])

    return {
        page,
        setPage,
        totalPages,
        paginationArr
    }
}
