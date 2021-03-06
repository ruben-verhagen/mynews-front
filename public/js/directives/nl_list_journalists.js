angular.module('MyNewsApp.Directives').directive('nlListJournalists', function($compile, $http, $templateCache) {
    return {
        restrict: 'E',
        scope: {
            mode: '=mode',
            items: '=items'
        },
        link: function(scope, element, attrs) {

            scope.$watch('mode', function(newValue, oldValue) {
                if (newValue != oldValue) {
                    element.html($templateCache.get('nl_list_journalists_' + scope.mode + '.html'));
                    $compile(element.contents())(scope);
                }
            }, true);

            scope.$watch('items', function(newValue, oldValue) {
                element.html($templateCache.get('nl_list_journalists_' + scope.mode + '.html'));
                $compile(element.contents())(scope);
            }, true);

        }
    };
});