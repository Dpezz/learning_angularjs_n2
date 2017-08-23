angular
    .module('app')
    .controller('cancionController', cancionController);

function cancionController($state, $stateParams, cancionDataService, env) {
    var vm = this;

    vm.cancion = {
        id: $stateParams.id
    }

    vm.update = update;
    vm.store = store;

    init();

    // carga cancion stateParams
    function init() {
        if (vm.cancion.id) {
            cancionDataService.get(vm.cancion)
                .then(function (response) {
                    vm.cancion = response.data;
                    title();
                }).catch(function (error) {
                    console.error(error);
                });
        } else {
            title();
        }
    }

    // crea nueva cancion
    function store() {
        cancionDataService.post(vm.cancion)
            .then(function (response) {
                back();
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    // actualiza cancion
    function update() {
        cancionDataService.put(vm.cancion)
            .then(function (response) {
                back();
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    function back() {
        $state.go('app.canciones');
    }

    // cargar toolbar
    function title() {
        vm.type = (vm.cancion.id) ? 'Editar' : 'Nueva';
        vm.item = {
            backUrl: 'app.canciones',
            newUrl: '',
            label: vm.type + ' Canción',
            name: (vm.cancion.id) ? vm.cancion.title.toUpperCase() : '',
        };
    }
}