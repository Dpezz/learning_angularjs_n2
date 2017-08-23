angular.module('app')
    .directive('dpzToolbar', dpzToolbar);

function dpzToolbar($state) {
    return {
        restrict: 'AE',
        templateUrl: "views/layout/toolbar_view.html",
        scope: {
            item: '=itemData',
        },
        link: function (scope, element, attrs) {
            scope.back = function (url, params) {
                $state.go(url, params);
            };
            scope.new = function (url) {
                $state.go(url);
            };
        }
    };
};