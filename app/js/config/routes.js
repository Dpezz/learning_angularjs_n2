angular
    .module('app')
    .config(routes);

function routes($stateProvider) {
    // Configuración de las rutas/estados
    $stateProvider
        //  Navbar
        .state('app', {
            access: [],
            templateUrl: 'views/layout/navbar_view.html',
            controller: 'navbarController',
            controllerAs: 'vm',
            abstract: true
        })

        //  Auth
        .state('app.login', {
            url: '/login',
            access: [],
            views: {
                content: {
                    templateUrl: 'views/auth/login_view.html',
                    controller: 'authController',
                    controllerAs: 'vm',
                }
            }
        })
        //  Register
        .state('app.register', {
            url: '/register',
            access: [],
            views: {
                content: {
                    templateUrl: 'views/auth/register_view.html',
                    controller: 'registerController',
                    controllerAs: 'vm',
                }
            }
        })

        // canciones
        .state('app.canciones', {
            url: '/canciones',
            access: [],
            views: {
                content: {
                    templateUrl: 'views/cancion/index_view.html',
                    controller: 'cancionesController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('app.cancion', {
            url: '/canciones/:id',
            access: [],
            views: {
                content: {
                    templateUrl: 'views/cancion/show_view.html',
                    controller: 'cancionController',
                    controllerAs: 'vm'
                }
            }
        })

}