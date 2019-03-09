(function () {
    'use strict';

    angular
        .module("app")
        .component("multiplicationComponent", {
            templateUrl: "/app/multiplication-component.html",
            bindings: {
                first: "<",
                second: "<",
                multiply: "&"
            },
            controller: function () {
                var $ctrl = this;

                $ctrl.$onInit = function () {
                    $ctrl.first = 0;
                    $ctrl.second = 0;
                }

                $ctrl.calculate = function () {
                    $ctrl.multiply = ({value: $ctrl.first*$ctrl.second});
                    console.log("gre v calculate", $ctrl.multiply);
                }
            }
        });
})();