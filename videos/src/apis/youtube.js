import axios from 'axios';

const KEY = "AIzaSyD0eWWev_zEoWFv7URVsWQmuRv8pAdOjH0";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});