angular
    .module('app')
    .service('authService', authService);

function authService($auth, $rootScope, $state, localStorageService, authDataService) {
    var service = {};

    service.isAuthenticated = function () {
        return !!$auth.isAuthenticated();
    };

    service.setUserAuthenticated = function (user) {
        if (user == null || user == '' || !angular.isObject(user)) {
            service.logout();
            return false;
        } else {
            localStorageService.set('user', user);
            $rootScope.$broadcast('update-auth-data');
            $state.go('app.canciones');
            console.log('start session...' + new Date());
        }
        return user;
    };

    service.getUserAuthenticated = function () {
        if (service.getUser() == null || service.getUser() == '' ||
            !angular.isObject(service.getUser())) {
            service.logout();
            return false;
        }
        return user;
    };

    service.getUser = function () {
        return localStorageService.get('user');
    };

    service.refresh = function () {
        authDataService.get_refresh()
            .then(function (response) {
                $auth.setToken(response.data.new_token);
                $rootScope.$broadcast('update-auth-data');
            })
            .catch(function (error) {});
    };

    service.logout = function () {
        $auth.logout().then(function () {
            localStorageService.clearAll();
            $rootScope.$broadcast('update-auth-data');
            $state.go('app.login');
            console.log('finished session...' + new Date());
        });
    };

    return service;
};