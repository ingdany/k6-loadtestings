# k6-loadtestings
Practicing Load Performance Testing with K6

# Start project with node

`npm init`

# Install dependencies

`npm install --save-dev eslint`

# Run project with node

`k6 run src/tests.js`

# Run web dashboard

`$env:K6_WEB_DASHBOARD="true"; k6 run script.js`

# Get the html report
```
$env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="html-report.html"; k6 run script.js
```

# Add more VU and ramp up
`k6 run --vus 10 --duration 30s test.js`