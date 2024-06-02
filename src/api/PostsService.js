import axios from 'axios'

class PostsServiceClass {
    constructor() {
        this.apiBase = 'https://jsonplaceholder.typicode.com'
    }

    getAll(page = 1, limit = 10,) {
        return axios.get(`${ this.apiBase }/posts`, {
            params: { _limit: limit,  _page: page }
        })
    }
}

export const PostsService = new PostsServiceClass()
