angular
    .module('app')
    .constant('env', {
        DOMAIN: 'http://localhost:8000',
        // DOMAIN: 'http://api-urbana.octano.cl',
        ENDPOINT_API: '/api',
        API_PATH: '/api/',
        BASE_PATH: '/',
        VERSION: '1.0.0',
    })