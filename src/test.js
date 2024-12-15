import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1, // Number of virtual users
  duration: '1s', // Duration of the test
};

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/');
  console.log(`Response status: ${res.status}`);
  sleep(1);
}
