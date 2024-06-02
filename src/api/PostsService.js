import axios from 'axios'

class PostsServiceClass {
    constructor() {
        this.apiBase = 'https://jsonplaceholder.typicode.com'
    }

    getAll() {
        return axios.get(`${ this.apiBase }/posts`)
    }
}

export const PostsService = new PostsServiceClass()
