(function () {
    'use strict';

    angular
        .module("app")
        .component("parentComponent", {
            templateUrl: "/app/parent-component.html",
            controller: function () {
                var $ctrl = this;

                $ctrl.$onInit = function () {
                    $ctrl.first = 0;
                    $ctrl.second = 0;
                    $ctrl.multiply = 0;
                }

                $ctrl.onSelectFirst = function (value) {
                    $ctrl.first = value;
                    clearMultiply();
                }

                $ctrl.onSelectSecond = function (value) {
                    $ctrl.second = value;
                    clearMultiply();
                }

                $ctrl.onMultiply = function (value) {
                    $ctrl.multiply = value;
                }

                function clearMultiply () {
                    $ctrl.multiply = 0;
                }

            }
        })

        .directive("onResult", function () {
            return {
                restrict: "E",
                link: function ($scope, element, attrs) {
                    if(element[0].innerText.length>0) {
                        if (!element.hasClass()) {
                            element.addClass("alert alert-warning");
                        } else {
                            element.removeClass("alert alert-warning");
                        } 
                    }
                }
            }
        });

})();
