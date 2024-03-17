import axios   from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9ba7a6632dbc4eacb8427a73b284a2e1'
    }
})