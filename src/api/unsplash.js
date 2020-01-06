import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e4fc8fac0b348c79aa5765a4afbb6b5f891c6f3dde19701037389652240f6158'
    }
});