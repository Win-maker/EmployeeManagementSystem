import * as posts from './posts/index';

class API {
    posts :typeof posts

    constructor() {
		this.posts = posts
	}
}

const api = new API();

export default api;
