import http from 'k6/http';
import {  sleep } from 'k6';

export const options = {
    vus: 1, // Number of virtual users
    duration: '1s', // Duration of the test
    thresholds: {
        http_req_failed:['rate<0.01'],
        http_req_duration:['p(95)<200'],
    }
};



export default function () {
    const res = http.get('https://test-api.k6.io/public/crocodiles/1');
    sleep(1);
}
