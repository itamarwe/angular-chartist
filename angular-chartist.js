(function(){
  var angularChartist = angular.module('angular-chartist', []);

  angularChartist.directive('chartistLine', function() {
    var linkFn = function(scope, elm, attrs) {
      var data, options, responsiveOptions, selector, updateChart;
      data = scope.data;
      options = scope.options;
      responsiveOptions = scope.responsiveOptions;

      updateChart = function(){
        Chartist.Line(elm.context, data, options, responsiveOptions);
      };

      scope.$watch('data', function(newValue, oldValue){
        data = newValue;
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
        responsiveOptions: '='
      },
      link: linkFn
    };
  });

  angularChartist.directive('chartistPie', function() {
    var linkFn = function(scope, elm, attrs) {
      var data, options, responsiveOptions, selector, updateChart;
      data = scope.data;
      options = scope.options;
      responsiveOptions = scope.responsiveOptions;

      updateChart = function(){
        Chartist.Pie(elm.context, data, options, responsiveOptions);
      };

      scope.$watch('data', function(newValue, oldValue){
        data = newValue;
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
        responsiveOptions: '='
      },
      link: linkFn
    };
  });

  angularChartist.directive('chartistBar', function() {
    var linkFn = function(scope, elm, attrs) {
      var data, options, responsiveOptions, selector, updateChart;
      data = scope.data;
      options = scope.options;
      responsiveOptions = scope.responsiveOptions;

      updateChart = function(){
        Chartist.Bar(elm.context, data, options, responsiveOptions);
      };

      scope.$watch('data', function(newValue, oldValue){
        data = newValue;
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
        responsiveOptions: '='
      },
      link: linkFn
    };
  });
})();