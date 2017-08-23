angular
    .module('app')
    .controller('cancionesController', cancionesController);

function cancionesController($state, cancionDataService, env) {
    var vm = this;

    vm.query = {
        order: ['artist', 'title', 'type'],
        limit: 10,
        page: 1
    };

    vm.edit = edit;
    vm.destroy = destroy;

    init();

    // carga todas las canciones
    function init() {
        cancionDataService.all()
            .then(function (response) {
                vm.canciones = response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
        title();
    }

    // edicion de cancion
    function edit(item) {
        $state.go('app.cancion', {
            id: item.id
        });
    }

    // eliminar cancion
    function destroy(item) {
        cancionDataService.delete(item)
            .then(function (response) {
                init();
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    // carga toolbar title
    function title() {
        vm.item = {
            backUrl: '',
            newUrl: 'app.cancion',
            label: 'Canciones',
        };
    }
}