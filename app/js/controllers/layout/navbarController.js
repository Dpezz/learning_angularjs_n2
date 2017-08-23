angular
    .module('app')
    .controller('navbarController', navbarController);

function navbarController($rootScope, localStorageService, authService) {
    var vm = this;

    vm.init = init;
    vm.logout = logout;

    init();

    // carga inicio
    function init() {
        // -- rootScope
        if (authService.isAuthenticated()) {
            $rootScope.isAuthenticated = true;
            $rootScope.currentUser = localStorageService.get('user');
        } else {
            $rootScope.isAuthenticated = false;
            $rootScope.currentUser = null;
            $rootScope.currentComunidad = null;
        }
    }

    // cerrar sesion
    function logout() {
        authService.logout();
    };

    // evento que escucha cambios en auth
    $rootScope.$on('update-auth-data', function () {
        init();
    });

}