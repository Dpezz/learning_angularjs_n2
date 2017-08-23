angular
    .module('app')
    .service('cancionDataService', cancionDataService);

function cancionDataService(dataService) {
    return {
        all: function () {
            return dataService.httpGet('canciones');
        },
        get: function (cancion) {
            return dataService.httpGet('canciones/' + cancion.id);
        },
        post: function (cancion) {
            return dataService.httpPost('canciones', cancion);
        },
        put: function (cancion) {
            return dataService.httpPut('canciones/' + cancion.id, cancion);
        },
        delete: function (cancion) {
            return dataService.httpDelete('canciones/' + cancion.id);
        },
    };
}