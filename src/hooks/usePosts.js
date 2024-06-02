import { useMemo } from 'react'

export const useSortedPosts = (sort, posts) => {
    const sortedPosts = useMemo(() => {
        if (!sort) return posts

        return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }, [sort, posts])

    return sortedPosts
}

export const usePosts = (query, sort, posts) => {
    const sortedPosts = useSortedPosts(sort, posts)

    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchPosts
}
