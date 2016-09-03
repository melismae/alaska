import axios from 'axios';
import jsonp from 'jsonp';
import { INITIAL_FETCH } from '../constants/index';

const url = 'https://platform.postano.com/apiproxy/jsonp/accounts/4299/projects/82658/products/13196/posts';

export function initialFetch() {

    const result = new Promise(function(resolve, request) {
        jsonp(url, null, function (err, data) {
            if (err) {
                reject(err.message);
            } else {
                resolve(data);
            }
        });
    });
    
    return {
        type: INITIAL_FETCH,
        payload: result
    }
}
