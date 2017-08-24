angular
    .module('app')
    .service('authDataService', authDataService);

function authDataService(dataService) {
    return {
        get: function () {
            return dataService.httpGet('auth');
        },
        get_refresh: function () {
            return dataService.httpGet('auth/refresh');
        },
        post: function (usuario) {
            return dataService.httpPost('auth/register', usuario);
        },
    };
}