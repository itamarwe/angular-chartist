var angularChartist = angular.module('angular-chartist', []);

angularChartist.directive('chartist', function() {
  var getSelectorFromElm, linkFn;
  getSelectorFromElm = function(elm) {
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
  linkFn = function(scope, elm, attrs) {
    var data, options, responsiveOptions, selector;
    data = scope.data;
    options = {
      axisX: {
        labelInterpolationFnc: function(value) {
          return value;
        }
      }
    };
    responsiveOptions = [
      [
        'screen and (min-width: 641px) and (max-width: 1024px)', {
          showPoint: false,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value;
            }
          }
        }
      ], [
        'screen and (max-width: 640px)', {
          showLine: false,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value;
            }
          }
        }
      ]
    ];
    selector = getSelectorFromElm(elm);
    return Chartist.Line(selector, data, options, responsiveOptions);
  };
  return {
    restrict: 'E',
    template: '<div class="ct-chart"></div>',
    replace: true,
    scope: {
      data: '='
    },
    link: linkFn
  };
});