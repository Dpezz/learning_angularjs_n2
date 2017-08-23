angular
    .module('app')
    .service('urlService', urlService);

function urlService(env) {
    var service = {};

    service.getApiUrl = function () {
        return env.DOMAIN + env.API_PATH;
    };

    service.getUrl = function () {
        return env.DOMAIN + env.BASE_PATH;
    };

    return service;
};