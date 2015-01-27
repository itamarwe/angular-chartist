(function () {
    var angularChartist = angular.module('angular-chartist', []);

    angularChartist.directive('chartist', function () {
        var linkFn = function (scope, elm, attrs) {
            var data, options, responsiveOptions, selector, updateChart;
            data = scope.data;
            options = scope.options;
            responsiveOptions = scope.responsiveOptions;
            selector = "#" + scope.ngId;
            type = scope.type || 'line';
            elm.attr('id', scope.ngId);

            updateChart = function () {

                if (type == 'line'){
                    Chartist.Line(selector, data, options, responsiveOptions);
                }else if (type == 'bar'){
                    Chartist.Bar(selector, data, options, responsiveOptions);
                }else if (type == 'pie'){
                    Chartist.Pie(selector, data, options, responsiveOptions);
                }
            };

            scope.$watch('data', function (newValue, oldValue) {
                data = newValue;
                updateChart();
            });

            scope.$watch('options', function (newValue, oldValue) {
                options = newValue;
                updateChart();
            });

            updateChart();
        };

        return {
            restrict: 'EA',
            template: '<div class="ct-chart"></div>',
            replace: true,
            scope: {
                data: '=',
                options: '=',
                ngId: '@',
                type: '@',
                responsiveOptions: '='
            },
            link: linkFn
        };
    });
})();
