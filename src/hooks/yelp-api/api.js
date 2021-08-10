<<<<<<< HEAD
import { API_BASE_URL, BEARER_TOKEN } from '../config';
=======
import { YELP_API_BASE_URL, BEARER_TOKEN } from '../../hooks/config';
>>>>>>> 2b57ce7 (test)
import queryString from 'query-string';

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams);
    return fetch(`${YELP_API_BASE_URL}${path}?${query}`, {
        mode: 'no-cors',
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}` ,
            Origin: 'localhost',
            withCredentials: true,
        }
    })
}