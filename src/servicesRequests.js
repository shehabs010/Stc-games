import http from './httpServices';


const domain = 'https://api.rawg.io/api';

// this request take Term or any text to search by it and return result

export const getResultItems = () => http.get(`${domain}/games?key=efc6929f54b0472993f5e6f517794d4e`);

// this request get all tags
export const getTags = () => http.get(`${domain}/tags?key=efc6929f54b0472993f5e6f517794d4e`);


// this request take nextPageToken to get newest Items from next Pages
export const gotoNextPages = nextPageToken => http.get(`${nextPageToken}`);

// this request take item id to get Item details
export const getGameDetails = id => http.get(`${domain}/games/${id}`);
