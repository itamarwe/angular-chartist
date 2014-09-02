var angularChartist = angular.module('angular-chartist', []);

angularChartist.directive('chartist', function() {
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

  var linkFn = function(scope, elm, attrs) {
    var data, options, responsiveOptions, selector;
    data = scope.data;
    options = scope.options;
    responsiveOptions = scope.responsiveOptions;
    selector = getSelectorFromElm(elm);
    return Chartist.Line(selector, data, options, responsiveOptions);
  };

  return {
    restrict: 'E',
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
