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
                        $ctrl.first = index;
                        $ctrl.selectFirst({value: index});
                    }
                    else {
                        $ctrl.second = index;
                        $ctrl.selectSecond({value: index}); 
                    }
                }
            }
        })

        .directive("onClick", function () {
            return {
                restrict: "A",
                 scope: {
                     number: "<"
                 },
                link: function ($scope, element, attrs) {
                    element.addClass("btn btn-secondary");
                    element.on("click", function () {
                        console.log($scope.number);
                        if (element.hasClass("btn btn-secondary")) {
                            element.removeClass("btn btn-secondary");
                            element.addClass("btn btn-danger");
                        } else {
                            element.removeClass("btn btn-danger");
                            element.addClass("btn btn-secondary");
                        } 
                    });
                }
            }
        });
})();