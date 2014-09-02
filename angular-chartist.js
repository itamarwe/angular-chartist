(function(){
  var angularChartist = angular.module('angular-chartist', []);

  angularChartist.directive('chartistLine', function(selectorFromElement) {
    var linkFn = function(scope, elm, attrs) {
      var data, options, responsiveOptions, selector, updateChart;
      data = scope.data;
      options = scope.options;
      responsiveOptions = scope.responsiveOptions;
      selector = selectorFromElement(elm);

      updateChart = function(){
        Chartist.Line(selector, data, options, responsiveOptions);
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

  angularChartist.directive('chartistPie', function(selectorFromElement) {
    var linkFn = function(scope, elm, attrs) {
      var data, options, responsiveOptions, selector, updateChart;
      data = scope.data;
      options = scope.options;
      responsiveOptions = scope.responsiveOptions;
      selector = selectorFromElement(elm);

      updateChart = function(){
        Chartist.Pie(selector, data, options, responsiveOptions);
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

  angularChartist.directive('chartistBar', function(selectorFromElement) {
    var linkFn = function(scope, elm, attrs) {
      var data, options, responsiveOptions, selector, updateChart;
      data = scope.data;
      options = scope.options;
      responsiveOptions = scope.responsiveOptions;
      selector = selectorFromElement(elm);

      updateChart = function(){
        Chartist.Bar(selector, data, options, responsiveOptions);
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

  angularChartist.factory('selectorFromElement', function(){
    var getSelectorFromElm = function(elm) {
      var classNames, id, selector;
      selector = elm.parents().map(function() {
        return this.tagName;
      }).get().reverse().join(" ");

      if (selector) {
        selector += " " + elm[0].nodeName;
        id = elm.attr("id");
        if (id) {
          selector += "#" + id;
        }
        classNames = elm.attr("class");
        if (classNames) {
          selector += "." + $.trim(classNames).replace(/\s/gi, ".");
        }
      }
      return selector;
    };
    return getSelectorFromElm;
  });
})();