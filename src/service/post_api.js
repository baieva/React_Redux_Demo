import Axios from 'axios';

export const getPosts = () => {
    return Axios.get('https://jsonplaceholder.typicode.com/posts');
}