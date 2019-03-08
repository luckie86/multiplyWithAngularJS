(function () {
    'use strict';

    angular
        .module("app")
        .component("parentComponent", {
            templateUrl: "/app/parent-component.html",
            controller: function () {
                var $ctrl = this;
            }
        });
})();
