angular
    .module('app')
    .service('dataService', dataService);

function dataService($http, urlService) {
    var service = {};

    service.httpGet = function (url, config) {
        return $http.get(urlService.getApiUrl() + url, config)
    };

    service.httpPut = function (url, data, config) {
        return $http.put(urlService.getApiUrl() + url, data, config);
    };

    service.httpPost = function (url, data, config) {
        return $http.post(urlService.getApiUrl() + url, data, config);
    };

    service.httpDelete = function (url) {
        return $http.delete(urlService.getApiUrl() + url);
    };

    return service;
}