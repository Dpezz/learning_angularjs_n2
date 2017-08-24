angular
    .module('app')
    .controller('registerController', registerController);

function registerController($state, authDataService) {
    var vm = this;
    vm.register = register;

    // registrarse
    function register() {
        vm.is_loading = true;
        authDataService.post(vm.user)
            .then(function () {
                // volver a login
                $state.go('app.login');
            }).catch(function (error) {
                // error
                vm.error = error;
            });
    }
}