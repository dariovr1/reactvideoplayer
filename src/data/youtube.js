const getResponseByQuery = (q = "") => {
const baseUrl = "https://www.googleapis.com/youtube/v3/search?";
const maxResults = 25;
const key = "AIzaSyA8F9ljSW1USlcWXWWDn6IJx9sjvEN_WLA";
//  'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&type=video&key=[YOUR_API_KEY]' \
return `${baseUrl}part=snippet&maxResults=${maxResults}&q=${q}&type=video&key=${key}`;
};

export default getResponseByQuery;