(function () {
    "use strict";

    angular
    .module("myApp")
    .controller("valuesCtrl", ["valuesResource", valuesCtrl]);

    function valuesCtrl(valuesResource, currentUser) {
        var vm = this;

        valuesResource.get.getValues(function (data) {
            vm.values = data;
        });
    }
})();