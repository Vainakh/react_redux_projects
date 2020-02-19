import axios from 'axios';

    export default axios.create({

        baseURL: "https://api.unsplash.com",
        headers: {
            Authorization:
                "Client-ID 511f799d65b6cb8a7e7bf21ff5197b9cc8d122bb6873275fe6c9ac8fa4dec43c"
        }
    });