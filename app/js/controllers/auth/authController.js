angular
    .module('app')
    .controller('authController', authController);

function authController($auth, authDataService, authService) {
    var vm = this;
    vm.login = login;

    // iniciar sesion
    function login() {
        vm.is_loading = true;
        $auth.login({
            email: vm.username,
            password: vm.password
        }).then(function () {
            // Login
            authDataService.get()
                .then(function (response) {
                    authService.setUserAuthenticated(response.data);
                }).catch(function (error) {
                    vm.is_loading = false;
                });
        }).catch(function (error) {
            // error
            vm.is_loading = false;
            vm.error = (error.data.error) ? error.data.error : error.data.message;
        });
    }
}