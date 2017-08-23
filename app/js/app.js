angular
    .module('app', [
        'ui.router',
        'satellizer',
        'ngAnimate',
        'ngMaterial',
        'LocalStorageModule',
        'md.data.table',
    ])
    .config(function ($authProvider, $urlRouterProvider, env) {
        // Parametros de configuración
        $urlRouterProvider.otherwise('login');
        // authenticathe
        $authProvider.loginUrl = env.DOMAIN + env.ENDPOINT_API + '/auth';
        $authProvider.tokenName = 'token';
        $authProvider.tokenPrefix = 'user';
    })
    .run(function ($rootScope, $state, authService) {
        $rootScope.$on('$stateChangeStart', function (event, toState, routes) {
            // --
        });
    });