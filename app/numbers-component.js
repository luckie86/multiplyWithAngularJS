(function () {
    'use strict';

    angular
        .module("app")
        .component("numbersComponent", {
            templateUrl: "/app/numbers-component.html",
            controller: function () {
                var $ctrl = this;

                $ctrl.list1 = [10,11,12,13,14,15,16,17,18,19,20];
                $ctrl.list2 = [10,11,12,13,14,15,16,17,18,19,20];
            }
        });
})();