import axios from 'axios'

export class PostsService {
    constructor() {
        this.apiBase = 'https://jsonplaceholder.typicode.com'
    }

    getAll() {
        return axios.get(`${ this.apiBase }/posts`)
    }
}
