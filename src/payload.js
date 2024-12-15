import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1, // Number of virtual users
  duration: '1s', // Duration of the test
};

export default function () {
    const url = 'https://test.k6.io/login';
    const payload = JSON.stringify({
        email: 'k6io@k6.io',
        password: 'password', 
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    http.post(url, payload, params);
    sleep(1);
}
