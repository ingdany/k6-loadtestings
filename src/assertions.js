import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 1, // Number of virtual users
    duration: '1s', // Duration of the test
};

export default function () {
    const res = http.get('https://test.k6.io/');
    check(res, 
        { 'verify homepage text: ': (r) => 
            r.body.includes('Collection of simple web-pages suitable for load testing'),
        });
    console.log(`Response status: ${res.status}`);
    sleep(1);
}
