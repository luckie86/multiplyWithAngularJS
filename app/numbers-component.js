(function () {
    'use strict';

    angular
        .module("app")
        .component("numbersComponent", {
            templateUrl: "/app/numbers-component.html",
            controller: function () {
                var $ctrl = this;

                $ctrl.list1 = [
                    {value:1},
                    {value:2},
                    {value:3},
                    {value:4},
                    {value:5}
                ]

            }
        });
})();