import axios from 'axios'

class PostsServiceClass {
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com'
        })
    }

    getAll(page = 1, limit = 10,) {
        return this.instance('/posts', {
            params: { _limit: limit, _page: page }
        })
    }

    getPostById(postId) {
        return this.instance(`/posts/${ postId }`)
    }

    getPostComments(postId) {
        return this.instance(`/posts/${ postId }/comments`)
    }
}

export const PostsService = new PostsServiceClass()
