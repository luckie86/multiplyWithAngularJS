(function () {
    'use strict';

    angular
        .module("app")
        .component("multiplicationComponent", {
            templateUrl: "/app/multiplication-component.html",
            controller: function () {
                var $ctrl = this;
            }
        });
})();