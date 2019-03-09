(function () {
    'use strict';

    angular
        .module("app")
        .component("numbersComponent", {
            templateUrl: "/app/numbers-component.html",
            bindings: {
                selectFirst: "&",
                selectSecond: "&"
            },
            controller: function () {
                var $ctrl = this;

                $ctrl.$onInit = function () {
                    $ctrl.first = 0;
                    $ctrl.second = 0;
                }

                $ctrl.list1 = [10,11,12,13,14,15,16,17,18,19,20];
                $ctrl.list2 = [10,11,12,13,14,15,16,17,18,19,20];

                $ctrl.select = function (number, index){

                    if (number === 1) {
                        $ctrl.selectFirst({value: index});
                    }
                    else {
                        $ctrl.selectSecond({value: index}); 
                    }
                }
            }
        });
})();