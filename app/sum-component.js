(function () {
    'use strict';

    angular
        .module("app")
        .component("sumComponent", {
            templateUrl: "/app/sum-component.html",
            controller: function () {
                var $ctrl = this;
            }
        });
})();